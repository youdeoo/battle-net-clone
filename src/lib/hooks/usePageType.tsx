import { useLocation } from 'react-router-dom';

const usePageType = (): boolean => {
  const { pathname } = useLocation();
  return pathname === '/desktop' || pathname === '/mobile';
}

export default usePageType;