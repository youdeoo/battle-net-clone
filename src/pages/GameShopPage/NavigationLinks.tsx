import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { currentGamePage, transformToLink } from '../../lib/utils';

const NavigationLinks: FC = () => {
  const { pathname } = useLocation();
  const { gameId } = useParams();
  const { gamePageLinks: currentGamePageLinks } = currentGamePage(gameId, undefined)[0];

  const [hideLinks, setHideLinks] = useState(false);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const getDistanceBetweenElements = (): void => {
    if (linksRef.current && selectRef.current) {
      const linksRect = linksRef.current.getBoundingClientRect();
      const selectRect = selectRef.current.getBoundingClientRect();
      const xDistance = selectRect.left - linksRect.right;
      setHideLinks(xDistance <= 20);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getDistanceBetweenElements);
    getDistanceBetweenElements();

    return () => {
      window.removeEventListener('resize', getDistanceBetweenElements);
    }
  }, [pathname]);

  return (
    <div className='mt-8 px-4'>
      <div className='relative flex items-center justify-between rounded-md bg-mediumGray pr-[1.125rem]'>
        <div className={`absolute top-0 left-0 ${hideLinks ? 'block' : 'hidden'} max-[480px]:static`}>
          <div className='relative group'>
            <button
              className='flex items-center gap-2 text-sm font-bold text-lightGray px-4 py-[1.125rem] 
              rounded-md transition-colors group-hover:text-white group-hover:bg-lightGrayBackground'
              type='button'
            >
              Categories
              <img
                className='max-w-3 w-3 group-hover:brightness-[5]'
                src='/icons/chevron-down.svg'
                alt='links to categories'
                loading='lazy'
              />
            </button>

            <div className='menu-element-on-hover group-hover:visible group-hover:opacity-100'>
              <div className='bg-mediumBlue w-56 p-2 border border-borderGray rounded-md'>
                {currentGamePageLinks.map((link, index) => (
                  <a href={`#${transformToLink(link)}`}
                    key={index}
                    className='block whitespace-nowrap text-xs font-bold text-lightGray p-2 rounded-md 
                    transition-colors hover:text-white hover:bg-lightGrayBackground'
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={linksRef} className={`flex overflow-hidden ${hideLinks ? 'invisible' : 'visible'}`}>
          {currentGamePageLinks.map((link, index) => (
            <a href={`#${transformToLink(link)}`}
              key={index}
              className='block whitespace-nowrap text-sm font-bold text-lightGray py-[1.125rem] px-4 rounded-md
              transition-colors hover:text-white hover:bg-lightGrayBackground'
            >
              {link}
            </a>
          ))}
        </div>

        <select ref={selectRef} className='text-white bg-darkBlue cursor-pointer rounded-md transition-colors 
          border border-lighterBorderGray p-2 hover:border-white'
        >
          <option>Featured</option>
          <option>Price: Lowest</option>
          <option>Price: Highest</option>
          <option>Discount</option>
          <option>Name</option>
        </select>
      </div>
    </div >
  );
}

export default NavigationLinks;