import { FC, useState, useEffect } from 'react';
import { scrollToTop } from '../lib/utils';

const ScrollToTopButton: FC = () => {
  const [displayButton, setDisplayButton] = useState(false);

  const handleScroll = (): void => {
    if (window.scrollY > 100) {
      setDisplayButton(true);
    }
    else {
      setDisplayButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [window.scrollY]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 z-[2] bg-darkBlue border-button-and-box-shadow rounded-md p-3
      transition-all ${displayButton ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <img
        className='rotate-180 brightness-[5] max-w-4 w-4'
        src='/icons/chevron-down.svg'
        alt='back to top button'
        loading='lazy'
      />
    </button>
  );
}

export default ScrollToTopButton;