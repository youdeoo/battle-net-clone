import { FC } from 'react';
import { Link } from 'react-router-dom';
import Languages from './RegionsAndLanguages';

const navigationLinks = [
  'Careers',
  'About',
  'Support',
  'Contact Us',
  'Press',
  'Api'
];

const companyPrivacyLinks = [
  'Privacy',
  'Legal',
  'Terms',
  'Cookie Policy',
  'Cookie Settings'
];

const socailMediaIcons = [
  {
    name: 'Twitter (X platform)',
    icon: '/social-media/x-twitter.svg'
  },
  {
    name: 'Facebook',
    icon: '/social-media/facebook.svg'
  },
  {
    name: 'Instagram',
    icon: '/social-media/instagram.svg'
  }
];

const Footer: FC = () => {
  return (
    <footer className='max-w-[1600px] px-16 pt-10 pb-[6.5rem] m-auto'>
      <div className='flex items-center justify-between border-b border-borderGray pb-2'>
        <ul className='flex text-white text-sm font-semibold'>
          {navigationLinks.map((link, index) => (
            <li
              className='px-4 py-3 hover-light-gray-background active-translate-y'
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>

        <Languages />
      </div>

      <div className='flex justify-between pt-5'>
        <div className='grid grid-cols-[max-content_1fr] gap-8'>
          <Link to='/'>
            <img
              className='max-w-xs'
              src='/logo/logo-and-caption.png'
              alt='back to home page'
              loading='lazy'
            />
          </Link>

          <div>
            <p className='text-xs text-gray'>
              ©2024 Blizzard Entertainment, Inc.
              <br />
              All <span className='text-lightGray cursor-pointer underline transition-colors hover:text-white'>trademarks</span> referenced
              herein are the properties of their respective owners.
            </p>

            <ul className='flex gap-4 text-[.8rem] text-gray mt-6'>
              {companyPrivacyLinks.map((link, index) => (
                <li
                  className='cursor-pointer transition-colors hover:text-white'
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          {socailMediaIcons.map((icon, index) => (
            <button
              className='min-w-[max-content] bg-mediumGray rounded-full aspect-square px-3 py-2 transition-colors 
              hover:bg-lightGrayBackground active-translate-y'
              key={index}
              type='button'
            >
              <img
                className='size-4'
                src={icon.icon}
                alt={icon.name}
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;