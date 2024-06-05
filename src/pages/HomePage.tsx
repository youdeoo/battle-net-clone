import { FC } from 'react';
import { deviceHandleHoverEffect } from '../lib/utils';
import gamesData from '../assets/data.json';
import { ICarouselItem, IGameData } from '../interfaces/interfaces';
import ScrollToTopButton from '../components/ScrollToTopButton';
import DesktopPanel from '../components/DesktopPanel';
import MobilePanel from '../components/MobilePanel';
import Carousel from '../components/Carousel';

const getCarouselData = (gameName: string, carouselDataIndex: number): Array<ICarouselItem> => {
  return gamesData
    .flatMap((data) => data.games
      .filter((gamesData) => gamesData.gameName === gameName)
      .map((gamesData) => (gamesData as IGameData).carouselData![carouselDataIndex]));
};

const getCommonCarouselData = () => {
  return gamesData
    .filter((data) => data.gameType === 'Call of Duty')
    .map((data) => data.commonGameTypeCarouselData![0]);
}

const carouselDataGroup: Array<ICarouselItem> = [
  getCarouselData('World of Warcraft', 0),
  getCarouselData('Diablo IV', 0),
  getCommonCarouselData(),
  getCarouselData('Diablo Immortal', 0),
  getCarouselData('Overwatch 2', 0),
  getCarouselData('Hearthstone', 0),
  getCarouselData('World of Warcraft Classic', 1),
].flatMap((data) => data);

const HomePage: FC = () => {
  return (
    <main>
      <ScrollToTopButton />
      <Carousel carouselData={carouselDataGroup} />
      {deviceHandleHoverEffect ? <DesktopPanel /> : <MobilePanel />}
    </main>
  )
}

export default HomePage;