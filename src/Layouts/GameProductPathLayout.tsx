import { FC } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { formatGameData } from '../lib/utils';
import gamesData from '../assets/data.json';

const GameProductPathLayout: FC = () => {
  const { gameId } = useParams();
  const currentGame = formatGameData(gamesData).flatMap((data) => data.filter((game) => game.link === gameId));
  const currentGameName = currentGame[0].gameName;

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
        return currentGameName;
    }
  }

  const generateGamePageName = (): string => {
    if (currentGameName === ('Modern Warfare III' || 'Warzone' || 'Modern Warfare II') && currentGame[0].gameType === 'Call of Duty') {
      return 'Call of Duty';
    }
    else if (currentGame[0].gameType === 'Call of Duty') {
      return `Call of Duty: ${addShortcutsForCallOfDutyGamesNames(currentGameName)}`
    }
    else {
      return currentGameName;
    }
  }

  return (
    <main>
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
      <Outlet />
    </main>
  );
}

export default GameProductPathLayout;