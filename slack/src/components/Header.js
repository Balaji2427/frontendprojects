import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar 
            onClick={() => auth.signOut()}
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <AccessTimeIcon />
        </HeaderLeft>

        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search for a chat" />
        </HeaderSearch>

        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div `
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background: #3f0f40;
  color: #fff;
`;

const HeaderLeft = styled.div `
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar) `
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div `
  flex: 0.4;
  display: flex;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: #808080;
  border: 1px solid #808080;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: #fff;
  }
`;

const HeaderRight = styled.div `
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;


