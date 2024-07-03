import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage } from '../../lib/utils';
import { TProduct } from '../../types/types';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Carousel from './Carousel';
import ProductInfo from './ProductInfo/ProductInfo';
import Features from './Features';
import SystemRequirements from './SystemRequirements';
import ProductDetails from './ProductDetails';
import AgeRating from './AgeRating';
import CompareProducts from './CompareProducts';

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
            <div className='sticky top-[7.7rem] z-[1]'>
              <Carousel productData={productData} />

              <div className='mt-6'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  {productData?.descriptionHeading}
                </h2>

                {productData?.descriptions.map((description, index) => (
                  <p key={index} className='text-almostWhiteSecond mb-2'>
                    {description}
                  </p>
                ))}

                {productData?.descriptionList
                  &&
                  <ul className='list-disc pl-8 mt-4'>
                    {productData.descriptionList.map((data, index) => (
                      <li
                        className='text-almostWhiteSecond'
                        key={index}
                      >
                        {data}
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          </div>

          <ProductInfo productData={productData} />
        </div>

        {productData?.compareProducts && <CompareProducts productData={productData} />}
        <Features productData={productData} />
        <SystemRequirements currentCommonProductsData={currentCommonProductsData} />
        <ProductDetails
          productData={productData}
          currentCommonProductsData={currentCommonProductsData}
        />
        <AgeRating currentCommonProductsData={currentCommonProductsData} />
      </section>
    </main>
  );
}

export default ProductPage;