import { TFormatGameData, TGameData } from '../types/types';
import gamesData from '../assets/data.json';

export const deviceHandleHoverEffect = window.matchMedia('(hover: hover)').matches;

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const formatGameData = (): Array<Array<TFormatGameData>> => {
  return gamesData.map((data) =>
    data.games.map((gameData) => {
      let link = gameData.gameName.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('®', '').replaceAll(':', '');

      if (['warzone', 'modern-warfare-iii', 'modern-warfare-ii'].includes(link)) {
        link = 'call-of-duty';
      }
      return {
        link,
        gameName: gameData.gameName,
        gameType: data.gameType,
        gameCarouselData: (gameData as TGameData).gameCarouselData,
        commonGameTypeCarouselData: data.commonGameTypeCarouselData,
        gamePageLinks: (gameData as TGameData).gamePageLinks,
        sectionProducts: (gameData as TGameData).sectionProducts
      };
    })
  );
}

export const currentGamePage = (gameId: string | undefined): Array<TFormatGameData> => {
  return formatGameData().flatMap((data) => data.filter((game) => game.link === gameId));
}