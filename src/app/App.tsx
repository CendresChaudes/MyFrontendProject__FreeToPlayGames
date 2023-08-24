import { AppRouter } from './AppRouter';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppRouter />
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
