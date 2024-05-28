import { FC } from 'react';
import { Link } from 'react-router-dom';
import usePageType from '../../lib/hooks/usePageType';
import Account from './Account';
import Menu from './menu/Menu';

const Navigation: FC = () => {
  return (
    <>
      <div className={`flex items-center justify-between bg-darkBlue px-4 pt-3 ${usePageType() ? 'pb-3 sticky top-0 z-50' : ''}`}>
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
              className='max-w-5 group-hover:brightness-[5]'
              src='/icons/download.svg'
              alt='go to page to download battle.net'
              loading='lazy'
            />
            <span className='text-white font-bold'>Download Battle.net</span>
          </Link>

          <div className='header-link group active-translate-y'>
            <img
              className='max-w-5 group-hover:brightness-[5]'
              src='/icons/circle-question.svg'
              alt='support'
              loading='lazy'
            />
            <span className='text-white font-bold'>Support</span>
          </div>

          <Account />
        </div>
      </div>

      {usePageType() ? '' : <Menu />}
    </>
  );
}

export default Navigation;