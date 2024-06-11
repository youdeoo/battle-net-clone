import { useLocation } from 'react-router-dom';

const useGameOrProductPath = (): boolean => {
  const { pathname } = useLocation();
  const gameShopPathname = pathname.substring(0, 5);
  const productPathname = pathname.substring(0, 8);

  return gameShopPathname === '/game' || productPathname === '/product';
}

export default useGameOrProductPath;