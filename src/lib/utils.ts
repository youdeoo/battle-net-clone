import { TFormatGameData, TGameData, TProductsCategories, TProduct } from '../types/types';
import gamesData from '@/assets/data.json';

export const deviceHandleHoverEffect = window.matchMedia('(hover: hover)').matches;

export const allowTouchMoveOnCarousel = !deviceHandleHoverEffect || window.innerWidth <= 959;

export const stateIndexEqualIndex = (stateIndex: number, index: number): boolean => {
  return stateIndex === index;
}

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const transformToLink = (text: string): string => {
  if (text !== undefined) {
    return text.replace(/[®:.\s]+/g, '-').toLowerCase();
  }
  else {
    return text;
  }
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
        commonProductsData: (gameData as TGameData).commonProductsData,
        productsCategories: (gameData as TGameData).productsCategories,
      };
    })
  );
}

export const currentGameData = (gameId: string | undefined, productId: string | undefined): Array<TFormatGameData> => {
  if (gameId !== undefined) {
    return formatGameData().flatMap((data) => data.filter((game) => game.link === gameId));
  }
  else {
    return formatGameData().flatMap((data) => data.filter((data) =>
      data.productsCategories?.some((category) => category.products && category.products.some((product) =>
        product.productLink === productId))));
  }
}

export const getCurrentProduct = (currentGameProductsCategories: Array<TProductsCategories>, productId: string): Array<TProduct> => {
  return currentGameProductsCategories!.flatMap((category) =>
    category.products!.filter((product) => product.productLink === productId));
}