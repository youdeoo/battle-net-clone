import { FC } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { currentGamePage } from '../lib/utils';
import { TProduct } from '../types/types';
import Navigation from '../components/navigation/Navigation';
import MenuNavigation from '../components/navigation/menu-navigation/MenuNavigation';

const GameProductPathLayout: FC = () => {
  const { gameId, productId } = useParams();
  const {
    gameType: currentGameTypePage,
    gameName: currentGameNamePage,
    productsCategories: currentGameProductsCategories
  } = currentGamePage(gameId, productId)[0];
  const isDiabloIVGamePage = currentGameNamePage === 'Diablo IV';
  const isOverwatch2GamePage = currentGameNamePage === 'Overwatch 2';

  const addShortcutsForCallOfDutyGamesNames = (gameName: string): string => {
    switch (gameName) {
      case 'Black Ops Cold War':
        return 'BOCW';
      case 'Modern Warfare':
        return 'MW';
      case 'Modern Warfare 2 Campaign Remastered':
        return 'MW2CR';
      case 'Black Ops 4':
        return 'BO4';
      default:
        return currentGameNamePage;
    }
  }

  const generateGamePageName = (): string => {
    // 'Warzone' and 'Modern Warfare II' aren't required,
    // because clicking on these games should return 'Modern Warfare III'
    // due to it the first in the data.json file for Call of Duty games
    if (currentGameNamePage === 'Modern Warfare III') {
      return 'Call of Duty';
    }
    else if (currentGameTypePage === 'Call of Duty') {
      return `Call of Duty: ${addShortcutsForCallOfDutyGamesNames(currentGameNamePage)}`;
    }
    else {
      return currentGameNamePage;
    }
  }

  const generateProductPageName = (): Array<TProduct> => {
    return currentGameProductsCategories!.flatMap((category) => category.products!.filter((product) =>
      productId === product.productLink && product.productData?.productName));
  }

  return (
    <>
      <Navigation />
      <div className='sticky top-0 z-20'>
        <MenuNavigation />

        <div className='bg-darkBlue'>
          <div className='flex items-center justify-between gap-1 px-8 pt-1 pb-2 max-w-[1600px] w-full m-auto'>
            <div className='flex items-center'>
              <Link to='/' className='mr-0.5'>
                <img
                  className='max-w-5 w-5 hover:brightness-[5]'
                  src='/icons/house.svg'
                  alt='back to home page'
                  loading='lazy'
                />
              </Link>

              <div className='flex gap-1'>
                <img
                  className='self-center max-w-3 size-3 rotate-[270deg]'
                  src='/icons/chevron-down.svg'
                  alt=''
                  aria-hidden='true'
                />
                <span className='text-sm text-lightGray'>{generateGamePageName()}</span>
              </div>

              {productId !== undefined
                &&
                <div className='flex gap-1'>
                  <img
                    className='self-center max-w-3 size-3 rotate-[270deg] ml-0.5'
                    src='/icons/chevron-down.svg'
                    alt=''
                    aria-hidden='true'
                    loading='lazy'
                  />
                  <span className='text-sm text-lightGray'>{generateProductPageName()[0].productData?.productName}</span>
                </div>
              }
            </div>

            {(isDiabloIVGamePage || isOverwatch2GamePage)
              &&
              <Link
                to={`/product/${isDiabloIVGamePage ? 'diablo-iv-platinum' : 'overwatch-coins'}`}
                className='group flex items-center gap-1 text-lightGray'
              >
                <img
                  className='max-w-7 size-7'
                  src={`/products-categories/${isDiabloIVGamePage ? 'diablo/diablo-4/common-images/diablo-currency.png' : 'overwatch/common-images/overwatch-currency.png'}`}
                  alt='add diablo platinum'
                  loading='lazy'
                />
                <span className='text-sm transition-colors group-hover:text-white'>
                  {isDiabloIVGamePage ? 'Add Diablo Platinum' : 'Add Overwatch Coins'}
                </span>

                <div className='bg-lightGrayBackground rounded-md p-1.5 ml-1'>
                  <img
                    className='max-w-3 size-3 brightness-150'
                    src='/icons/plus.svg'
                    alt=''
                    aria-hidden='true'
                    loading='lazy'
                  />
                </div>
              </Link>
            }
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default GameProductPathLayout;