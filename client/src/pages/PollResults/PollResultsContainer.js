import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, useLocation, Redirect, useHistory } from 'react-router';
import { useMutation, useQueryClient } from 'react-query';
import { useQuery, useInfiniteQuery } from 'react-query';
import PollResults from './PollResults';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import api from '../../services/api';
import socket from '../../services/socket';
import { selectCurrentUser } from '../../redux/auth';

const getMessageForReason = reason => {
  switch (reason) {
    case 'already-voted':
      return 'You already voted on this poll.';
    default:
      return null;
  }
};

const PollResultsContainer = () => {
  const { id } = useParams();
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();
  const queryClient = useQueryClient();
  const currentUser = useSelector(selectCurrentUser);
  const messageRef = useRef();
  const [reply, setReply] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);
  const [userDropDownVisible, setUserDropDownVisible] = useState(false);
  const [linkShareModalVisible, setLinkShareModalVisible] = useState(false);
  const [qrCodeModalVisible, setQrCodeModalVisible] = useState(false);
  const [settingsDropDownVisible, setSettingsDropDownVisible] = useState(false);
  const [shareDropDownVisible, setShareDropDownVisible] = useState(false);
  const [reportPollModalVisible, setReportPollModalVisible] = useState(false);
  const [reportCommentModalVisible, setReportCommentModalVisible] = useState(false);

  useEffect(() => {
    // Update votes in realtime
    const listener = data => {
      queryClient.setQueryData(`poll-with-votes/${id}`, oldData => ({
        ...oldData,
        voteCount: oldData.voteCount + 1,
        votes: oldData.votes.map(vote => {
          return vote._id === data.choice._id
            ? { ...vote, voteCount: vote.voteCount + 1 }
            : vote;
        })
      }));
    };

    socket.emit('joinPoll', { pollId: id });
    socket.on('pollVote', listener);

    return () => {
      socket.emit('leavePoll', { pollId: id });
      socket.removeListener('pollVote', listener);
    };
  }, [id, queryClient]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const reason = query.get('reason');

    if (reason) {
      const message = getMessageForReason(reason);
      history.replace({ search: '?' });

      if (message) {
        toastStack.push({ message, type: TOAST_TYPES.INFO });
      }
    }
  }, [location, history]);

  const pollData = useQuery(
    `poll-with-votes/${id}`,
    async () => await api.fetchPollWithVotes(id)
  );

  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const commentsData = useInfiniteQuery(
    `comments/poll/${id}`,
    async ({ pageParam = 1 }) => await api.fetchCommentsFromPoll(id, pageParam),
    { getNextPageParam }
  );

  const showUserDropDown = () => setUserDropDownVisible(true);
  const closeUserDropDown = () => setUserDropDownVisible(false);
  const showLinkShareModal = () => setLinkShareModalVisible(true);
  const hideLinkShareModal = () => setLinkShareModalVisible(false);
  const showQrCodeModal = () => setQrCodeModalVisible(true);
  const hideQrCodeModal = () => setQrCodeModalVisible(false);
  const showReportPollModal = () => setReportPollModalVisible(true);
  const hideReportPollModal = () => setReportPollModalVisible(false);
  const showReportCommentModal = () => setReportCommentModalVisible(true);
  const hideReportCommentModal = () => setReportCommentModalVisible(false);
  const showSettingsDropDown = () => setSettingsDropDownVisible(true);
  const closeSettingsDropDown = () => setSettingsDropDownVisible(false);
  const showShareDropDown = () => setShareDropDownVisible(true);
  const closeShareDropDown = () => setShareDropDownVisible(false);

  const patchPoll = useMutation(async data => await api.patchPoll(id, data), {
    onSuccess: data => {
      queryClient.setQueryData(`poll-with-votes/${id}`, oldData => ({
        ...oldData,
        poll: {
          ...data.poll,
          user: oldData.poll.user
        }
      }));
    },
    onError: err => {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  });

  const postComment = useMutation(async data => await api.postComment(data), {
    onSuccess: data => {
      // Modifying infinite query is really challenging so better invalidate it
      queryClient.invalidateQueries(`comments/poll/${id}`);

      if (!data.comment.parentId) {
        document.getElementById('comments-top').scrollIntoView();
      } else {
        document.getElementById(data.comment.parentId).scrollIntoView();
      }

      toastStack.push({
        message: 'Comment posted successfully',
        type: TOAST_TYPES.SUCCESS
      });
    },
    onError: err => {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  });

  const toggleOption = (e, option) => {
    e.preventDefault();

    const data = {
      visibility: pollData.data.poll.visibility,
      voting: pollData.data.poll.voting,
      options: pollData.data.poll.options
    };

    switch (option) {
      case 'voting':
        return patchPoll.mutate({
          ...data,
          voting: data.voting === 'open' ? 'close' : 'open'
        });
      case 'visibility':
        return patchPoll.mutate({
          ...data,
          visibility: data.visibility === 'public' ? 'private' : 'public'
        });
      case 'comments':
        return patchPoll.mutate({
          ...data,
          options: {
            ...data.options,
            addComments: !data.options.addComments
          }
        });
      case 'login-to-vote':
        return patchPoll.mutate({
          ...data,
          options: {
            ...data.options,
            loginToVote: !data.options.loginToVote
          }
        });
      case 'captcha':
        return patchPoll.mutate({
          ...data,
          options: {
            ...data.options,
            enableCaptcha: !data.options.enableCaptcha
          }
        });
      default:
        return null;
    }
  };

  const onReportPoll = async () => {
    const data = { pollId: pollData.data.poll._id };

    try {
      await api.reportPoll(data);
      hideReportPollModal();

      toastStack.push({
        message: 'The poll was reported and our member will review it',
        type: TOAST_TYPES.SUCCESS
      });
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  const onCommentSubmit = e => {
    e.preventDefault();

    const data = {
      parentId: reply?._id,
      pollId: id,
      message: messageRef.current.value
    };

    postComment.mutate(data);
    messageRef.current.value = '';
    reply && setReply(null);
  };

  const onReportComment = async id => {
    if (selectedComment) {
      const data = { commentId: selectedComment };
      setSelectedComment(null);

      try {
        await api.reportComment(data);
        hideReportCommentModal();

        toastStack.push({
          message: 'The comment was reported and our member will review it',
          type: TOAST_TYPES.SUCCESS
        });
      } catch (err) {
        toastStack.push({
          message: err?.response?.data?.error ?? err.message,
          type: TOAST_TYPES.ERROR
        });
      }
    } else {
      setSelectedComment(id);
      showReportCommentModal();
    }
  };

  if (pollData.isLoading) {
    return null;
  }

  if (pollData.isError) {
    return <Redirect to="/404" />;
  }

  return (
    <PollResults
      pollData={pollData}
      commentsData={commentsData}
      currentUser={currentUser}
      theme={theme}
      reply={reply}
      setReply={setReply}
      messageRef={messageRef}
      userDropDownVisible={userDropDownVisible}
      showUserDropDown={showUserDropDown}
      closeUserDropDown={closeUserDropDown}
      linkShareModalVisible={linkShareModalVisible}
      reportPollModalVisible={reportPollModalVisible}
      reportCommentModalVisible={reportCommentModalVisible}
      qrCodeModalVisible={qrCodeModalVisible}
      showLinkShareModal={showLinkShareModal}
      hideLinkShareModal={hideLinkShareModal}
      settingsDropDownVisible={settingsDropDownVisible}
      showSettingsDropDown={showSettingsDropDown}
      closeSettingsDropDown={closeSettingsDropDown}
      shareDropDownVisible={shareDropDownVisible}
      showShareDropDown={showShareDropDown}
      closeShareDropDown={closeShareDropDown}
      showQrCodeModal={showQrCodeModal}
      hideQrCodeModal={hideQrCodeModal}
      showReportPollModal={showReportPollModal}
      hideReportPollModal={hideReportPollModal}
      hideReportCommentModal={hideReportCommentModal}
      toggleOption={toggleOption}
      onReportPoll={onReportPoll}
      onCommentSubmit={onCommentSubmit}
      onReportComment={onReportComment}
    />
  );
};

export default PollResultsContainer;
