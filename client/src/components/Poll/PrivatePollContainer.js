import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useTheme } from 'styled-components';
import api from '../../services/api';
import PrivatePoll from './PrivatePoll';
import toastStack from '../Toast/ToastStack';
import TOAST_TYPES from '../Toast/ToastEnums';

// Used when viewing My polls or dashboard
const PrivatePollContainer = ({ poll, queryKey }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const theme = useTheme();
  const queryClient = useQueryClient();

  const showDropDown = e => {
    e.preventDefault();
    setDropDownVisible(true);
  };

  const closeDropDown = () => {
    setDropDownVisible(false);
  };

  const patchPoll = useMutation(
    async data => await api.patchPoll(poll._id, data),
    {
      onSuccess: data => {
        queryClient.setQueryData(queryKey, oldData => ({
          ...oldData,
          pages: oldData.pages.map(page => ({
            ...page,
            polls: page.polls.map(oldPoll =>
              oldPoll._id === poll._id ? data.poll : oldPoll
            )
          }))
        }));
      },
      onError: err => {
        toastStack.push({
          message: err?.response?.data?.error ?? err.message,
          type: TOAST_TYPES.ERROR
        });
      }
    }
  );

  const toggleOption = (e, option) => {
    e.preventDefault();

    const data = {
      visibility: poll.visibility,
      voting: poll.voting,
      options: poll.options
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

  return (
    <PrivatePoll
      poll={poll}
      theme={theme}
      dropDownVisible={dropDownVisible}
      showDropDown={showDropDown}
      closeDropDown={closeDropDown}
      toggleOption={toggleOption}
    />
  );
};

export default PrivatePollContainer;
