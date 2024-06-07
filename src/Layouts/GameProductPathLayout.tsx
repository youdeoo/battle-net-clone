import { FC } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { currentGamePage } from '../lib/utils';

const GameProductPathLayout: FC = () => {
  const { gameId } = useParams();
  const currentGameTypePage = currentGamePage(gameId)[0].gameType;
  const currentGameNamePage = currentGamePage(gameId)[0].gameName;

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
      return `Call of Duty: ${addShortcutsForCallOfDutyGamesNames(currentGameNamePage)}`
    }
    else {
      return currentGameNamePage;
    }
  }

  return (
    <>
      <div>
        <div className='flex gap-2 pl-8 pb-4'>
          <Link to='/'>
            <img
              className='max-w-5 w-5 hover:brightness-[5]'
              src='/icons/house.svg'
              alt='back to home page'
              loading='lazy'
            />
          </Link>

          <div className='flex gap-1'>
            <img
              className='max-w-3 w-3 rotate-[270deg]'
              src='/icons/chevron-down.svg'
              alt=''
              aria-hidden='true'
            />
            <span className='text-sm text-lightGray'>{generateGamePageName()}</span>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default GameProductPathLayout;