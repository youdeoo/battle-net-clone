import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import SearchShop from './SearchShop';
import Balance from './Balance';

const Menu: FC = () => {
  const gamesData = useSelector((state: RootState) => state.gamesData.gameData);

  return (
    <div className='sticky top-0 grid grid-cols-[1fr_max-content_max-content] bg-darkBlue gap-2 px-4 py-3'>
      <div className='flex w-full rounded-md bg-mediumGray'>
        {gamesData.map((data, gameTypeIndex) => (
          <div
            className='menu-option group first-of-type:rounded-l-md'
            key={gameTypeIndex}
          >
            <div className='flex items-center gap-2'>
              <span className='text-sm text-lightGray font-semibold transition-colors group-hover:text-white'>{data.gameType}</span>
              <img
                className='max-w-3 group-hover:brightness-[5]'
                src='/icons/chevron-down.svg'
                alt=''
                aria-hidden='true'
                loading='lazy'
              />
            </div>

            <div className='menu-element-on-hover left-0'>
              <div className='border border-borderGray rounded-md bg-mediumBlue p-2'>
                {data.games.map((gameData, gameDataIndex) => (
                  <div
                    className='flex items-center gap-2 rounded-md py-3 px-2 transition-colors hover:bg-mediumGray active-translate-y'
                    key={gameDataIndex}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SearchShop />
      <Balance />
    </div>
  );
}

export default Menu;