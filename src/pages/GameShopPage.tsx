import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage } from '../lib/utils';
import { TCarouselItem } from '../types/types';
import Carousel from '../components/Carousel';

const GameShopPage: FC = () => {
  const { gameId } = useParams();
  const currentGameTypePage = currentGamePage(gameId)[0].gameType;
  const currentGameNamePage = currentGamePage(gameId)[0].gameName;
  const currnetCommonGameTypeCarousel = currentGamePage(gameId)[0].commonGameTypeCarouselData;
  const currnetGameCarouselData = currentGamePage(gameId)[0].carouselData;

  const getCarouselData = (): Array<TCarouselItem> => {
    if (currentGameNamePage === 'Modern Warfare III') {
      return currnetCommonGameTypeCarousel!;
    }
    else if (currentGameTypePage === 'Call of Duty' && currentGameNamePage !== 'Modern Warfare II') {
      const firstTwoSlides = currnetCommonGameTypeCarousel!.slice(0, 2);
      return [...firstTwoSlides, ...currnetGameCarouselData];
    }
    else if (currentGameTypePage === 'Warcraft' && (currentGameNamePage === 'World of Warcraft' || currentGameNamePage === 'World of Warcraft Classic')) {
      return currnetGameCarouselData;
    }
    else if (['Diablo IV', 'Diablo III', 'Diablo II: Resurrected'].includes(currentGameNamePage)) {
      return [...currnetGameCarouselData, ...currnetCommonGameTypeCarousel!];
    }
    else {
      return currnetGameCarouselData;
    }
  }

  return (
    <div>
      <Carousel carouselData={getCarouselData()} />
    </div>
  );
}

export default GameShopPage;