type TProductCarousel = {
  slides: Array<string>;
  thumbs: Array<string>;
}

type TProductData = {
  productName: string;
  yellowText?: string;
  grayText: string;
  prices: Array<string>;
  buyProductButton: string;
  giftProductButton: string;
  wishListButton: string;
  descriptionHeading: string;
  descriptions: Array<string>;
  productInfo: Array<{ link: boolean; text: string }>;
  productCarousel: TProductCarousel;
}

export type TProduct = Pick<TGameCarousel, 'productLink'> & Pick<TProductData, 'grayText' | 'yellowText'> & {
  image: string;
  icon: string;
  productGameName?: string;
  heading: string;
  price: string;
  gameCurrencyIcon?: string;
  newProduct?: string;
  deal?: string;
  prePurchase?: string;
  buttonText?: string;
  productData?: TProductData;
}

export type TProductDataProp = {
  productData: TProductData;
}

type AgeRating = Pick<TSystemRequirements, 'name'> & Pick<TProduct, 'image'>;

type TProductFeaturesData = Pick<TProduct, 'image'> & {
  heading: string;
  description: string;
}

type TProductFeatures = {
  heading?: string;
  data: Array<TProductFeaturesData>;
}

type TSystemRequirementsDetail = {
  requirementsHeading: string;
  data: Array<{ heading: string; data: string }>;
}

type TSystemRequirements = {
  name: string;
  logo: string;
  requirements: Array<TSystemRequirementsDetail>;
}

type TPlatform = Omit<TSystemRequirements, 'requirements'>;

type TProductDetails = Pick<TProductFeaturesData, 'heading'> & {
  text: string;
  languages: Array<string>;
  requirements: Array<string>;
  platforms: Array<TPlatform>;
  regions: Array<string>;
}

export type TCommonProductsData = {
  productFeatures: Array<TProductFeatures>;
  systemRequirements: Array<TSystemRequirements>;
  productDetails: Array<TProductDetails>;
  ageRating: Array<AgeRating>;
  publishedBy: string;
  developBy: Array<string>;
}

export type TCommonProductsDataProp = {
  currentCommonProductsData: TCommonProductsData;
}

export type TProductsCategories = {
  categoryHeading: string;
  secondCategoryHeading?: string;
  shopRefreshTime?: string;
  categoryDescription?: string;
  loginText?: string;
  products?: Array<TProduct>;
}

export type TGameCarousel = {
  backgroundImage: {
    laptop: string;
    tablet: string;
  };
  icon: string;
  text?: string;
  linkText?: string;
  productLink?: string;
}

export type TGameData = Pick<TGameCarousel, 'icon'> & {
  gameName: string;
  description: string;
  productsCategories?: Array<TProductsCategories>;
  gamePageLinks: Array<string>;
  commonProductsData: TCommonProductsData;
  gameCarouselData: Array<TGameCarousel>;
}

export type TFormatGameData = Pick<TGameData, 'gameName' | 'gameCarouselData' | 'productsCategories' | 'gamePageLinks' | 'commonProductsData'> & {
  link: string;
  gameType: string;
  commonGameTypeCarouselData?: Array<TGameCarousel>;
}