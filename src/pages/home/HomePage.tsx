import { FC } from 'react';
import { deviceHandleHoverEffect } from '../../lib/utils';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import DesktopPanel from '../../components/DesktopPanel';
import MobilePanel from '../../components/MobilePanel';
import ImagesCarousel from './ImagesCarousel';

const HomePage: FC = () => {

  return (
    <main>
      <ScrollToTopButton />
      <ImagesCarousel />

      {deviceHandleHoverEffect ? <DesktopPanel /> : <MobilePanel />}
    </main>
  )
}

export default HomePage;