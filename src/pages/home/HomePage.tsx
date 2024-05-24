import { FC } from 'react';
import { deviceHandleHoverEffect } from '../../lib/utils';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import DesktopBattleNet from '../../components/DesktopBattleNet';
import MobileBattleNet from '../../components/MobileBattleNet';
import ImagesCarousel from './ImagesCarousel';

const HomePage: FC = () => {

  return (
    <main>
      <ScrollToTopButton />
      <ImagesCarousel />

      {deviceHandleHoverEffect ? <DesktopBattleNet /> : <MobileBattleNet />}
    </main>
  )
}

export default HomePage;