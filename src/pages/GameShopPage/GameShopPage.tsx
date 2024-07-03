import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage, transformToLink } from '../../lib/utils';
import { TGameCarousel, TProductsCategories } from '../../types/types';
import GameCarousel from '../../components/GameCarousel';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import NavigationLinks from './NavigationLinks';
import Products from './Products';

// All style-related functions are designed for the default
// products and categories layout on a laptop device.

const GameShopPage: FC = () => {
  const { gameId } = useParams();
  const {
    gameType: currentGameTypePage,
    gameName: currentGameNamePage,
    commonGameTypeCarouselData: currentCommonGameTypeCarousel,
    gameCarouselData: currentGameCarouselData,
    productsCategories: currentGameProductsCategories,
    gamePageLinks: currentGamePageLinks
  } = currentGamePage(gameId, undefined)[0];

  const getCarouselData = (): Array<TGameCarousel> => {
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
      checkCurrentProductCategory('World of Warcraft', category, 'Games'),
      checkCurrentProductCategory('World of Warcraft', category, 'Subscriptions'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Game Upgrades'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Subscriptions'),
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Mounts'),
      checkCurrentProductCategory('Warcraft Rumble', category, 'Coin Packs'),
      checkCurrentProductCategory('Hearthstone', category, 'Games'),
      checkCurrentProductCategory('Hearthstone', category, 'Card Packs'),
      checkCurrentProductCategory('Hearthstone', category, 'Mini-Sets'),
      checkCurrentProductCategory('Black Ops 4', category, 'Games'),
      checkCurrentProductCategory('Diablo Immortal', category, 'Games and In-games Content'),
      checkCurrentProductCategory('Diablo III', category, 'Expansions'),
      checkCurrentProductCategory('Diablo II: Resurrected', category, 'Classic Games'),
      checkCurrentProductCategory('Diablo IV', category, 'Battle Pass'),
      checkCurrentProductCategory('Diablo IV', category, 'Armor Packs'),
      checkCurrentProductCategory('Diablo IV', category, 'Add-ons & Platinum'),
      checkCurrentProductCategory('Overwatch 2', category, 'Seasonal Packs'),
      checkCurrentProductCategory('Overwatch 2', category, 'Prisms, Coins, and Tokens'),
      checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2 Shop')
    ].some((fn) => fn);
  }

  const getProductsLayoutInCategoryStyleFlex = {
    twoInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft', category, 'Subscriptions'),
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Game Upgrades'),
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Subscriptions'),
        checkCurrentProductCategory('Hearthstone', category, 'Games'),
        checkCurrentProductCategory('Diablo Immortal', category, 'Games and In-games Content'),
        checkCurrentProductCategory('Diablo III', category, 'Expansions'),
        checkCurrentProductCategory('Diablo II: Resurrected', category, 'Classic Games'),
        checkCurrentProductCategory('Diablo IV', category, 'Battle Pass'),
        checkCurrentProductCategory('Diablo IV', category, 'Add-ons & Platinum'),
        checkCurrentProductCategory('Overwatch 2', category, 'Seasonal Packs')
      ].some((fn) => fn);
    },
    threeInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Mounts'),
        checkCurrentProductCategory('Black Ops 4', category, 'Games'),
        checkCurrentProductCategory('Overwatch 2', category, 'Prisms, Coins, and Tokens')
      ].some((fn) => fn);
    },
    threeAndTwoInRow: (category: TProductsCategories): boolean => {
      return checkCurrentProductCategory('Warcraft Rumble', category, 'Coin Packs');
    },
    fromTwoToFourInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft', category, 'Games'),
        checkCurrentProductCategory('Hearthstone', category, 'Card Packs'),
        checkCurrentProductCategory('Hearthstone', category, 'Mini-Sets'),
        checkCurrentProductCategory('Diablo IV', category, 'Armor Packs')
      ].some((fn) => fn);
    },
    overwatch2ShopProducts: (category: TProductsCategories): boolean => {
      return checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2 Shop');
    }
  }

  const getProductsWithHorizontalLayout = (category: TProductsCategories, productIndex: number): boolean => {
    return [
      checkCurrentProductCategory('World of Warcraft Classic', category, 'Pets'),
      checkCurrentProductCategory('Warcraft Rumble', category, 'Game'),
      checkCurrentProductCategory('Warcraft III', category, 'Games'),
      checkCurrentProductCategory('Hearthstone', category, 'Battlegrounds'),
      checkCurrentProductCategory('Warcraft®: Orcs & Humans', category, 'Games'),
      checkCurrentProductCategory('Warcraft® II: Battle.net® Edition', category, 'Games'),
      checkCurrentProductCategory('Vanguard', category, 'Games'),
      checkCurrentProductCategory('Black Ops Cold War', category, 'Games'),
      checkCurrentProductCategory('Modern Warfare', category, 'Games'),
      checkCurrentProductCategory('Modern Warfare 2 Campaign Remastered', category, 'Games'),
      checkCurrentProductCategory('Diablo II: Resurrected', category, 'Games'),
      checkCurrentProductCategory('Diablo', category, 'Games'),
      checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2: Free to Play'),
      checkCurrentProductCategory('Overwatch 2', category, 'Gear'),
      checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2 Shop') && productIndex === 0
    ].some((fn) => fn);
  }

  const getProductsWithLargeIconInHorizontalLayout = (category: TProductsCategories): boolean => {
    return [
      checkCurrentProductCategory('Warcraft Rumble', category, 'Game'),
      checkCurrentProductCategory('Vanguard', category, 'Games'),
      checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2: Free to Play')
    ].some((fn) => fn);
  }

  const getCategoriesWithVerticalLayout = (category: TProductsCategories): boolean => {
    return [
      checkCurrentProductCategory('Diablo IV', category, 'Diablo IV Shop'),
      checkCurrentProductCategory('Diablo IV', category, 'Armor Packs'),
      checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2 Shop')
    ].some((fn) => fn);
  }

  const productInCategoryAtIndex = (gameName: string, category: TProductsCategories, categoryHeading: string, productIndex: number): boolean => {
    if (checkCurrentProductCategory('Overwatch 2', category, 'Overwatch 2 Shop')) {
      return productIndex === 1 || productIndex === 2;
    }
    else {
      return checkCurrentProductCategory(gameName, category, categoryHeading) && (productIndex === 0 || productIndex === 1);
    }
  }

  const productsWithBiggerFont = (category: TProductsCategories, productIndex: number): boolean => {
    return [
      productInCategoryAtIndex('World of Warcraft', category, 'Games', productIndex),
      productInCategoryAtIndex('World of Warcraft', category, 'Subscriptions', productIndex),
      productInCategoryAtIndex('World of Warcraft Classic', category, 'Game Upgrades', productIndex),
      productInCategoryAtIndex('World of Warcraft Classic', category, 'Subscriptions', productIndex),
      productInCategoryAtIndex('Hearthstone', category, 'Games', productIndex),
      productInCategoryAtIndex('Hearthstone', category, 'Card Packs', productIndex),
      productInCategoryAtIndex('Hearthstone', category, 'Mini-Sets', productIndex),
      productInCategoryAtIndex('Diablo Immortal', category, 'Games and In-games Content', productIndex),
      productInCategoryAtIndex('Diablo III', category, 'Expansions', productIndex),
      productInCategoryAtIndex('Diablo II: Resurrected', category, 'Classic Games', productIndex),
      productInCategoryAtIndex('Diablo IV', category, 'Battle Pass', productIndex),
      productInCategoryAtIndex('Diablo IV', category, 'Armor Packs', productIndex),
      productInCategoryAtIndex('Diablo IV', category, 'Add-ons & Platinum', productIndex),
      productInCategoryAtIndex('Overwatch 2', category, 'Seasonal Packs', productIndex),
      productInCategoryAtIndex('Overwatch 2', category, 'Overwatch 2 Shop', productIndex)
    ].some((fn) => fn);
  }
  console.log('re re');
  return (
    <main>
      <ScrollToTopButton />
      <GameCarousel carouselData={getCarouselData()} />
      <NavigationLinks />

      <section className='px-4'>
        {currentGameProductsCategories!.map((category, categoryIndex) => {
          const verticalCategory = getCategoriesWithVerticalLayout(category);

          return (
            <div
              id={transformToLink(currentGamePageLinks[categoryIndex])}
              className={`grid ${verticalCategory ? 'grid-cols-[auto]' : 'grid-cols-[20%_1fr]'} scroll-m-28 border-b border-borderGray py-16`}
              key={categoryIndex}
            >
              <div className={`${verticalCategory ? 'w-full' : 'w-[80%]'} ${verticalCategory && !category.loginText ? 'mb-10' : category.loginText ? '' : 'pt-[120px]'}`}>
                {category.shopRefreshTime
                  ?
                  <div className='flex items-center justify-between w-full mb-3'>
                    <h2 className='text-2xl text-white font-bold'>
                      {category.categoryHeading}
                    </h2>

                    <div className='flex items-center gap-2'>
                      <img
                        className='max-w-5 size-5 brightness-150'
                        src='/icons/clock.svg'
                        alt=''
                        aria-hidden='true'
                        loading='lazy'
                      />
                      <p className='text-sm font-bold tracking-wider text-almostWhiteSecond uppercase'>{
                        category.shopRefreshTime}
                      </p>
                    </div>
                  </div>
                  :
                  <h2 className='text-2xl text-white font-bold'>
                    {category.categoryHeading}
                  </h2>
                }
                <p className='text-almostWhiteSecond'>{category.categoryDescription}</p>
                {category.loginText
                  &&
                  <div className='text-center mt-8'>
                    <p className='text-xl font-bold text-white mb-6'>{category.loginText}</p>
                    <button type='button' className='blue-button max-w-[8rem] text-lg p-2.5 blue-button-hover'>
                      Log In
                    </button>
                  </div>
                }
              </div>

              {category.secondCategoryHeading
                &&
                <h3 className='text-xl text-white font-bold mb-4'>
                  {category.secondCategoryHeading}
                </h3>
              }

              <Products
                category={category}
                getCategoriesWithFlexStyle={getCategoriesWithFlexStyle}
                getProductsWithHorizontalLayout={getProductsWithHorizontalLayout}
                getProductsLayoutInCategoryStyleFlex={getProductsLayoutInCategoryStyleFlex}
                getProductsWithLargeIconInHorizontalLayout={getProductsWithLargeIconInHorizontalLayout}
                productsWithBiggerFont={productsWithBiggerFont}
              />
            </div>
          )
        })}
      </section>
    </main >
  );
}

export default GameShopPage;