import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { setFilteredProducts } from '@/lib/features/filteredProductsSlice';
import { getSelectedFilterValue } from '@/lib/features/selectedFilterValueSlice';
import { formatGameData, transformToLink } from '@/lib/utils';
import type { TProductsCategories, TGameData } from '@/types/types';
import gamesData from '@/assets/data.json';
import SearchShop from './SearchShop';
import Balance from './Balance';

const MenuNavigation = () => {
  const { gameId } = useParams();
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector((state) => state.filteredProducts.filterProducts);

  const currentGamePage = (gameData: TGameData): boolean => {
    return transformToLink(gameData.gameName) !== gameId;
  }

  const clearFilteredProducts = (gameData: TGameData): boolean | { payload: [] | Array<TProductsCategories> } => {
    return currentGamePage(gameData) && filteredProducts.length > 0 && dispatch(setFilteredProducts([]));
  }

  const setSelectedFilterValueToDefault = (gameData: TGameData): boolean | { payload: string } => {
    return currentGamePage(gameData) && dispatch(getSelectedFilterValue('featured'));
  }

  return (
    <div className='sticky top-0 z-20 bg-darkBlue px-4 pt-3 pb-4'>
      <div className='grid grid-cols-[1fr_0.38fr_max-content] gap-2 max-w-[1600px] m-auto'>
        <div className='flex w-full rounded-md bg-mediumGray'>
          {(gamesData).map((data, gameTypeIndex) => (
            <div
              className='menu-option group first-of-type:rounded-l-md'
              key={data.gameType}
            >
              <div className='flex items-center gap-2'>
                <span className='text-sm text-lightGray font-semibold transition-colors group-hover:text-white'>
                  {data.gameType}
                </span>
                <img
                  className='max-w-3 w-3 group-hover:brightness-[5]'
                  src='/icons/chevron-down.svg'
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                />
              </div>
              <div className='menu-element-on-hover left-0 group-hover:visible group-hover:opacity-100'>
                <div className='border border-borderGray rounded-md bg-mediumBlue p-2'>
                  {data.games.map((gameData, gameDataIndex) => (
                    <Link
                      onClick={() => { clearFilteredProducts(gameData as TGameData); setSelectedFilterValueToDefault(gameData as TGameData) }}
                      className='flex items-center gap-2 rounded-md py-3 px-2 transition-colors hover:bg-mediumGray active-translate-y'
                      to={`/${data.gameType === 'More' ? 'product' : 'game'}/${formatGameData()[gameTypeIndex][gameDataIndex].link}`}
                      key={gameData.gameName}
                    >
                      <img
                        className='max-w-8'
                        src={gameData.icon}
                        alt={data.gameType}
                        loading='lazy'
                      />
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-lightGray'>{gameData.gameName}</span>
                        <span className='text-xs text-gray'>{gameData.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <SearchShop />
        <Balance />
      </div>
    </div>
  );
}

export default MenuNavigation;