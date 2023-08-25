import { useEffect } from 'react';
import { fetchCurrentGame, fetchGames } from '@/entities/game';
import { Notification, useAppDispatch } from '@/shared/lib';
import { AppRouter } from './AppRouter';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchCurrentGame(1));
  }, []);

  return (
    <>
      <Notification />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
