import { useRoutes } from 'react-router-dom';
import useScrollToPageTop from './lib/hooks/useScrollToPageTop';
import useGameOrProductPath from './lib/hooks/useGameProductPath';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import GameShopPage from './pages/gameShopPage/GameShopPage';
import ProductPage from './pages/productPage/ProductPage';
import BuyProductPage from './pages/buyProductPage/BuyProductPage';
import DesktopPage from './pages/desktopPage/DesktopPage';
import MobilePage from './pages/MobilePage';
import DownloadPage from './pages/DownloadPage';
import GameProductPathLayout from './layouts/GameProductPathLayout';

const App = () => {
  useScrollToPageTop();
  const isGameOrProductPath = useGameOrProductPath();

  const element = useRoutes([
    { path: '/', element: <HomePage /> },
    {
      element: <GameProductPathLayout />,
      children: [
        { path: '/game/:gameId', element: <GameShopPage /> },
        { path: '/product/:productId', element: <ProductPage /> }
      ]
    },
    { path: '/checkout/:productId', element: <BuyProductPage /> },
    { path: '/desktop', element: <DesktopPage /> },
    { path: '/mobile', element: <MobilePage /> },
    { path: '/download', element: <DownloadPage /> }
  ]);

  return (
    <>
      {isGameOrProductPath ? '' : <Navigation />}
      {element}
      <Footer />
    </>
  );
}

export default App;