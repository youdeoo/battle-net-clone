import { FC, SetStateAction, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { getImagePath } from '@/lib/features/productImagePathSlice';
import { stateIndexEqualIndex } from '@/lib/utils';
import type { TProductDataProp, TProductDataPrice } from '@/types/types';

type Prop = {
  markedProductIndex: number;
  setMarkedProductIndex: React.Dispatch<SetStateAction<number>>;
}

const Price: FC<TProductDataProp & Prop> = ({
  productData,
  markedProductIndex,
  setMarkedProductIndex
}) => {
  const productPrice = useAppSelector((state) => state.productPrice.productPrice);
  const dispatch = useAppDispatch();

  const markAndDispatchMatchingProduct = (): void => {
    if (typeof productData.price !== 'string') {
      return (productData.price as Array<TProductDataPrice>).forEach((price, index) =>
        (price.amount === productPrice && price.image) && (setMarkedProductIndex(index), dispatch(getImagePath(price.image))));
    }
  }

  useEffect(() => {
    markAndDispatchMatchingProduct();
  }, []);

  return (
    <>
      {typeof productData.price === 'string'
        ?
        <span className='text-2xl font-bold text-almostWhiteThird'>
          {productData.price}
        </span>
        :
        <div>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-bold text-lightGray tracking-wide uppercase'>
              Select a product
            </span>
            {productData.compareProducts
              &&
              <a
                className='font-bold text-lighterBlue underline transition-colors hover:text-lightestBlue'
                href='#compare'
              >
                Comapre
              </a>
            }
          </div>
          <div className='mt-4'>
            {(productData.price as Array<TProductDataPrice>).map((price, index) => (
              <button
                onClick={() => { setMarkedProductIndex(index); price.image && dispatch(getImagePath(price.image)) }}
                className={`${stateIndexEqualIndex(markedProductIndex, index) && 'bg-mediumGray border-l-[8px] border-l-lighterBlue rounded-md'} 
                  group relative w-full text-left border-t border-borderGray cursor-pointer p-3 transition-all 
                  hover:bg-mediumGray hover:rounded-md block`}
                key={index}
              >
                <dl>
                  <dt className={`${stateIndexEqualIndex(markedProductIndex, index) ? 'text-white' : 'text-lightGray'} 
                    text-lg font-bold text-lightGray transition-colors group-hover:text-white`}
                  >
                    {price.productName}
                  </dt>
                  <dd className='text-2xl font-bold text-almostWhiteSecond mt-1'>
                    {price.amount}
                  </dd>
                  {price.additionalInfo
                    &&
                    <dd className='text-sm text-lightGray font-bold mt-1'>
                      {price.additionalInfo}
                    </dd>
                  }
                </dl>
                {price.image
                  &&
                  <div className={`absolute top-1/2 left-[-18rem] z-[2] translate-y-[-50%] invisible opacity-0 bg-mediumBlue border
                    border-borderGray rounded ${!stateIndexEqualIndex(markedProductIndex, index) && 'transition-all group-hover:visible group-hover:opacity-100'}`}
                  >
                    <div className='relative p-4'>
                      <img
                        className='max-w-60 w-full h-auto'
                        src={price.image}
                        alt=''
                        aria-hidden='true'
                        loading='lazy'
                      />
                      <div className='absolute top-1/2 right-[-.4rem] z-[1] size-3 bg-mediumBlue 
                        border-t border-t-borderGray border-r border-r-borderGray rotate-45'
                      >
                      </div>
                    </div>
                  </div>
                }
              </button>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default Price;