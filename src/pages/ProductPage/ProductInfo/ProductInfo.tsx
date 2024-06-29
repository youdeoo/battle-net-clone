import { FC } from 'react';
import { transformToLink } from '../../../lib/utils';
import { TProductDataProp, TProduct } from '../../../types/types';
import Price from './Price';
import ProductButtons from './ProductButtons';

type Prop = Pick<TProductDataProp, 'productData'> & {
  product: TProduct;
}

const ProductInfo: FC<Prop> = ({ product, productData }) => {
  return (
    <div>
      <div className='sticky top-[7.7rem] z-[1] grid gap-8'>
        <div className='flex gap-4'>
          <img
            className='max-w-12 size-12'
            src={product.icon}
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

        <Price productData={productData} />
        <ProductButtons productData={productData} />

        <ul className='grid gap-3 bg-[#1c1e25] rounded p-8 list-disc'>
          {productData?.productInfo.map((info, index) => (
            info.link
              ?
              <li
                key={index}
                className='text-xs font-bold text-gray underline transition-colors hover:text-lightGray'
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
}

export default ProductInfo;