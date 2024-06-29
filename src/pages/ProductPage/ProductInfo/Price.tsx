import { FC, useState } from 'react';
import { stateIndexEqualIndex } from '../../../lib/utils';
import { TProductDataProp, TProductDataPrice } from '../../../types/types';

const Price: FC<TProductDataProp> = ({ productData }) => {
  const [markedProductIndex, setMarkedProductIndex] = useState(0);

  return (
    <>
      {productData.price
        &&
        typeof productData.price === 'string'
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
            <a
              className='font-bold text-lighterBlue underline transition-colors hover:text-lightestBlue'
              href='#compare'
            >
              Comapre
            </a>
          </div>

          <div className='mt-4'>
            {(productData.price as Array<TProductDataPrice>).map((price, index) => (
              <div
                onClick={() => setMarkedProductIndex(index)}
                className={`${stateIndexEqualIndex(markedProductIndex, index) && 'bg-mediumGray border-l-[5px] border-l-lighterBlue rounded-md'} 
                group relative border-t border-borderGray cursor-pointer p-3 transition-all 
                hover:bg-mediumGray hover:rounded-md`}
                key={index}
              >
                <dl>
                  <dt className={`${stateIndexEqualIndex(markedProductIndex, index) ? 'text-white' : 'text-lightGray'} 
                  text-lg font-bold text-lightGray transition-colors group-hover:text-white`}
                  >
                    {price.productName}
                  </dt>
                  <dd className='text-2xl font-bold text-almostWhiteSecond'>
                    {price.amount}
                  </dd>
                </dl>

                <div className={`absolute top-1/2 left-[-18rem] z-[2] translate-y-[-50%] invisible bg-mediumBlue border
                border-borderGray rounded ${!stateIndexEqualIndex(markedProductIndex, index) && 'group-hover:visible'}`}
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
                    border-t border-t-borderGray border-r border-r-borderGray rotate-45'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default Price;