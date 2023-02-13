import { TrendingDown } from '@mui/icons-material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomeBg from '../images/homebg.png';
import HomeSlider from './HomeSlider';
import NewDisney from './NewDisney';
import Recommends from './Recommends';
import Viewers from './Viewers';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import { setMovies } from '../features/movieSlice';
import { selectUserName } from '../features/userSlice';

const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let original = [];
  let trending = [];
  
  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data()}]
            break;
          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data()}]
            break;
          case 'original':
            original = [...original, { id: doc.id, ...doc.data()}]
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data()}]
            break;
        }
      });

      dispatch (
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      )
    });
  }, [userName]);

  return (
    <Container>
      <HomeSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Trending />
    </Container>
  )
}

export default Home;  


const Container = styled.main `
    position: relative;
    min-height: calc(105vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 10px 20px;

    &:after {
      background: url(${HomeBg}) center center / cover no-repeat fixed;
      content: '';
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
`;

