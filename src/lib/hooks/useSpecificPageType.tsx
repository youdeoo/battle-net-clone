import { useLocation } from 'react-router-dom';

const useSpecificPageType = (): boolean => {
  const { pathname } = useLocation();
  return pathname === '/desktop' || pathname === '/mobile' || pathname === '/download';
}

export default useSpecificPageType;