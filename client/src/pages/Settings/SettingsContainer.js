import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';
import Settings from './Settings';
import { dataURItoBlob } from '../../utils/functions';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';
import api from '../../services/api';

const SettingsContainer = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { socialProfiles } = currentUser;
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [username, setUsername] = useState(currentUser.username);
  const [bio, setBio] = useState(currentUser.bio);
  const [twitter, setTwitter] = useState(socialProfiles.twitter);
  const [instagram, setInstagram] = useState(socialProfiles.instagram);
  const [facebook, setFacebook] = useState(socialProfiles.facebook);
  const [producthunt, setProductHunt] = useState(socialProfiles.producthunt);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef();

  const showDeleteModal = () => setDeleteModalVisible(true);
  const closeDeleteModal = () => setDeleteModalVisible(false);

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
      case 'username':
        setUsername(value);
        break;
      case 'bio':
        setBio(value);
        break;
      case 'twitter':
        setTwitter(value);
        break;
      case 'instagram':
        setInstagram(value);
        break;
      case 'facebook':
        setFacebook(value);
        break;
      case 'producthunt':
        setProductHunt(value);
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
      username,
      bio,
      socialProfiles: {
        facebook,
        twitter,
        instagram,
        producthunt
      }
    };

    try {
      await api.updateUserDetails(data);
      setTimeout(() => window.location.reload(), 200);
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  const onDeleteRequest = async () => {
    try {
      await api.requestDelete();
      closeDeleteModal();

      toastStack.push({
        message: 'We have sent you a mail to delete your account',
        type: TOAST_TYPES.SUCCESS
      });
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  const onAvatarChange = async () => {
    if (avatar) {
      try {
        const blob = await dataURItoBlob(avatar);
        const formData = new FormData();
        formData.append('avatar', blob);
        await api.updateAvatar(formData);

        toastStack.push({
          message: 'Avatar Updated Successfully',
          type: TOAST_TYPES.SUCCESS
        });

        setTimeout(() => window.location.reload(), 1000);
      } catch (err) {
        toastStack.push({
          message: err?.response?.data?.error ?? err.message,
          type: TOAST_TYPES.ERROR
        });
      }
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  const onFileSelected = e => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Settings
      firstName={firstName}
      lastName={lastName}
      username={username}
      bio={bio}
      twitter={twitter}
      instagram={instagram}
      facebook={facebook}
      producthunt={producthunt}
      fileInputRef={fileInputRef}
      currentUser={currentUser}
      avatar={avatar}
      deleteModalVisible={deleteModalVisible}
      showDeleteModal={showDeleteModal}
      onDeleteModalHide={closeDeleteModal}
      onAvatarChange={onAvatarChange}
      onFileSelected={onFileSelected}
      onChange={onChange}
      onSubmit={onSubmit}
      onDeleteRequest={onDeleteRequest}
    />
  );
};

export default SettingsContainer;
