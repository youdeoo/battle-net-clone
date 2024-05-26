import { useRoutes } from 'react-router-dom';
import useScrollToPageTop from './lib/hooks/useScrollToPageTop';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import DesktopPage from './pages/desktop/DesktopPage';
import MobilePage from './pages/mobile/MobilePage';

const App = () => {
  useScrollToPageTop();

  const element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/desktop', element: <DesktopPage /> },
    { path: '/mobile', element: <MobilePage /> }
  ]);

  return (
    <>
      <Navigation />
      {element}
      <Footer />
    </>
  );
}

export default App;