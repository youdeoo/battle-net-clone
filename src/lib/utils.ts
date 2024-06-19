import { TFormatGameData, TGameData } from '../types/types';
import gamesData from '../assets/data.json';

export const deviceHandleHoverEffect = window.matchMedia('(hover: hover)').matches;

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const transformToLink = (text: string): string => {
  return text.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('®', '').replaceAll(':', '');
}

export const formatGameData = (): Array<Array<TFormatGameData>> => {
  return gamesData.map((data) =>
    data.games.map((gameData) => {
      let link = transformToLink(gameData.gameName);

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
        productsCategories: (gameData as TGameData).productsCategories,
      };
    })
  );
}

export const currentGamePage = (gameId: string | undefined, productId: string | undefined): Array<TFormatGameData> => {
  if (gameId !== undefined) {
    return formatGameData().flatMap((data) => data.filter((game) => game.link === gameId));
  }
  else {
    return formatGameData().flatMap((data) => data.filter((data) => data.productsCategories?.some((category) =>
      category.products.some((product) => product.productLink === productId))));
  }
}