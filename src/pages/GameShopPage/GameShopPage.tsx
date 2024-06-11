import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage } from '../../lib/utils';
import { TCarouselItem } from '../../types/types';
import GameCarousel from '../../components/GameCarousel';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import NavigationLinks from './NavigationLinks';

const GameShopPage: FC = () => {
  const { gameId } = useParams();
  const currentGameTypePage = currentGamePage(gameId)[0].gameType;
  const currentGameNamePage = currentGamePage(gameId)[0].gameName;
  const currnetCommonGameTypeCarousel = currentGamePage(gameId)[0].commonGameTypeCarouselData;
  const currnetGameCarouselData = currentGamePage(gameId)[0].gameCarouselData;
  const currentGameSectionProducts = currentGamePage(gameId)[0].sectionProducts;
  const currentGamePageLinks = currentGamePage(gameId)[0].gamePageLinks;

  const getCarouselData = (): Array<TCarouselItem> => {
    if (currentGameNamePage === 'Modern Warfare III') {
      return currnetCommonGameTypeCarousel!;
    }
    else if (currentGameTypePage === 'Call of Duty' && currentGameNamePage !== 'Modern Warfare II') {
      const firstTwoSlides = currnetCommonGameTypeCarousel!.slice(0, 2);
      return [...firstTwoSlides, ...currnetGameCarouselData!];
    }
    else if (['World of Warcraft', 'World of Warcraft Classic'].includes(currentGameNamePage)) {
      const arrayCopy = [...currnetGameCarouselData];
      arrayCopy.splice(1, 0, ...currnetCommonGameTypeCarousel!);
      return arrayCopy;
    }
    else if (['Diablo IV', 'Diablo III', 'Diablo II: Resurrected'].includes(currentGameNamePage)) {
      return [...currnetGameCarouselData, ...currnetCommonGameTypeCarousel!];
    }
    else {
      return currnetGameCarouselData!;
    }
  }

  return (
    <main>
      <ScrollToTopButton />
      <GameCarousel carouselData={getCarouselData()} />
      <NavigationLinks />

      <section className='px-4'>
        {currentGameSectionProducts.map((section, index) => (
          <div
            id={currentGamePageLinks[index].toLowerCase().replaceAll(' ', '-')}
            className='grid grid-cols-[20%_1fr] gap-12 pt-16 scroll-m-28'
            key={index}
          >
            <div>
              <h2 className='text-2xl text-white font-bold'>{section.sectionHeading}</h2>
              <p className='text-almostWhiteSecond'>{section.sectionDescription}</p>
            </div>

            <div className='grid grid-cols-2 gap-8'>
              {section.products.map((product, index) => (
                <div
                  className='group cursor-pointer bg-mediumGray transition-colors hover:bg-borderGray'
                  key={index}
                >
                  <img
                    className='max-w-full w-full'
                    src={product.image}
                    alt={product.heading}
                    loading='lazy'
                  />

                  <div className='flex flex-col content-between h-full p-6'>
                    <dl>
                      <dd className='flex items-center gap-2'>
                        <img
                          className='max-w-6 w-6'
                          src={product.icon}
                          alt=''
                          loading='lazy'
                        />
                        <span className='text-xs text-almostWhite font-bold tracking-wide uppercase'>
                          {currentGameNamePage}
                        </span>
                      </dd>

                      <dt className='text-lg font-bold text-white my-1'>{product.heading}</dt>
                      <dd className='text-sm text-yellow mb-1'>{product.yellowText}</dd>
                      <dd className='text-xs text-almostWhite'>{product.grayText}</dd>
                    </dl>

                    <div className='w-full h-full mt-auto pt-6'>
                      <span className='font-bold text-almostWhiteSecond'>{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default GameShopPage;