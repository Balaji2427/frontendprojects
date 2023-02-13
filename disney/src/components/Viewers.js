import React from 'react'
import styled from 'styled-components';
import View1 from '../images/view1.png';
import View2 from '../images/view2.png';
import View3 from '../images/view3.png';
import View4 from '../images/view4.png';
import View5 from '../images/view5.png';
import Video1 from '../videos/video1.mp4';
import Video2 from '../videos/video2.mp4';
import Video3 from '../videos/video3.mp4';
import Video4 from '../videos/video4.mp4';
import Video5 from '../videos/video5.mp4';


const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src={View1} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={Video1} type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src={View2} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={Video2} type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src={View3} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={Video3} type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src={View4} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={Video4} type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src={View5} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={Video5} type='video/mp4' />
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers;


const Container = styled.div `
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));


    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div `
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

