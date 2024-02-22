import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router';
import { useTheme } from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import PollVote from './PollVote';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import { selectCurrentUser } from '../../redux/auth';
import api from '../../services/api';

const PollVoteContainer = () => {
  const { id } = useParams();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const currentUser = useSelector(selectCurrentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [userDropDownVisible, setUserDropDownVisible] = useState(false);
  const [settingsDropDownVisible, setSettingsDropDownVisible] = useState(false);
  const [shareDropDownVisible, setShareDropDownVisible] = useState(false);
  const [linkShareModalVisible, setLinkShareModalVisible] = useState(false);
  const [qrCodeModalVisible, setQrCodeModalVisible] = useState(false);

  const pollData = useQuery(
    `public-poll/${id}`,
    async () => await api.fetchPublicPoll(id)
  );

  const showUserDropDown = () => setUserDropDownVisible(true);
  const closeUserDropDown = () => setUserDropDownVisible(false);
  const showSettingsDropDown = () => setSettingsDropDownVisible(true);
  const closeSettingsDropDown = () => setSettingsDropDownVisible(false);
  const showShareDropDown = () => setShareDropDownVisible(true);
  const closeShareDropDown = () => setShareDropDownVisible(false);
  const showLinkShareModal = () => setLinkShareModalVisible(true);
  const hideLinkShareModal = () => setLinkShareModalVisible(false);
  const showQrCodeModal = () => setQrCodeModalVisible(true);
  const hideQrCodeModal = () => setQrCodeModalVisible(false);

  const patchPoll = useMutation(async data => await api.patchPoll(id, data), {
    onSuccess: data => {
      queryClient.setQueryData(`public-poll/${id}`, oldData => ({
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

  const onSubmit = async e => {
    e.preventDefault();

    const data = {
      pollId: pollData.data.poll._id,
      choiceIndex: selectedChoice.id,
      captchaValue
    };

    try {
      await api.makeVote(data);

      setTimeout(
        () => (window.location = `/poll/results/${pollData.data.poll._id}`),
        200
      );
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onLoginSubmit = async e => {
    e.preventDefault();
    const data = { email, password };

    try {
      await api.login(data);
      setTimeout(() => window.location.reload(), 300);
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  if (pollData.isLoading) {
    return null;
  }

  if (pollData.isError) {
    return <Redirect to="/404" />;
  }

  if (pollData.data.voteByCurrentUser) {
    return (
      <Redirect
        to={`/poll/results/${pollData.data.poll._id}?reason=already-voted`}
      />
    );
  }

  if (pollData.data.poll.voting === 'close') {
    return <Redirect to={`/poll/results/${pollData.data.poll._id}`} />;
  }

  if (pollData.data.poll.options.loginToVote && !currentUser) {
    // Prevents setting state again
    if (!loginModalVisible) {
      setLoginModalVisible(true);
    }
  }

  return (
    <PollVote
      theme={theme}
      currentUser={currentUser}
      pollData={pollData}
      selectedChoice={selectedChoice}
      setSelectedChoice={setSelectedChoice}
      userDropDownVisible={userDropDownVisible}
      settingsDropDownVisible={settingsDropDownVisible}
      shareDropDownVisible={shareDropDownVisible}
      showUserDropDown={showUserDropDown}
      closeUserDropDown={closeUserDropDown}
      showSettingsDropDown={showSettingsDropDown}
      closeSettingsDropDown={closeSettingsDropDown}
      showShareDropDown={showShareDropDown}
      closeShareDropDown={closeShareDropDown}
      email={email}
      password={password}
      setCaptchaValue={setCaptchaValue}
      loginModalVisible={loginModalVisible}
      linkShareModalVisible={linkShareModalVisible}
      showLinkShareModal={showLinkShareModal}
      hideLinkShareModal={hideLinkShareModal}
      qrCodeModalVisible={qrCodeModalVisible}
      showQrCodeModal={showQrCodeModal}
      hideQrCodeModal={hideQrCodeModal}
      onChange={onChange}
      onSubmit={onSubmit}
      toggleOption={toggleOption}
      onLoginSubmit={onLoginSubmit}
    />
  );
};

export default PollVoteContainer;
