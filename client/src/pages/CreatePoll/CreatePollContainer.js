import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import CreatePoll from './CreatePoll';
import { getRandomFromArray } from '../../utils/functions';
import colorsList from '../../data/colorsList';
import api from '../../services/api';

const initalchoices = [
  { id: 0, name: '', color: colorsList[0] },
  { id: 1, name: '', color: colorsList[1] },
  { id: 2, name: '', color: colorsList[2] }
];

const initialOptions = {
  multipleVotes: false,
  loginToVote: false,
  addComments: false,
  enableCaptcha: false
};

const CreatePollContainer = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('animals');
  const [visibility, setVisibility] = useState('private');
  const [captchaValue, setCaptchaValue] = useState('');
  const [pollChoices, setPollChoices] = useState(initalchoices);
  const [pollOptions, setPollOptions] = useState(initialOptions);

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
      choices: pollChoices.filter(poll => poll.name !== ''),
      captchaValue
    };

    try {
      const res = await api.createPoll(data);
      setTimeout(() => (window.location = `/poll/${res.data.poll._id}`), 200);
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <CreatePoll
      currentUser={currentUser}
      question={question}
      category={category}
      visibility={visibility}
      pollChoices={pollChoices}
      pollOptions={pollOptions}
      onChange={onChange}
      setCaptchaValue={setCaptchaValue}
      addPollChoice={addPollChoice}
      onPollChoiceChange={onPollChoiceChange}
      onPollChoiceColorChange={onPollChoiceColorChange}
      onPollOptionsChange={onPollOptionsChange}
      onSubmit={onSubmit}
    />
  );
};

export default CreatePollContainer;
