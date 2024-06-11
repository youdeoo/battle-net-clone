export type TCarouselItem = {
  backgroundImage: {
    laptop: string;
    tablet: string;
  };
  icon: string;
  text?: string;
  buttonText?: string;
}

type TProduct = {
  image: string;
  icon: string;
  heading: string;
  yellowText: string;
  grayText: string;
  price: string;
  newProduct?: string;
}

type TSectionProducts = {
  sectionHeading: string;
  sectionDescription: string;
  products: Array<TProduct>;
}

export type TGameData = Pick<TCarouselItem, 'icon'> & {
  gameName: string;
  description: string;
  sectionProducts: Array<TSectionProducts>;
  gamePageLinks: Array<string>;
  gameCarouselData: Array<TCarouselItem>;
}

export type TFormatGameData = Pick<TGameData, 'gameName' | 'gameCarouselData' | 'sectionProducts' | 'gamePageLinks'> & {
  link: string;
  gameType: string;
  commonGameTypeCarouselData?: Array<TCarouselItem>;
}