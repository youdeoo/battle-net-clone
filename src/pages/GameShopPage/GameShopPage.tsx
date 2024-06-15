import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { currentGamePage, transformToLink } from '../../lib/utils';
import { TCarouselItem, TProductsCategories } from '../../types/types';
import GameCarousel from '../../components/GameCarousel';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import NavigationLinks from './NavigationLinks';

const GameShopPage: FC = () => {
  const { gameId } = useParams();
  const {
    gameType: currentGameTypePage,
    gameName: currentGameNamePage,
    commonGameTypeCarouselData: currentCommonGameTypeCarousel,
    gameCarouselData: currentGameCarouselData,
    productsCategories: currentGameProductsCategories,
    gamePageLinks: currentGamePageLinks
  } = currentGamePage(gameId)[0];

  const getCarouselData = (): Array<TCarouselItem> => {
    if (currentGameNamePage === 'Modern Warfare III') {
      return currentCommonGameTypeCarousel!;
    }
    else if (currentGameTypePage === 'Call of Duty' && currentGameNamePage !== 'Modern Warfare II') {
      const firstTwoSlides = currentCommonGameTypeCarousel!.slice(0, 2);
      return [...firstTwoSlides, ...currentGameCarouselData!];
    }
    else if (['World of Warcraft', 'World of Warcraft Classic'].includes(currentGameNamePage)) {
      const arrayCopy = [...currentGameCarouselData];
      arrayCopy.splice(1, 0, ...currentCommonGameTypeCarousel!);
      return arrayCopy;
    }
    else if (['Diablo IV', 'Diablo III', 'Diablo II: Resurrected'].includes(currentGameNamePage)) {
      return [...currentGameCarouselData, ...currentCommonGameTypeCarousel!];
    }
    else {
      return currentGameCarouselData!;
    }
  }

  const checkCurrentProductCategory = (gameName: string, category: TProductsCategories, categoryHeading: string): boolean => {
    return currentGameNamePage === gameName && category.categoryHeading === categoryHeading;
  }

  const getCategoriesWithFlexStyle = (category: TProductsCategories): boolean => {
    return [
      checkCurrentProductCategory('World of Warcraft', category, 'Subscriptions'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Game Upgrades'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Subscriptions'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Mounts')
    ].some((fn) => fn);
  }

  //Layout concers for laptop view
  const getProductsLayoutInCategoryStyleFlex = {
    twoInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft', category, 'Subscriptions'),
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Game Upgrades'),
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Subscriptions'),
      ].some((fn) => fn);
    },
    threeInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Mounts')
      ].some((fn) => fn);
    }
  }

  const getProductsWithHorizontalLayout = (category: TProductsCategories) => {
    return [
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Pets'),
      checkCurrentProductCategory('Warcraft III', category, 'Games'),
      checkCurrentProductCategory('Warcraft®: Orcs & Humans', category, 'Games'),
      checkCurrentProductCategory('Warcraft® II: Battle.net® Edition', category, 'Games')
    ];
  }

  const productInCategoryAtIndex = (gameName: string, category: TProductsCategories, categoryHeading: string, productIndex: number): boolean => {
    return checkCurrentProductCategory(gameName, category, categoryHeading) && (productIndex === 0 || productIndex === 1);
  }

  const productsWithBiggerFont = (category: TProductsCategories, productIndex: number): boolean => {
    return [
      productInCategoryAtIndex('World of Warcraft', category, 'Games', productIndex),
      productInCategoryAtIndex('World of Warcraft', category, 'Subscriptions', productIndex),
      productInCategoryAtIndex('World of Warcraft Classic', category, 'Game Upgrades', productIndex),
      productInCategoryAtIndex('World of Warcraft Classic', category, 'Subscriptions', productIndex),
    ].some((fn) => fn);
  }

  return (
    <main>
      <ScrollToTopButton />
      <GameCarousel carouselData={getCarouselData()} />
      <NavigationLinks />

      <section className='px-4'>
        {currentGameProductsCategories.map((category, categoryIndex) => {
          const flexStyleCategory = getCategoriesWithFlexStyle(category);
          const productHorizontalLayout = getProductsWithHorizontalLayout(category).some((fn) => fn);

          return (
            <div
              id={currentGamePageLinks[categoryIndex].toLowerCase().replaceAll(' ', '-')}
              className='grid grid-cols-[20%_1fr] scroll-m-28 border-b border-borderGray py-16'
              key={categoryIndex}
            >
              <div className='w-[80%] pt-[120px]'>
                <h2 className='text-2xl text-white font-bold'>{category.categoryHeading}</h2>
                <p className='text-almostWhiteSecond'>{category.categoryDescription}</p>
              </div>

              <div className={`${checkCurrentProductCategory('World of Warcraft', category, 'Games') || flexStyleCategory ? 'flex flex-wrap gap-6' : productHorizontalLayout ? 'block' : 'grid grid-cols-4 gap-6'}`}>
                {category.products.map((product, productIndex) => {
                  const twoProductsInRow = getProductsLayoutInCategoryStyleFlex.twoInRow(category);
                  const threeProductsInRow = getProductsLayoutInCategoryStyleFlex.threeInRow(category);
                  const biggerFont = productsWithBiggerFont(category, productIndex);

                  return (
                    <Link
                      to={`/product/${transformToLink(product.heading)}`}
                      className={`${checkCurrentProductCategory('World of Warcraft', category, 'Games') && 'world-of-warcraft-games-products'} 
                        ${twoProductsInRow && 'two-products-in-row'} ${threeProductsInRow && 'three-products-in-row'} 
                        ${productHorizontalLayout ? 'grid grid-cols-[2fr_1fr]' : 'flex flex-col'}
                        group relative cursor-pointer rounded bg-mediumGray transition-colors hover:bg-borderGray`}
                      key={productIndex}
                    >
                      <div className={`relative ${!productHorizontalLayout && 'pt-[56%]'}`}>
                        <img
                          className={`${productHorizontalLayout ? 'static rounded-l' : 'absolute top-0 rounded-t'} size-full object-cover`}
                          src={product.image}
                          alt={product.heading}
                          loading='lazy'
                        />
                        {product.newProduct
                          &&
                          <span className='absolute top-[.6rem] left-[.6rem] text-xs uppercase text-white font-bold tracking-wide bg-red-600 rounded-md py-1 px-2'>
                            {product.newProduct}
                          </span>
                        }
                        {product.deal
                          &&
                          <span className='absolute top-[.6rem] left-[.6rem] text-xs uppercase text-black font-bold tracking-wide bg-[#6DDB03] rounded-md py-1 px-2'>
                            {product.deal}
                          </span>
                        }
                      </div>

                      <div className='flex flex-col h-full p-6'>
                        <dl className={`${productHorizontalLayout && 'flex flex-col justify-center h-[60%]'} transition-transform duration-300 group-hover:translate-y-[-.3rem]`}>
                          <dd className='flex items-center gap-2'>
                            <img
                              className='max-w-6 w-6'
                              src={product.icon}
                              alt=''
                              loading='lazy'
                            />
                            <span className={`${productHorizontalLayout ? 'text-sm' : 'text-xs'} text-almostWhite font-bold tracking-wide uppercase`}>
                              {product.productGameName}
                            </span>
                          </dd>

                          <dt className={`${biggerFont ? 'text-2xl leading-7' : productHorizontalLayout ? 'text-3xl' : 'text-lg leading-5'} font-bold text-almostWhiteThird my-1`}>
                            {product.heading}
                          </dt>
                          <dd className={`${biggerFont ? 'text-base' : productHorizontalLayout ? 'text-lg' : 'text-sm'} text-yellow mb-1`}>
                            {product.yellowText}
                          </dd>
                          <dd className={`${biggerFont || productHorizontalLayout ? 'text-base' : 'text-xs'} text-almostWhite`}>
                            {product.grayText}
                          </dd>
                        </dl>

                        <div className='w-full mt-auto pt-6'>
                          <span className={`${biggerFont || productHorizontalLayout && 'text-2xl'} font-bold text-almostWhiteThird`}>
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </main >
  );
}

export default GameShopPage;