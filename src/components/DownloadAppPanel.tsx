import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import DownloadForMacLink from './DownloadForMacLink';
import GooglePlayLink from './GooglePlayLink';
import AppStoreLink from './AppStoreLink';

const DownloadAppPanel: FC = () => {
  const { pathname } = useLocation();

  return (
    <section className='grid gap-6 bg-[url("/battle-net-panel/background-download.png")] background-image-styles py-20 mb-20'>
      <h3 className='text-white text-4xl font-bold text-center'>Get the desktop app</h3>
      <p className='text-xl text-almostWhite text-center mb-2'>
        Download Battle.net and join a community of millions.
      </p>
      {pathname === '/mobile'
        ?
        <div className='flex items-center justify-center gap-8'>
          <GooglePlayLink />
          <AppStoreLink />
        </div>
        :
        <DownloadForMacLink />
      }
    </section>
  );
}

export default DownloadAppPanel;