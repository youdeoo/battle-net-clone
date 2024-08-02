import { useParams } from 'react-router-dom';
import { currentGameData, getCurrentProduct } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Carousel from './subcomponents/Carousel';
import ProductInfo from './subcomponents/productInfo/ProductInfo';
import Features from './subcomponents/Features';
import SystemRequirements from '@/components/SystemRequirements';
import ProductDetails from '@/components/ProductDetails';
import AgeRating from '@/components/AgeRating';
import CompareProducts from './subcomponents/CompareProducts';

const ProductPage = () => {
  const { productId } = useParams();
  const {
    productsCategories: currentGameProductsCategories,
    commonProductsData: currentCommonProductsData
  } = currentGameData(undefined, productId)[0];

  const product = getCurrentProduct(currentGameProductsCategories!, productId!)[0];
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
                {productData?.descriptions.map((description) => (
                  <p className='text-almostWhiteSecond mb-2' key={description}>
                    {description}
                  </p>
                ))}
                {productData?.descriptionList
                  &&
                  <ul className='list-disc pl-8 mt-4'>
                    {productData.descriptionList.map((data) => (
                      <li
                        className='text-almostWhiteSecond'
                        key={data}
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
        <ProductDetails productData={productData} currentCommonProductsData={currentCommonProductsData} />
        <AgeRating currentCommonProductsData={currentCommonProductsData} />
      </section>
    </main>
  );
}

export default ProductPage;