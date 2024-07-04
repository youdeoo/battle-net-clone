import { FC, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { transformToLink } from '../../../lib/utils';
import { TProductDataProp } from '../../../types/types';
import Price from './Price';
import SubscriptionPriceInformation from './SubscriptionPriceInformation';
import ProductButtons from './ProductButtons';

const ProductInfo: FC<TProductDataProp> = memo(({ productData }) => {
  const [markedProductIndex, setMarkedProductIndex] = useState(0);

  return (
    <div>
      <div className='sticky top-[7.7rem] z-[1] grid gap-8'>
        <div className='flex gap-4'>
          <img
            className='max-w-12 size-12'
            src={productData.icon}
            alt=''
            aria-hidden='true'
            loading='lazy'
          />

          <div>
            <h1 className='text-[2rem] leading-9 text-white font-bold'>
              {productData?.productName}
            </h1>
            <span className='font-bold text-gray'>
              {productData?.grayText}
            </span>
          </div>
        </div>

        {productData?.yellowText
          &&
          <p className='text-sm bg-yellow rounded py-2 px-4'>
            {productData?.yellowText}
          </p>
        }

        {productData.price
          &&
          <Price
            productData={productData}
            markedProductIndex={markedProductIndex}
            setMarkedProductIndex={setMarkedProductIndex}
          />
        }
        {productData.subscriptionPriceInformation
          &&
          <SubscriptionPriceInformation
            productData={productData}
            markedProductIndex={markedProductIndex}
          />
        }
        <ProductButtons productData={productData} />

        {productData.mobileApps
          &&
          <div className='flex items-center justify-center gap-4'>
            {productData.mobileApps.map((app, index) => (
              <Link className='max-w-[10rem]' to={app.link} target='_blank' key={index}>
                <img
                  className='max-w-[10rem] w-full'
                  src={app.image}
                  alt=''
                  loading='lazy'
                />
              </Link>
            ))}
          </div>
        }

        <ul className='grid gap-2 bg-[#1c1e25] rounded py-8 px-10 list-disc'>
          {productData?.productInfo.map((info, index) => (
            info.link
              ?
              <li
                className='text-xs font-bold text-gray underline transition-colors hover:text-lightGray'
                key={index}
              >
                <a href={`#${transformToLink(info.text)}`}>
                  {info.text}
                </a>
              </li>
              :
              <li
                key={index}
                className='text-xs text-gray'
              >
                {info.text}
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
})

export default ProductInfo;