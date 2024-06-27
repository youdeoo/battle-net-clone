import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TProductDataProp } from '../../types/types';

const ProductButtons: FC<TProductDataProp> = ({ productData }) => {

  return (
    <div className='grid gap-2'>
      <Link
        to={''}
        className='blue-button flex justify-center text-xl p-2.5 blue-button-hover'
      >
        {productData?.buyProductButton}
      </Link>

      <Link
        to={''}
        className='blue-button flex justify-center items-center gap-2 text-xl bg-lightGrayBackground p-2.5'
      >
        <img
          className='size-full max-w-[1.125rem] brightness-[5]'
          src='/icons/gift.svg'
          alt=''
          aria-hidden='true'
          loading='lazy'
        />
        {productData?.giftProductButton}
      </Link>

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
    </div>
  );
}

export default ProductButtons;