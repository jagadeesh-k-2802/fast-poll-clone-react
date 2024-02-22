import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBarScrolled } from './NavBarScrolled.styled';
import { Left, Right } from './NavBarScrolled.styled';

const NavBarScrolled = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const navBarRef = useRef();

  useEffect(() => {
    const listener = () => {
      window.pageYOffset - 1000 > navBarRef.current.offsetTop
        ? setVisible(true)
        : setVisible(false);
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <StyledNavBarScrolled ref={navBarRef} visible={visible}>
      <Left>
        <Link to="/" />
      </Left>

      <Right>{children}</Right>
    </StyledNavBarScrolled>
  );
};

export default NavBarScrolled;
