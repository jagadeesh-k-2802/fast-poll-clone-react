import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth';
import api from '../../services/api';
import NavBar from './NavBar';
import toastStack from '../../components/Toast/ToastStack';
import TOAST_TYPES from '../../components/Toast/ToastEnums';

const NavBarContainer = ({ extended }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const { pathname } = useLocation();
  const showDropDown = () => setDropDownVisible(true);
  const closeDropDown = () => setDropDownVisible(false);
  const toggleModal = () => setModalVisible(prev => !prev);

  const onLogout = async () => {
    try {
      await api.logout();
      setTimeout(() => (window.location = '/login'), 200);
    } catch (err) {
      toastStack.push({
        message: err?.response?.data?.error ?? err.message,
        type: TOAST_TYPES.ERROR
      });
    }
  };

  return (
    <NavBar
      currentUser={currentUser}
      extended={extended}
      dropDownVisible={dropDownVisible}
      modalVisible={modalVisible}
      onDropDownHide={closeDropDown}
      showDropDown={showDropDown}
      toggleModal={toggleModal}
      pathname={pathname}
      onLogout={onLogout}
    />
  );
};

export default NavBarContainer;
