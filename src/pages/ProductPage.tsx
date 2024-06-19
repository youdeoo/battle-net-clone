import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { currentGamePage } from '../lib/utils';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const { productsCategories: currentGameProductsCategories } = currentGamePage(undefined, productId)[0];

  return (
    <section>
      {currentGameProductsCategories!.map((category) => category.products.map((product, productIndex) => (
        productId === product.productLink
        &&
        <h1 key={productIndex}>{product.productData?.productName}</h1>
      )))}
    </section>
  );
}

export default ProductPage;