import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { Redirect, useParams } from 'react-router';
import EditPoll from './EditPoll';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import { selectCurrentUser } from '../../redux/auth';
import { getRandomFromArray } from '../../utils/functions';
import colorsList from '../../data/colorsList';
import api from '../../services/api';

const EditPollContainer = () => {
  const { id } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [visibility, setVisibility] = useState('');
  const [pollChoices, setPollChoices] = useState({});
  const [pollOptions, setPollOptions] = useState([]);

  const pollData = useQuery(
    `private-poll/${id}`,
    async () => await api.fetchPrivatePoll(id),
    {
      onSuccess: data => {
        setQuestion(data.poll.question);
        setCategory(data.poll.category);
        setVisibility(data.poll.visibility);
        setPollChoices(data.poll.choices);
        setPollOptions(data.poll.options);
      }
    }
  );

  // Handles text changes via input
  const onPollChoiceChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const itemIndex = parseInt(name.split('pollOption')[1], 10);

    setPollChoices(prevState =>
      prevState.map((item, index) =>
        itemIndex === index ? { ...item, name: value } : item
      )
    );
  };

  // Handles color changes color picker
  const onPollChoiceColorChange = (newItem, color) => {
    setPollChoices(prevState =>
      prevState.map((item, index) =>
        newItem.id === index ? { ...item, color } : item
      )
    );
  };

  // Configures how poll should behave
  const onPollOptionsChange = e => {
    const name = e.target.name;
    setPollOptions(prevState => ({ ...prevState, [name]: !prevState[name] }));
  };

  // Adds new choice
  const addPollChoice = () => {
    window.scrollBy(0, 120);

    setPollChoices(prevState => [
      ...prevState,
      { id: prevState.length, name: '', color: getRandomFromArray(colorsList) }
    ]);
  };

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'question':
        setQuestion(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'visibility':
        setVisibility(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const data = {
      question,
      category,
      visibility,
      options: pollOptions,
      choices: pollChoices.filter(poll => poll.name !== '')
    };

    try {
      await api.editPoll(id, data);

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

  if (pollData.isLoading) {
    return null;
  }

  if (pollData.isError) {
    return <Redirect to="/404" />;
  }

  return (
    <EditPoll
      currentUser={currentUser}
      question={question}
      category={category}
      visibility={visibility}
      pollChoices={pollChoices}
      pollOptions={pollOptions}
      onPollChoiceChange={onPollChoiceChange}
      onPollChoiceColorChange={onPollChoiceColorChange}
      onPollOptionsChange={onPollOptionsChange}
      addPollChoice={addPollChoice}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default EditPollContainer;
