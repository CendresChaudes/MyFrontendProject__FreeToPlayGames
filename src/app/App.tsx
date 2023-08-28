import { ScrollToTop } from '@/shared/lib';
import { AppRouter } from './AppRouter';
import { withProviders } from './providers';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
