import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { currentGameData } from '@/lib/utils';

const paymentMethodsImages = [
  '/payment-methods/image-1.png',
  '/payment-methods/image-2.png',
  '/payment-methods/image-3.png',
  '/payment-methods/image-4.png',
  '/payment-methods/image-5.png',
  '/payment-methods/image-6.png',
  '/payment-methods/image-7.png',
  '/payment-methods/image-8.png',
  '/payment-methods/image-9.png',
  '/payment-methods/image-10.png',
  '/payment-methods/image-11.png',
  '/payment-methods/image-12.png'
];

const ProductSection = () => {
  const productPrice = localStorage.getItem('productPrice');
  const { productId } = useParams();
  const { productsCategories } = currentGameData(undefined, productId)[0];

  const matchingProducts = productsCategories?.map((data) => data.products?.filter((product) => product.productLink === productId));
  const filterNotMatchingProducts = matchingProducts!.filter((data) => data!.length > 0).flatMap((a) => a);
  const firstMatchingProduct = filterNotMatchingProducts.flatMap((products) => products)[0];

  const getMarkedProductName = (): string | undefined => {
    if (typeof firstMatchingProduct?.productData?.price !== 'string') {
      const matchingPrice = firstMatchingProduct?.productData?.price?.find((data) => data.amount === productPrice);
      return matchingPrice?.productName;
    }
  }

  const formatDisplayProductName = (): string => {
    const productName = firstMatchingProduct?.productData?.productName!;
    return productName === getMarkedProductName() ? productName : `${productName} ${getMarkedProductName()}`;
  }

  return (
    <section className='pl-16'>
      <img
        src={firstMatchingProduct?.image}
        alt=''
        aria-hidden='true'
        loading='lazy'
      />
      <h4 className='gray-text-uppercase mt-4 mb-1'>You are purchasing</h4>
      <p className='font-bold text-white'>{formatDisplayProductName()}</p>
      <h4 className='gray-text-uppercase mt-4 mb-1'>Total</h4>
      <span className='text-2xl font-bold text-white'>{productPrice}</span>
      <h4 className='gray-text-uppercase mt-8 mb-1'>Need help?</h4>
      <span className='text-sm font-bold text-lighterBlue underline'>Contact Suppoer</span>
      <h4 className='gray-text-uppercase mt-4 mb-2'>We accept</h4>
      <div className='flex flex-wrap gap-1.5'>
        {paymentMethodsImages.map((image, index) => (
          <img
            className='max-w-8 rounded-sm'
            src={image}
            key={index}
            alt=''
            loading='lazy'
          />
        ))}
      </div>
    </section >
  );
}

export default memo(ProductSection);