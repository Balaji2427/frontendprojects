import React, { useEffect } from 'react';
import styled from 'styled-components';
import DisneyLogo from '../images/disneylogo.svg';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/userSlice';


const Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user)
                navigate('/home')
            }
        })
    }, [userName]);

    const signIn = () => {
        if(!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => setUser(result.user))
                .catch((error) => alert(error.message))
        } else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState())
                    navigate('/')
                })
                .catch((error) => alert(error.message))
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

  return (
    <Nav>
        <Logo>
            <img src={DisneyLogo} alt="DisneyLogo" />
        </Logo>

        {
            !userName ? (
            <Login onClick={signIn}>Login</Login>
            ) : (
                <>
                     <NavMenu>
                        <a href="/home">
                            <HomeIcon />
                            <span>HOME</span>
                        </a>
                        <a>
                            <SearchIcon />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <AddIcon />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <StarIcon />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <MovieIcon />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <CameraRollIcon />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={signIn}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
            )
        }
    </Nav>
  );
};

export default Header;


const Nav = styled.nav `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;  
`;

const Logo = styled.a `
    padding: 0;
    width: 100px;
    margin: 4px 0;
    max-height: 70px;
    display: inline-block;

    > img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div `
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
    

        .MuiSvgIcon-root {
            padding-right: 3px;
            min-width: 20px;
            width: 20px;
            height: 20px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.4px;
            line-height: 1.08;
            padding-right: 15px;
            white-space: nowrap;
            position: relative;
            cursor: pointer;
        

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -10px;
                content: "";
                height: 2px;
                left: 0px;
                right: 15px;
                opacity: 0;
                position: absolute;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a `
    background-color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;

    :hover {
        background: #0063e5;
        border: none;
        transition: 0.2s ease;
    }
`;

const UserImg = styled.img `
    height: 100%;
`;

const DropDown = styled.div `
    position: absolute;
    top: 48px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.35);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    width: 80px;
`;

const SignOut = styled.div `
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    :hover {
        ${DropDown} {
            opacity: 1;
            transition: 1s;
        }
    }
`;
