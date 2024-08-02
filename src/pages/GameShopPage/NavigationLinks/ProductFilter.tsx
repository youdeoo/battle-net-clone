import { forwardRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { setFilteredProducts } from '@/lib/features/filteredProductsSlice';
import { getSelectedFilterValue } from '@/lib/features/selectedFilterValueSlice';
import { currentGameData } from '@/lib/utils';
import type { TProductsCategories } from '@/types/types';

const ProductFilter = forwardRef((_, selectRect: React.ForwardedRef<HTMLSelectElement>) => {
  const dispatch = useAppDispatch();
  const selectedFilterValue = useAppSelector((state) => state.selectedFilterValue.selectedFilterValue);
  const { gameId } = useParams();
  const { productsCategories: currentGameProductsCategories } = currentGameData(gameId, undefined)[0];

  const formatPriceString = (priceText: string): number => {
    if (priceText[0] === '$') {
      return parseFloat(priceText.slice(1, 5));
    }
    else if (priceText.includes('From')) {
      return parseFloat(priceText.slice(6));
    }
    else if (priceText.includes(',')) {
      return parseFloat(priceText.replace(',', '.'));
    }
    else {
      return 0;
    }
  }

  const sortFromLowestPrice = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: category.products && [...category.products].sort((a, b) => formatPriceString(a.price) - formatPriceString(b.price))
    }))
  }

  const sortFromHighestPrice = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: category.products && [...category.products].sort((a, b) => formatPriceString(b.price) - formatPriceString(a.price))
    }))
  }

  const sortProductNamesAlphabetically = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: category.products && [...category.products].sort((a, b) => a.productName.localeCompare(b.productName))
    }))
  }

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    dispatch(getSelectedFilterValue(value));

    switch (value) {
      case 'featured':
        dispatch(setFilteredProducts([]));
        break;
      case 'lowest':
        dispatch(setFilteredProducts(sortFromLowestPrice()));
        break;
      case 'highest':
        dispatch(setFilteredProducts(sortFromHighestPrice()));
        break;
      case 'name':
        dispatch(setFilteredProducts(sortProductNamesAlphabetically()));
        break;
    }
  }, [gameId])

  return (
    <select
      onChange={handleSelectChange}
      value={selectedFilterValue}
      ref={selectRect}
      className='text-white bg-darkBlue cursor-pointer rounded-md 
      transition-colors border border-lighterBorderGray p-2 hover:border-white'
    >
      <option value='featured'>Featured</option>
      <option value='lowest'>Price: Lowest</option>
      <option value='highest'>Price: Highest</option>
      <option value='name'>Name</option>
    </select>
  )
})

export default ProductFilter;