import { FC } from 'react';
import { Link } from 'react-router-dom';
import useSpecificPageType from '../lib/hooks/useSpecificPageType';
import { deviceHandleHoverEffect } from '../lib/utils';

const DownloadForMacLink: FC = () => {
  const isSpecificPageType = useSpecificPageType();

  return (
    <Link
      to='/download'
      className={`flex items-center justify-center gap-2  ${isSpecificPageType ? 'text-2xl max-w-[330px]' : 'text-xl max-w-[310px]'} font-bold rounded
      ${deviceHandleHoverEffect ? 'text-white bg-lightBlue' : 'bg-gray text-almostWhite border-transparent pointer-events-none'}
       ${isSpecificPageType && 'm-auto'} px-10 py-5 blue-button-hover active-translate-y`}
    >
      {deviceHandleHoverEffect
        &&
        <img
          className='size-5'
          src='/third-part-company/apple.svg'
        />
      }
      Download for Mac
    </Link>
  );
}

export default DownloadForMacLink;