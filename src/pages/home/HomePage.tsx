import { FC } from 'react';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import DesktopBattleNet from '../../components/DesktopBattleNet';
import MobileBattleNet from '../../components/MobileBattleNet';
import ImagesCarousel from './ImagesCarousel';

const HomePage: FC = () => {
  const deviceHandleHoverEffect = window.matchMedia('(hover: hover)').matches;

  return (
    <main>
      <ScrollToTopButton />
      <ImagesCarousel />

      {deviceHandleHoverEffect ? <DesktopBattleNet /> : <MobileBattleNet />}
    </main>
  )
}

export default HomePage;