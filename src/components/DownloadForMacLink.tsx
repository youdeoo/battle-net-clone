import { FC } from 'react';
import { Link } from 'react-router-dom';
import usePageType from '../lib/hooks/usePageType';
import { deviceHandleHoverEffect } from '../lib/utils';

const DownloadForMacLink: FC = () => {
  return (
    <Link
      to='/download'
      className={`flex items-center justify-center gap-2 max-w-[310px] text-xl font-bold rounded
      ${deviceHandleHoverEffect ? 'text-white bg-lightBlue' : 'bg-gray text-almostWhite border-transparent pointer-events-none'}
       ${usePageType() ? 'm-auto' : ''} px-10 py-5 blue-button-hover active-translate-y`}
    >
      {deviceHandleHoverEffect
        ?
        <img
          className='size-5'
          src='/third-part-company/apple.svg'
        />
        :
        ''
      }
      Download for Mac
    </Link>
  );
}

export default DownloadForMacLink;