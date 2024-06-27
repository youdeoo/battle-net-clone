import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage, transformToLink } from '../../lib/utils';
import { TProduct } from '../../types/types';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Carousel from './Carousel';
import ProductButtons from './ProductButtons';
import Features from './Features';
import SystemRequirements from './SystemRequirements';
import ProductDetails from './ProductDetails';
import AgeRating from './AgeRating';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const {
    productsCategories: currentGameProductsCategories,
    commonProductsData: currentCommonProductsData
  } = currentGamePage(undefined, productId)[0];

  const getCurrentProduct = (): Array<TProduct> => {
    return currentGameProductsCategories?.flatMap((category) =>
      category.products?.filter((product) => product.productLink === productId && product));
  }

  const product = getCurrentProduct()[0];
  const productData = product.productData;

  return (
    <main className='px-4'>
      <ScrollToTopButton />

      <section>
        <div className='grid grid-cols-[68%_auto] gap-x-10 border-b border-borderGray pb-16'>
          <div>
            <Carousel productData={productData} />

            <div className='mt-8'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                {productData?.descriptionHeading}
              </h2>

              {productData?.descriptions.map((description, index) => (
                <p key={index} className='text-almostWhiteSecond mb-2'>
                  {description}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className='sticky top-[7rem] z-10 grid gap-8'>
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

              {productData?.prices.map((price, index) => (
                productData?.prices.length === 1
                  ?
                  <span key={index} className='text-2xl font-bold text-almostWhiteThird'>
                    {price}
                  </span>
                  :
                  ''
              ))}

              <ProductButtons productData={productData} />

              <ul className='grid gap-3 bg-[#1c1e25] rounded p-8 list-disc'>
                {productData?.productInfo.map((info, index) => (
                  info.link
                    ?
                    <li
                      key={index}
                      className='text-xs text-gray underline transition-colors hover:text-lightGray'
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
        </div>

        <Features currentCommonProductsData={currentCommonProductsData} />
        <SystemRequirements currentCommonProductsData={currentCommonProductsData} />
        <ProductDetails currentCommonProductsData={currentCommonProductsData} />
        <AgeRating currentCommonProductsData={currentCommonProductsData} />
      </section>
    </main>
  );
}

export default ProductPage;