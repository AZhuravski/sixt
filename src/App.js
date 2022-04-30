import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOffersData } from './store/offersActions';
import Notification from './components/Notification';
import Offers from './components/Offers';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOffersData())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Notification />
      <Offers />
    </div>
  );
}

export default App;
