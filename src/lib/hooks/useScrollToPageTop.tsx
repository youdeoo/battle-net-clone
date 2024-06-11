import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils';

const useScrollToPageTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname])
}

export default useScrollToPageTop;