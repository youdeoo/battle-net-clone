import { Link, useLocation } from 'react-router-dom';

const GooglePlayLink = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to='https://play.google.com/store/apps/details?id=com.blizzard.messenger'
      target='_blanket'
    >
      <img
        className={`max-w-52 border border-lightGray rounded-md ${pathname === '/desktop' ? 'm-auto' : ''}`}
        src='/battle-net-panel/google-play.png'
        alt='go to google play to download battle net'
        loading='lazy'
      />
    </Link>
  );
}

export default GooglePlayLink;