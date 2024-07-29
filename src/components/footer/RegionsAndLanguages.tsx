import { useState } from 'react';
import useSpecificPageType from '@/lib/hooks/useSpecificPageType';
import useOutsideClick from '@/lib/hooks/useOutsideClick';

const regions = [
  'Americas & Southeast Asia',
  'Europe',
  'Korea',
  'Taiwan'
];

const languages = [
  'English (US)',
  'Español (Latino)',
  'Português (Brasil)',
  'ภาษาไทย',
  '日本語',
  'Deutsch',
  'English (EU)',
  'Español (EU)',
  'Français',
  'Italiano',
  'Polski',
  'Русский',
  'Türkçe',
  '한국어',
  '繁體中文'
];

const RegionsAndLanguages = () => {
  const [markedRegionIndex, setMarkedRegionIndex] = useState(0);
  const [markedLanguageIndex, setMarkedLanguageIndex] = useState(0);
  const [displayRegionsAndLanguages, setDisplayRegionsAndLanguages] = useState(false);
  const isSpecificPageType = useSpecificPageType();
  const regionsAndLanguagesRef = useOutsideClick(displayRegionsAndLanguages, setDisplayRegionsAndLanguages);

  const conditionalStyle = (style: string): string => {
    return displayRegionsAndLanguages ? style : '';
  }

  return (
    <div
      ref={regionsAndLanguagesRef}
      className='relative'
    >
      <div
        onClick={() => setDisplayRegionsAndLanguages(!displayRegionsAndLanguages)}
        className={`group flex gap-[.35rem] cursor-pointer px-4 py-3 hover-light-gray-background ${conditionalStyle('bg-lightGrayBackground')}`}
      >
        <img
          className={`max-w-5 w-5 group-hover:brightness-[5] ${conditionalStyle('brightness-[5]')}`}
          src='/icons/globe.svg'
          alt='mark language and region'
          loading='lazy'
        />
        <span className='text-white text-sm font-semibold'>
          {languages[markedLanguageIndex]}
        </span>
        <img
          className={`max-w-3 w-3 group-hover:brightness-[5] ${conditionalStyle('brightness-[5]')}`}
          src='/icons/chevron-down.svg'
          alt=''
          aria-hidden='true'
        />
      </div>
      <div
        className={`absolute bottom-[4.5rem] right-0 z-10 w-[37rem] transition-all ${displayRegionsAndLanguages ? 'visible opacity-100' : 'invisible opacity-0'} 
        after:content-[""] after:absolute after:right-[4.5rem] after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent 
        after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-[#10111B]`}
      >
        {!isSpecificPageType
          &&
          <div className='bg-[#171926] rounded-t-md px-4 py-6'>
            <span className='text-sm text-gray font-bold uppercase'>Region</span>
            <ul className='flex gap-2 mt-2'>
              {regions.map((region, index) => (
                <li
                  onClick={() => setMarkedRegionIndex(index)}
                  className={`font-semibold text-white px-[.75rem] py-[.375rem] hover-light-gray-background active-translate-y 
                  ${markedRegionIndex === index ? 'bg-lightGrayBackground' : 'bg-mediumGray'}`}
                  key={region}
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        }
        <div className={`bg-[#10111B] ${isSpecificPageType ? 'max-h-[28rem] rounded-md' : 'max-h-[22rem] rounded-b-md'} overflow-scroll py-6`}>
          <span className='text-sm text-gray font-bold pl-4 uppercase'>Language</span>
          <ul className='grid grid-cols-2 gap-y-2 rown-end-2 px-2 mt-2'>
            {languages.map((language, index) => (
              <li
                onClick={() => setMarkedLanguageIndex(index)}
                className='flex gap-3 text-white px-2 py-3 hover-light-gray-background active-translate-y'
                key={language}
              >
                <img
                  className='max-w-4'
                  src='/icons/check.svg'
                  alt={`current marked language is ${languages[markedLanguageIndex]}`}
                  loading='lazy'
                  style={{ visibility: markedLanguageIndex === index ? 'visible' : 'hidden' }}
                />
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RegionsAndLanguages;