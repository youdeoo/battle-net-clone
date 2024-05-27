import { useLocation } from 'react-router-dom';

const usePageType = (): boolean => {
  const { pathname } = useLocation();
  return pathname === '/desktop' || pathname === '/mobile' || pathname === '/download';
}

export default usePageType;