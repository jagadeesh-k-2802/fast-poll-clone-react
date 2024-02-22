import { useState } from 'react';
import ContactPage from './Contact';
import api from '../../services/api';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';

const ContactContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('general');
  const [feedback, setFeedback] = useState('');

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'topic':
        setTopic(value);
        break;
      case 'feedback':
        setFeedback(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      topic,
      feedback
    };

    try {
      await api.sendContactFeedback(data);

      toastStack.push({
        message: 'Feedback sent and will be reviewed',
        type: TOAST_TYPES.SUCCESS
      });
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <ContactPage
      firstName={firstName}
      lastName={lastName}
      email={email}
      onChange={onChange}
      topic={topic}
      feedback={feedback}
      onSubmit={onSubmit}
    />
  );
};

export default ContactContainer;
