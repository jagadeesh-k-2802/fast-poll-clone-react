import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import AccountActions from './components/AccountActions.styled';
import DeleteModalContent from './components/DeleteModalContent.styled';
import UserNamePreview from './components/UserNamePreview.styled';
import Container from '../../components/Container/Container.styled';
import Flex from '../../components/Flex/Flex.styled';
import TextFieldGroup from '../../components/InputGroup/TextFieldGroup.styled';
import TextAreaGroup from '../../components/InputGroup/TextAreaGroup.styled';
import StyledButton from '../../components/Button/Button.styled';
import Modal from '../../components/Modal/Modal.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import SettingsWrapper from './components/SettingsWrapper.styled';

const Settings = ({
  firstName,
  lastName,
  username,
  bio,
  twitter,
  instagram,
  facebook,
  producthunt,
  currentUser,
  avatar,
  fileInputRef,
  deleteModalVisible,
  showDeleteModal,
  onDeleteModalHide,
  onAvatarChange,
  onFileSelected,
  onChange,
  onSubmit,
  onDeleteRequest
}) => {
  return (
    <>
      <Helmet>
        <title>Settings | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <H1>Edit Profile</H1>
          <p>Update your account information using the below form</p>

          <SettingsWrapper>
            <div>
              <form onSubmit={onSubmit}>
                <Flex gap="4rem">
                  <TextFieldGroup
                    name="firstName"
                    value={firstName}
                    label="First Name"
                    type="text"
                    placeholder="Eg: James"
                    onChange={onChange}
                    fullWidth
                  />

                  <TextFieldGroup
                    name="lastName"
                    value={lastName}
                    label="Last Name"
                    type="text"
                    placeholder="Eg: Green"
                    onChange={onChange}
                    fullWidth
                  />
                </Flex>

                <TextFieldGroup
                  name="username"
                  value={username}
                  label="Username"
                  type="text"
                  placeholder="Eg: jamesgreen"
                  onChange={onChange}
                  fullWidth
                />

                <UserNamePreview>
                  fast-poll.com/<strong>{username}</strong>
                </UserNamePreview>

                <TextAreaGroup
                  name="bio"
                  value={bio}
                  label="Bio"
                  placeholder="A little about you ..."
                  onChange={onChange}
                  fullWidth
                />

                <TextFieldGroup
                  name="twitter"
                  value={twitter}
                  label="Twitter"
                  type="text"
                  placeholder="Twitter profile url"
                  onChange={onChange}
                  fullWidth
                />

                <TextFieldGroup
                  name="instagram"
                  value={instagram}
                  label="Instagram"
                  type="text"
                  placeholder="Instagram profile url"
                  onChange={onChange}
                  fullWidth
                />

                <TextFieldGroup
                  name="facebook"
                  value={facebook}
                  label="Facebook"
                  type="text"
                  placeholder="Facebook profile url"
                  onChange={onChange}
                  fullWidth
                />

                <TextFieldGroup
                  name="producthunt"
                  value={producthunt}
                  label="Producthunt"
                  type="text"
                  placeholder="Producthunt profile url"
                  onChange={onChange}
                  fullWidth
                />

                <StyledButton $type="primary" type="submit">
                  Save Changes
                </StyledButton>
              </form>

              <AccountActions>
                <h3>Account Actions</h3>

                <p>
                  Want to change your Password or delete your account? Click the
                  button below.
                </p>

                <div>
                  <StyledButton onClick={showDeleteModal} $type="danger">
                    Delete Account
                  </StyledButton>

                  <StyledButton as={Link} to="/password-change" $type="warning">
                    Change Password
                  </StyledButton>
                </div>
              </AccountActions>
            </div>

            <div>
              <img
                src={avatar ?? `/avatar/${currentUser.avatar}`}
                alt="avatar"
              />

              <input
                ref={fileInputRef}
                type="file"
                onChange={onFileSelected}
                style={{ display: 'none' }}
              />

              <StyledButton
                onClick={onAvatarChange}
                $type={avatar ? 'primary' : 'secondary'}
                children={avatar ? 'Save Changes' : 'Change Avatar'}
              />
            </div>
          </SettingsWrapper>
        </Container>
      </Main>

      <Footer />

      <Modal visible={deleteModalVisible} onHide={onDeleteModalHide} showClose>
        <DeleteModalContent>
          <h2>Are you sure you want to delete your account?</h2>

          <p>
            This is permenant and once deleted cannot be recovered, we will send
            you a link to confirm your account deletion.
          </p>

          <StyledButton onClick={onDeleteRequest} $type="danger">
            Delete Account
          </StyledButton>
        </DeleteModalContent>
      </Modal>
    </>
  );
};

export default Settings;
