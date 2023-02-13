import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const Detail = (props) => {

    const { id } = useParams();
    const [detailData, setDetailData ] = useState({});


    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if(doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log('No such doc in firebase');
                }
            })
            .catch((error) => {
                console.log("error getting doc:", error);
            });
    }, [id]);

  return (
    <Container>
        <Background>
            <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>

        <ImageTitle>
            <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>

        <ContentMeta>
            <Controls>
                <Player>
                    <PlayArrowIcon />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <PlayArrowIcon />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <AddIcon />
                    <span />
                    <span />
                </AddList>
                <GroupMatch>
                    <div>
                        <GroupsIcon />
                    </div>
                </GroupMatch>
            </Controls>
            <SubTitle>
                {detailData.subTitle}
            </SubTitle>
            <Description>
                {detailData.description}
            </Description>
        </ContentMeta>
    </Container>
  )
}

export default Detail;


const Container = styled.div `
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div `
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;
    }


    @media (max-width: 768px) {
        width: initial;
    }
`;

const ImageTitle = styled.div `
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        max-height: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div `
    max-width: 874px;
`;

const Controls = styled.div `
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`;

const Player = styled.div `
    background: #f9f9f9;
    color: #000;
    font-size: 18px;
    margin: 0px 22px 0px 0px;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;   
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;

    .MuiSvgIcon-root {
        width: 32px;
        font-size: 28px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
    }

    img {
        width: 25px;
    }
`;

const Trailer = styled(Player) `
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    .MuiSvgIcon-root {
        color: #f9f9f9;
    }
`;

const AddList = styled.div `
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
    }

    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
    }

    &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
    }
`;

const GroupMatch = styled.div `
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #fff;

    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;

        .MuiSvgIcon-root {
            width: 40px;
            height: 30px;
        }
    }
`;

const SubTitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;


