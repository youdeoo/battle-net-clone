import { useLocation } from 'react-router-dom';
import DownloadForMacLink from './DownloadForMacLink';
import GooglePlayLink from './GooglePlayLink';
import AppStoreLink from './AppStoreLink';

const DownloadAppPanel = () => {
  const { pathname } = useLocation();
  const mobilePath = pathname === '/mobile';

  return (
    <section id='portal-route' className='grid gap-6 bg-[url("/battle-net-panel/background-download.png")] background-image-styles max-w-[2600px] m-auto py-20 mb-20'>
      <h3 className='text-white text-4xl font-bold text-center'>{`Get the ${mobilePath ? 'mobile' : 'desktop'} app`}</h3>
      <p className='text-xl text-almostWhite text-center mb-2'>
        Download Battle.net and join a community of millions.
      </p>
      {mobilePath
        ?
        <>
          <div className='flex items-center justify-center gap-8 mb-4'>
            <AppStoreLink />
            <GooglePlayLink />
          </div>

          <div className='flex items-center gap-4 bg-almostTransparent max-w-[370px] rounded-md p-3 m-auto'>
            <img
              className='max-w-28 rounded-md'
              src='/battle-net-panel/qr-code.png'
              alt='scan qr code to get app'
              loading='lazy'
            />
            <p className='text-almostWhite'>
              Scan the QR code with your mobile device to get the app
            </p>
          </div>
        </>
        :
        <DownloadForMacLink />
      }
    </section>
  );
}

export default DownloadAppPanel;