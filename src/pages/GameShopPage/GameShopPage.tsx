import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { currentGamePage } from '../../lib/utils';
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
  } = currentGamePage(gameId, undefined)[0];

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
      checkCurrentProductCategory('Diablo IV', category, 'Add-ons & Platinum')
    ].some((fn) => fn);
  }

  //Layout concers for laptop view
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
        checkCurrentProductCategory('Diablo IV', category, 'Add-ons & Platinum')
      ].some((fn) => fn);
    },
    threeInRow: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('World of Warcraft Classic', category, 'Mounts'),
        checkCurrentProductCategory('Black Ops 4', category, 'Games')
      ].some((fn) => fn);
    },
    threeAndTwoInRow: (category: TProductsCategories): boolean => {
      return checkCurrentProductCategory('Warcraft Rumble', category, 'Coin Packs');
    },
    hearthstoneLayout: (category: TProductsCategories): boolean => {
      return [
        checkCurrentProductCategory('Hearthstone', category, 'Card Packs'),
        checkCurrentProductCategory('Hearthstone', category, 'Mini-Sets')
      ].some((fn) => fn);
    }
  }

  const getProductsWithHorizontalLayout = (category: TProductsCategories): boolean => {
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
      checkCurrentProductCategory('Diablo', category, 'Games')
    ].some((fn) => fn);
  }

  const getProductsWithLargeIconInHorizontalLayout = (category: TProductsCategories): boolean => {
    return [
      checkCurrentProductCategory('Warcraft Rumble', category, 'Game'),
      checkCurrentProductCategory('Vanguard', category, 'Games')
    ].some((fn) => fn);
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
      productInCategoryAtIndex('Hearthstone', category, 'Games', productIndex),
      productInCategoryAtIndex('Hearthstone', category, 'Card Packs', productIndex),
      productInCategoryAtIndex('Hearthstone', category, 'Mini-Sets', productIndex),
      productInCategoryAtIndex('Diablo Immortal', category, 'Games and In-games Content', productIndex),
      productInCategoryAtIndex('Diablo III', category, 'Expansions', productIndex),
      productInCategoryAtIndex('Diablo II: Resurrected', category, 'Classic Games', productIndex),
      productInCategoryAtIndex('Diablo IV', category, 'Battle Pass', productIndex),
      productInCategoryAtIndex('Diablo IV', category, 'Add-ons & Platinum', productIndex)
    ].some((fn) => fn);
  }

  return (
    <main>
      <ScrollToTopButton />
      <GameCarousel carouselData={getCarouselData()} />
      <NavigationLinks />

      <section className='px-4'>
        {currentGameProductsCategories!.map((category, categoryIndex) => {
          const linkToBlizzardGearShop = category.categoryHeading === 'Gear';
          const flexStyleCategory = getCategoriesWithFlexStyle(category);
          const productHorizontalLayout = getProductsWithHorizontalLayout(category);

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
                  const threeAndTwoProductsInRow = getProductsLayoutInCategoryStyleFlex.threeAndTwoInRow(category);
                  const hearthstoneLayout = getProductsLayoutInCategoryStyleFlex.hearthstoneLayout(category);
                  const largeIconInHorizontalLayout = getProductsWithLargeIconInHorizontalLayout(category);
                  const biggerFont = productsWithBiggerFont(category, productIndex);

                  return (
                    <Link
                      to={`${linkToBlizzardGearShop ? product.productLink : `/product/${product.productLink}`}`}
                      target={`${linkToBlizzardGearShop ? '_target' : '_self'}`}
                      className={`${checkCurrentProductCategory('World of Warcraft', category, 'Games') && 'world-of-warcraft-games-products'} 
                        ${twoProductsInRow && 'two-products-in-row'} ${threeProductsInRow && 'three-products-in-row'} 
                        ${hearthstoneLayout && 'hearthstone-layout'} ${productHorizontalLayout ? 'grid grid-cols-[2fr_1fr]' : 'flex flex-col'}
                        ${threeAndTwoProductsInRow && 'three-and-two-products-in-row'}
                        group relative cursor-pointer rounded bg-mediumGray transition-colors hover:bg-borderGray`}
                      key={productIndex}
                    >
                      <div className={`row-[1_/_span_2] relative ${!productHorizontalLayout && 'pt-[56%]'}`}>
                        <img
                          className={`${productHorizontalLayout ? 'static rounded-l' : 'absolute top-0 rounded-t'} size-full object-cover`}
                          src={product.image}
                          alt={product.heading}
                          loading='lazy'
                        />
                        {product.newProduct
                          &&
                          <span className='product-type bg-red-600'>
                            {product.newProduct}
                          </span>
                        }
                        {product.deal
                          &&
                          <span className='product-type bg-[#6DDB03]'>
                            {product.deal}
                          </span>
                        }
                        {product.prePurchase
                          &&
                          <span className='product-type bg-red-600'>
                            {product.prePurchase}
                          </span>
                        }
                      </div>

                      <dl className={`${productHorizontalLayout && `flex justify-center flex-col h-full`} 
                        ${biggerFont || productHorizontalLayout ? 'pt-8 px-8' : 'pt-6 px-6'} transition-transform duration-300 group-hover:translate-y-[-.3rem]`}
                      >
                        <dd className='flex items-center gap-1'>
                          <img
                            className={`${largeIconInHorizontalLayout ? 'w-full' : 'max-w-6 w-6'}`}
                            src={product.icon}
                            alt=''
                            loading='lazy'
                          />
                          {product.productGameName
                            &&
                            <span className={`${productHorizontalLayout ? 'text-sm' : 'text-xs'} text-almostWhite font-bold tracking-wide uppercase`}>
                              {product.productGameName}
                            </span>
                          }
                        </dd>

                        <dt className={`${biggerFont ? 'text-2xl leading-7' : productHorizontalLayout ? 'text-3xl' : 'text-lg leading-5'} font-bold text-almostWhiteThird my-1.5`}>
                          {product.heading}
                        </dt>
                        {product.yellowText
                          &&
                          <dd className={`${biggerFont ? 'text-base' : productHorizontalLayout ? 'text-lg py-1' : 'text-sm'} text-yellow mb-1.5`}>
                            {product.yellowText}
                          </dd>
                        }
                        <dd className={`${biggerFont ? 'text-sm' : productHorizontalLayout ? 'text-base' : 'text-xs'} text-almostWhite`}>
                          {product.grayText}
                        </dd>
                      </dl>

                      {product.gameCurrencyIcon
                        ?
                        <div className={`flex items-center gap-1 ${biggerFont || productHorizontalLayout ? 'p-8' : 'p-6'} mt-auto`}>
                          <img
                            className='max-w-7 size-7'
                            src={product.gameCurrencyIcon}
                            alt=''
                            aria-hidden='true'
                            loading='lazy'
                          />
                          <span className={`${biggerFont || productHorizontalLayout ? 'text-2xl' : 'text-basis'} font-bold text-almostWhiteThird`}>
                            {product.price}
                          </span>
                        </div>
                        :
                        <div className={`w-full mt-auto ${biggerFont || productHorizontalLayout ? 'p-8' : 'p-6'}`}>
                          <span className={`${biggerFont || productHorizontalLayout ? 'text-2xl' : 'text-basis'} font-bold text-almostWhiteThird`}>
                            {product.price}
                          </span>
                        </div>
                      }

                      {product.buttonText
                        &&
                        <div className='p-6'>
                          <button className='blue-button p-1 blue-button-hover' type='button'>
                            {product.buttonText}
                          </button>
                        </div>
                      }
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