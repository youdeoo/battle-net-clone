import { FC } from 'react';
import AppStoreLink from '../components/AppStoreLink';
import GooglePlayLink from '../components/GooglePlayLink';
import DesktopPanel from '../components/DesktopPanel';
import DownloadAppPanel from '../components/DownloadAppPanel';

const features = [
  {
    heading: 'Secure your account',
    description: 'Manage your account and stay safe with two-factor authentication.',
    images: { desktop: '/mobile-page/image-desktop-1.png', tablet: '/mobile-page/image-2-tablet.png' }
  },
  {
    heading: 'See what\'s new',
    description: 'Explore games, forums, patch notes, and communities. Check out the shop for newly released products.',
    images: { desktop: '/mobile-page/image-desktop-2.png', tablet: '/mobile-page/image-2-tablet.png' }
  },
  {
    heading: 'Stay connected',
    description: 'See what your friends are playing, add new friends, and never miss an opportunity to play together.',
    images: { desktop: '/mobile-page/image-desktop-3.png', tablet: '/mobile-page/image-3-tablet.png' }
  },
  {
    heading: 'Complete control',
    description: 'Access your account settings and customer support, browse help articles, and reply directly to ongoing tickets.',
    images: { desktop: '/mobile-page/image-desktop-4.png', tablet: '/mobile-page/image-4-tablet.png' }
  }
];

const MobilePage: FC = () => {
  return (
    <main>
      <section className='max-w-[2600px] bg-[url("/battle-net-panel/background-mobile-page-panel.png")] background-image-styles border-panel px-10 py-20 m-auto'>
        <div className='grid grid-cols-2 items-center justify-center gap-10 max-w-[1440px] m-auto min-[1200px]:gap-[4.5rem]'>
          <div>
            <img
              className='max-w-16 rounded-xl'
              src='/logo/logo-icon.png'
              alt=''
              aria-hidden='true'
              loading='lazy'
            />
            <h1 className='text-6xl font-bold text-white my-6'>Battle.net on the go</h1>
            <p className='text-xl text-almostWhite'>
              Put the power of Battle.net in the palm of your hand. Shop, socialize,
              get the news, and stay safe with the built-in Authenticator.
            </p>

            <div className='flex gap-6 mt-10'>
              <AppStoreLink />
              <GooglePlayLink />
            </div>

            <div className='flex items-center gap-4 bg-almostTransparent max-w-[370px] rounded-md p-3 mt-12'>
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
          </div>

          <img
            className='max-w-[35rem]'
            src='/battle-net-panel/phones.png'
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
        </div>
      </section>

      <section className='max-w-[2600px] px-10 py-20 m-auto min-[1200px]:bg-[url("/mobile-page/background.png")] min-[1200px]:background-image-styles'>
        <h2 className='text-[3.5rem] font-bold text-center text-white mb-16'>Key Features</h2>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] grid-rows-fr gap-12 max-w-[1440px] m-auto max-[1200px]:grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))]'>
          {features.map((feature, index) => (
            <div className='grid grid-cols-[100%] grid-rows-[auto_1fr]' key={index}>
              <picture>
                <source media='(max-width: 1200px)' srcSet={feature.images.tablet} />
                <img
                  className='rounded-3xl size-full max-h-full object-cover'
                  src={feature.images.desktop}
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                />
              </picture>

              <h3 className='text-2xl font-bold text-white text-center mb-2'>{feature.heading}</h3>
              <p className='text-lightGray text-center'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <DesktopPanel />
      <DownloadAppPanel />
    </main>
  );
}

export default MobilePage;