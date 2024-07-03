import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { getProductPrice } from '../../slices/productPriceSlice';
import { Link } from 'react-router-dom';
import { TProductsCategories } from '../../types/types';

type FunctionWithTwoArgumnets = {
  (category: TProductsCategories, productIndex: number): boolean;
}

type FunctionWithOneArgument = {
  (category: TProductsCategories): boolean;
}

type ProductsLayoutInCategoryStyleFlexFunctions = {
  twoInRow: (category: TProductsCategories) => boolean;
  threeInRow: (category: TProductsCategories) => boolean;
  threeAndTwoInRow: (category: TProductsCategories) => boolean;
  fromTwoToFourInRow: (category: TProductsCategories) => boolean;
  overwatch2ShopProducts: (category: TProductsCategories) => boolean;
}

type Props = {
  category: TProductsCategories;
  getProductsWithHorizontalLayout: FunctionWithTwoArgumnets;
  getProductsLayoutInCategoryStyleFlex: ProductsLayoutInCategoryStyleFlexFunctions;
  getProductsWithLargeIconInHorizontalLayout: FunctionWithOneArgument;
  productsWithBiggerFont: FunctionWithTwoArgumnets;
  getCategoriesWithFlexStyle: FunctionWithOneArgument;
}

const Products: FC<Props> = ({
  category,
  getProductsWithHorizontalLayout,
  getProductsLayoutInCategoryStyleFlex,
  getProductsWithLargeIconInHorizontalLayout,
  productsWithBiggerFont,
  getCategoriesWithFlexStyle
}) => {
  const dispatch = useDispatch();

  const flexStyleCategory = getCategoriesWithFlexStyle(category);
  const linkToBlizzardGearShop = category.categoryHeading === 'Gear';
  const twoProductsInRow = getProductsLayoutInCategoryStyleFlex.twoInRow(category);
  const threeProductsInRow = getProductsLayoutInCategoryStyleFlex.threeInRow(category);
  const threeAndTwoProductsInRow = getProductsLayoutInCategoryStyleFlex.threeAndTwoInRow(category);
  const fromTwoToFourProductsInRow = getProductsLayoutInCategoryStyleFlex.fromTwoToFourInRow(category);
  const overwatch2ShopProducts = getProductsLayoutInCategoryStyleFlex.overwatch2ShopProducts(category);
  const largeIconInHorizontalLayout = getProductsWithLargeIconInHorizontalLayout(category);

  return (
    <div className={`${flexStyleCategory ? 'flex flex-wrap gap-6' : 'grid grid-cols-4 gap-6'}`}>
      {category.products && category.products.map((product, productIndex) => {
        const productHorizontalLayout = getProductsWithHorizontalLayout(category, productIndex);
        const biggerFont = productsWithBiggerFont(category, productIndex);

        return (
          <Link
            onClick={() => dispatch(getProductPrice(product.price))}
            to={`${linkToBlizzardGearShop ? product.productLink : `/product/${product.productLink}`}`}
            target={`${linkToBlizzardGearShop ? '_target' : '_self'}`}
            className={`${productHorizontalLayout && 'col-[1_/span_4]'} ${overwatch2ShopProducts && 'overwatch2-shop-products'}
            ${twoProductsInRow && 'w-twoProductsInRow'} ${threeProductsInRow && 'w-threeProductsInRow'} 
            ${fromTwoToFourProductsInRow && 'from-two-to-four-products-in-row'} ${productHorizontalLayout ? 'grid grid-cols-[2fr_1fr]' : 'flex flex-col'}
            ${threeAndTwoProductsInRow && 'three-and-two-products-in-row'} group relative cursor-pointer rounded 
            bg-mediumGray transition-colors hover:bg-borderGray`}
            key={productIndex}
          >
            <div className={`row-[1_/_span_2] relative ${!productHorizontalLayout && 'pt-[56.25%]'}`}>
              <img
                className={`${productHorizontalLayout ? 'static rounded-l' : 'absolute top-0 rounded-t'} size-full object-cover`}
                src={product.image}
                alt={product.heading}
                loading='lazy'
              />
              {product.newProduct
                &&
                <span className='product-type bg-red-600'>
                  {product.newProduct}
                </span>
              }
              {product.deal
                &&
                <span className='product-type bg-green'>
                  {product.deal}
                </span>
              }
              {product.prePurchase
                &&
                <span className='product-type bg-red-600'>
                  {product.prePurchase}
                </span>
              }
            </div>

            <dl className={`${productHorizontalLayout && `flex justify-center flex-col h-full`} 
              ${biggerFont || productHorizontalLayout ? 'pt-8 px-8' : 'pt-6 px-6'} transition-transform duration-300 group-hover:translate-y-[-.3rem]`}
            >
              <dd className='flex items-center gap-1'>
                <img
                  className={`${largeIconInHorizontalLayout ? 'w-full' : 'max-w-6 w-6'}`}
                  src={product.icon}
                  alt=''
                  loading='lazy'
                />
                {product.productGameName
                  &&
                  <span className={`${productHorizontalLayout ? 'text-sm' : 'text-xs'} text-almostWhite font-bold tracking-wide uppercase`}>
                    {product.productGameName}
                  </span>
                }
              </dd>

              <dt className={`${biggerFont ? 'text-2xl leading-7' : productHorizontalLayout ? 'text-3xl' : 'text-lg leading-5'} font-bold text-almostWhiteThird my-1.5`}>
                {product.heading}
              </dt>
              {product.yellowText
                &&
                <dd className={`${biggerFont ? 'text-base' : productHorizontalLayout ? 'text-lg py-1' : 'text-sm'} text-yellow mb-1.5`}>
                  {product.yellowText}
                </dd>
              }
              <dd className={`${biggerFont ? 'text-sm' : productHorizontalLayout ? 'text-base' : 'text-xs'} text-almostWhite`}>
                {product.grayText}
              </dd>
            </dl>

            {product.gameCurrencyIcon
              ?
              <div className={`flex items-center gap-1 ${biggerFont || productHorizontalLayout ? 'p-8' : 'p-6'} mt-auto`}
              >
                <img
                  className='max-w-7 size-7'
                  src={product.gameCurrencyIcon}
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                />
                <span className={`${biggerFont || productHorizontalLayout ? 'text-2xl' : 'text-basis'} font-bold text-almostWhiteThird`}>
                  {product.price}
                </span>
              </div>
              :
              <div className={`w-full mt-auto ${biggerFont || productHorizontalLayout ? 'p-8' : 'p-6'}`}>
                <span className={`${biggerFont || productHorizontalLayout ? 'text-2xl' : 'text-basis'} font-bold text-almostWhiteThird`}>
                  {product.price}
                </span>
              </div>
            }

            {product.linkText
              &&
              <div className='p-6'>
                <button className='blue-button p-1 blue-button-hover' type='button'>
                  {product.linkText}
                </button>
              </div>
            }
          </Link>
        )
      })}
    </div>
  )
}

export default Products;