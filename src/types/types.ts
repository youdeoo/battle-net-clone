type TProductCarousel = {
  slides: Array<string>;
  thumbs?: Array<string>;
}

type TProductFeaturesData = Pick<TProduct, 'image'> & {
  heading: string;
  description: string;
}

type TProductFeatures = {
  heading?: string;
  secondHeading?: string;
  data: Array<TProductFeaturesData>;
}

type TProdcutsToCompare = {
  images: Array<string>;
  headings: Array<string>;
  prices: Array<string>;
  linkTexts: Array<string>;
}

type TCompareProductsContent = Pick<TSystemRequirements, 'name'> & {
  productsContent: Array<string>;
}

type TCompareProducts = {
  products: TProdcutsToCompare;
  content: Array<TCompareProductsContent>;
}

export type TProductDataPrice = {
  productName: string;
  amount: string;
  additionalInfo?: string;
  image?: string;
}

type TSubscriptionPriceInformation = {
  discountPrice?: string;
  defaultPrice: string;
  discountPercent?: string;
  text: string;
}

type TMobileQRCode = Pick<TProductFeaturesData, 'heading'> & Pick<TProductFeaturesData, 'description'> & {
  qrCode: string;
  phoneIcon: string;
}

type TMobileApps = Pick<TProduct, 'image'> & Pick<TFormatGameData, 'link'>;

type TProductData = {
  productName: string;
  icon: TProduct['icon'];
  yellowText?: string;
  grayText: string;
  price?: string | Array<TProductDataPrice>;
  subscriptionPriceInformation?: Array<TSubscriptionPriceInformation>;
  buyProductButton: string;
  subscribeButton?: string;
  giftProductButton?: string;
  wishListButton?: string;
  mobileQRCode?: TMobileQRCode;
  mobileApps?: Array<TMobileApps>;
  descriptionHeading: string;
  descriptions: Array<string>;
  descriptionList?: Array<string>;
  productInfo: Array<{ link: boolean; text: string }>;
  productCarousel: TProductCarousel;
  compareProducts?: TCompareProducts;
  productFeatures?: Array<TProductFeatures>;
  productRequirements: Array<string>;
}

export type TProduct = Pick<TGameCarousel, 'productLink'> & Pick<TProductData, 'grayText' | 'yellowText'> & {
  id: string;
  image: string;
  icon: string;
  productGameName?: string;
  productName: string;
  price: string;
  gameCurrencyIcon?: string;
  newProduct?: string;
  deal?: string;
  prePurchase?: string;
  linkText?: string;
  productData?: TProductData;
}

export type TProductDataProp = {
  productData: TProductData;
}

type AgeRating = Pick<TSystemRequirements, 'name'> & Pick<TProduct, 'image'>;

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
  platforms: Array<TPlatform>;
  regions: Array<string>;
}

type TCommonProductsData = {
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
  linkText: TProduct['linkText'];
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

export type TFormatGameData = Pick<TGameData, 'gameName' | 'productsCategories' | 'gamePageLinks' | 'commonProductsData' | 'gameCarouselData'> & {
  link: string;
  gameType: string;
  commonGameTypeCarouselData?: Array<TGameCarousel>;
}