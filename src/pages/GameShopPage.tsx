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
    else if (['World of Warcraft', 'World of Warcraft Classic'].includes(currentGameNamePage)) {
      const arrayCopy = [...currnetGameCarouselData];
      arrayCopy.splice(1, 0, ...currnetCommonGameTypeCarousel!);
      const uniqueSlides = Array.from(new Set(currnetGameCarouselData));
      return uniqueSlides;
    }
    else if (['Diablo IV', 'Diablo III', 'Diablo II: Resurrected'].includes(currentGameNamePage)) {
      return [...currnetGameCarouselData, ...currnetCommonGameTypeCarousel!];
    }
    else {
      return currnetGameCarouselData;
    }
  }

  return (
    <main>
      <Carousel carouselData={getCarouselData()} />
    </main>
  );
}

export default GameShopPage;