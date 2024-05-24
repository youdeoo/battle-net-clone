import { FC } from 'react';
import { Link } from 'react-router-dom';
import MobileBattleNet from '../../components/MobileBattleNet';
import DownloadForMacLink from '../../components/DownloadForMacLink';

const battleNetFeatures = [
  {
    image: '/icons/play.svg',
    heading: 'Play for free',
    description: 'Get access to games like Overwatch 2, Call of Duty: Warzone 2.0, and free trials for many other titles'
  },
  {
    image: '/icons/user-group.svg',
    heading: 'Connect with your friends',
    description: 'Add your friends and share real-time updates using our messaging and voice chat features'
  },
  {
    image: '/icons/star.svg',
    heading: 'See what\'s new',
    description: 'Get the latest news, including sales, new trailers, and patch notes'
  },
  {
    image: '/icons/cart-shopping.svg',
    heading: 'Shop for games & goodies',
    description: 'Shop the latest games and expansions, or grab digital gifts for your friends'
  },
  {
    image: '/icons/shield-halved.svg',
    heading: 'Two-factor authentication',
    description: 'Effortlessly add an extra layer of security for your account by enabling two-factor authentication'
  }
];

const DesktopPage: FC = () => {
  return (
    <main>
      <section className='bg-[url("/battle-net-panel/background-and-image.png")] background-image-styles'>
        <div className='flex flex-col gap-10'>
          <img
            className='max-w-md m-auto'
            src='/logo/vertical-logo.png'
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
          <p className='text-lg text-almostWhite text-center'>
            Launch your games, connect with friends, and keep up-to-date with the latest news.
          </p>
          <DownloadForMacLink />
          <p className='text-almostWhite text-center'>
            Also available for <Link className='text-lighterBlue font-semibold underline transition-colors hover:text-lightestBlue' to='/download'>Windowns</Link> and <Link className='text-lighterBlue font-semibold underline transition-colors hover:text-lightestBlue' to='/mobile'>mobile</Link>
          </p>
        </div>
      </section>

      <section className='flex gap-16 px-10 py-20 max-[1310px]:flex-col'>
        <div>
          <h2 className='text-xl font-bold text-gray'>Key features</h2>
          <h3 className='text-white font-bold text-3xl'>All your games in one place</h3>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10'>
          {battleNetFeatures.map((feature, index) => (
            <div
              className='flex items-center gap-4'
              key={index}
            >
              <div className='flex items-center justify-center min-w-[80px] max-w-[80px] bg-mediumGray rounded-full aspect-square px-5 py-2'>
                <img
                  className='w-7'
                  src={feature.image}
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                />
              </div>

              <div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {feature.heading}
                </h3>
                <p className='text-lightGray'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MobileBattleNet />
    </main>
  );
}

export default DesktopPage;