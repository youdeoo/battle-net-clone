export interface ICarouselItem {
  backgroundImage: {
    laptop: string;
    tablet: string;
  };
  icon: string;
  text?: string;
  buttonText?: string;
}

export interface IGameData {
  gameName: string;
  description: string;
  icon: string;
  carouselData?: Array<ICarouselItem>;
}

export interface IGamesTypes {
  gameType: string;
  commonGameTypeCarouselData?: object;
  games: Array<IGameData>
}

export interface IFormatGameData {
  link: string;
  gameName: string;
  gameType: string;
}