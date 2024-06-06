export type TCarouselItem = {
  backgroundImage: {
    laptop: string;
    tablet: string;
  };
  icon: string;
  text?: string;
  buttonText?: string;
}

export type TGameData = Pick<TCarouselItem, 'icon'> & {
  gameName: string;
  description: string;
  carouselData: Array<TCarouselItem>;
}

export type TFormatGameData = Pick<TGameData, 'gameName' | 'carouselData'> & {
  link: string;
  gameType: string;
  commonGameTypeCarouselData?: Array<TCarouselItem>;
}