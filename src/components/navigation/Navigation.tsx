import { FC } from 'react';
import { Link } from 'react-router-dom';
import Account from './Account';
import Menu from './menu/Menu';

const Navigation: FC = () => {

  return (
    <>
      <div className='flex items-center justify-between bg-darkBlue px-4 pt-3'>
        <Link to='/' className='active-translate-y'>
          <img
            className='max-w-52 cursor-pointer'
            src='/logo/logo-and-caption.png'
            alt='back to home page'
            loading='lazy'
          />
        </Link>

        <div className='flex gap-1'>
          <div className='header-link group active-translate-y'>
            <img
              className='max-w-5 group-hover:brightness-[5]'
              src='/icons/download.svg'
              alt='download battle.net'
              loading='lazy'
            />
            <span className='text-white font-bold'>Download Battle.net</span>
          </div>

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

      <Menu />
    </>
  );
}

export default Navigation;