export type TCarouselItem = {
  backgroundImage: {
    laptop: string;
    tablet: string;
  };
  icon: string;
  text?: string;
  buttonText?: string;
}

type TProductData = {
  productName: string;
}

type TProduct = {
  productLink: string;
  image: string;
  icon: string;
  productGameName?: string;
  heading: string;
  yellowText?: string;
  grayText: string;
  price: string;
  gameCurrencyIcon?: string;
  newProduct?: string;
  deal?: string;
  prePurchase?: string;
  buttonText?: string;
  productData?: TProductData;
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