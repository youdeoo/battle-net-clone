import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { TProductDataProp } from '@/types/types';

const ManageProduct = ({ productData }: TProductDataProp) => {
  const { productId } = useParams();
  console.log('rere');
  return (
    <div className='grid gap-2'>
      <Link
        to={`/shop/checkout/${productId}`}
        className='blue-button flex justify-center text-xl p-2.5 blue-button-hover'
      >
        {productData?.buyProductButton}
      </Link>
      {productData.mobileQRCode
        &&
        <div className='flex items-center gap-8 bg-[#22242c] rounded-md py-7 px-6'>
          <img
            className='max-w-36 size-auto rounded-md'
            src={productData.mobileQRCode.qrCode}
            alt='download warcraft rumble'
            loading='lazy'
          />
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <img
                className='max-w-4 brightness-[2]'
                src={productData.mobileQRCode.phoneIcon}
                alt=''
                aria-hidden='true'
                loading='lazy'
              />
              <h5 className='text-lg font-bold text-white'>
                {productData.mobileQRCode.heading}
              </h5>
            </div>
            <p className='text-sm text-almostWhiteSecond'>
              {productData.mobileQRCode.description}
            </p>
          </div>
        </div>
      }
      {productData.subscribeButton
        &&
        <Link
          to={''}
          className='blue-button flex justify-center items-center gap-2 text-xl bg-lightGrayBackground p-2.5'
        >
          {productData.subscribeButton}
        </Link>
      }
      {productData.giftProductButton
        &&
        <Link
          to={''}
          className='blue-button flex justify-center items-center gap-2 text-xl bg-lightGrayBackground p-2.5'
        >
          {productData.giftProductButton !== 'Try'
            &&
            <img
              className='size-full max-w-[1.125rem] brightness-[5]'
              src='/icons/gift.svg'
              alt=''
              aria-hidden='true'
              loading='lazy'
            />
          }
          {productData?.giftProductButton}
        </Link>
      }
      {productData.wishListButton
        &&
        <Link
          to={''}
          className='blue-button flex justify-center items-center gap-2 text-xl bg-darkBlue border border-lighterBorderGray'
        >
          <img
            className='size-full max-w-[1.125rem] brightness-[5]'
            src='/icons/heart.svg'
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
          {productData?.wishListButton}
        </Link>
      }
    </div>
  );
}

export default memo(ManageProduct);