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
  icon?: string;
  productGameName?: string;
  heading: string;
  yellowText?: string;
  grayText: string;
  price: string;
  newProduct?: string;
  deal?: string;
}

export type TProductsCategories = {
  categoryHeading: string;
  categoryDescription?: string;
  products: Array<TProduct>;
}

export type TGameData = Pick<TCarouselItem, 'icon'> & {
  gameName: string;
  description: string;
  productsCategories?: Array<TProductsCategories>;
  gamePageLinks: Array<string>;
  gameCarouselData: Array<TCarouselItem>;
}

export type TFormatGameData = Pick<TGameData, 'gameName' | 'gameCarouselData' | 'productsCategories' | 'gamePageLinks'> & {
  link: string;
  gameType: string;
  commonGameTypeCarouselData?: Array<TCarouselItem>;
}