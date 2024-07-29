import { Link } from 'react-router-dom';
import useSpecificPageType from '@/lib/hooks/useSpecificPageType';
import useGameOrProductPath from '@/lib/hooks/useGameProductPath';
import Account from './Account';
import MenuNavigation from './menuNavigation/MenuNavigation';

const Navigation = () => {
  const isGameOrProductPath = useGameOrProductPath();
  const isSpecificPageType = useSpecificPageType();

  return (
    <>
      <div className={`bg-darkBlue px-4 pt-3 ${isSpecificPageType ? 'pb-3 sticky top-0 z-50' : ''}`}>
        <div className='flex items-center justify-between max-w-[1600px] m-auto'>
          <Link to='/' className='active-translate-y'>
            <img
              className='max-w-52 cursor-pointer'
              src='/logo/logo-and-caption.png'
              alt='back to home page'
              loading='lazy'
            />
          </Link>
          <div className='flex gap-1'>
            <Link
              to='/download'
              className='header-link group active-translate-y'
            >
              <img
                className='max-w-5 w-5 group-hover:brightness-[5]'
                src='/icons/download.svg'
                alt='go to page to download battle.net'
                loading='lazy'
              />
              <span className='text-white font-bold'>Download Battle.net</span>
            </Link>
            <div className='header-link group active-translate-y'>
              <img
                className='max-w-5 w-5 group-hover:brightness-[5]'
                src='/icons/circle-question.svg'
                alt='support'
                loading='lazy'
              />
              <span className='text-white font-bold'>Support</span>
            </div>
            <Account />
          </div>
        </div>
      </div>
      {isSpecificPageType || isGameOrProductPath ? '' : <MenuNavigation />}
    </>
  );
}

export default Navigation;