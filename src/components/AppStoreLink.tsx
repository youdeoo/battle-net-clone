import { FC } from 'react';
import { Link } from 'react-router-dom';

const AppStoreLink: FC = () => {
  return (
    <Link
      to='https://apps.apple.com/us/app/battle-net/id1241040030'
      target='_blank'
    >
      <img
        className='max-w-52 border border-lightGray rounded-md'
        src='/battle-net-panel/app-store.png'
        alt='go to app store to download battle net'
      />
    </Link>
  );
}

export default AppStoreLink;