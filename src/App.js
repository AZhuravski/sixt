import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOffersData } from './store/offersActions';
import Notification from './components/Notification';
import Offers from './components/Offers';
import Header from './components/Header';
import styled from '@emotion/styled';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOffersData())
  }, [dispatch])

  return (
    <StyledAppWrapper>
      <Header />
      <Notification />
      <Offers />
    </StyledAppWrapper>
  );
}

export default App;


const StyledAppWrapper = styled.div({
  maxWidth: 1600,
  margin: '0 auto',
})
