import React from 'react';
import styled from 'styled-components';
import Background from '../images/bg.jpg';
import Logo from '../images/logo.svg';
import Logo1 from '../images/logo1.png';

const Login = () => {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src={Logo} />
                <SignUp>GET IT ALL THERE</SignUp>
                <Description>
                    Get Premium Access to Movies, TV shows and Web series with a Disney+ subscription. <span>Subscribe Now</span> to watch all content on Disney+.
                </Description>
                <CTALogoTwo src={Logo1} />
            </CTA>
            <BgImage />
        </Content>
    </Container>
  )
}

export default Login;


const Container = styled.section `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin-bottom: 100vw;
    box-sizing: border-box;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div `
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Background});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div `
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img `
    margin-bottom: 12px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a `
    font-weight: bold;
    color: #f9f9f9;
    background: transparent;
    cursor: pointer;
    margin-bottom: 12px;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    letter-spacing: 2px;

    :hover {
        background: #0063e5;
        border: none;
    }
`;

const Description = styled.p `
    color: hsla(0, 0, 95.3%, 1);
    font-size: 15px;
    margin: 0 0 24px;
    line-height: 1.5;

    > span {
        color: #0063e5;
        font-weight: bold;
    }

    > span:hover {
        cursor: pointer;
    }
`;

const CTALogoTwo = styled.img `
    margin-bottom: 20px;
    width: 100%;
`;





