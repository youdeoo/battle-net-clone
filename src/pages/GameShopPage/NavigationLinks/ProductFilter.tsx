import { FC, forwardRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { setFilteredProducts } from '@/lib/features/filteredProductsSlice';
import { currentGamePage } from '@/lib/utils';
import type { TProductsCategories } from '@/types/types';

const ProductFilter: FC = forwardRef<HTMLSelectElement>((_, selectRect) => {
  const dispatch = useAppDispatch();
  const { gameId } = useParams();
  const { productsCategories: currentGameProductsCategories } = currentGamePage(gameId, undefined)[0];

  const convertPriceToNumber = (priceText: string): number => {
    if (priceText[0] === '$') {
      return parseFloat(priceText.slice(1));
    }
    else if (priceText.slice(0, 4) === 'From') {
      return parseFloat(priceText.slice(6));
    }
    else {
      return 0;
    }
  }

  const sortFromLowestPrice = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: [...category.products!].sort((a, b) => convertPriceToNumber(a.price) - convertPriceToNumber(b.price))
    }))
  }

  const sortFromHighestPrice = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: [...category.products!].sort((a, b) => convertPriceToNumber(b.price) - convertPriceToNumber(a.price))
    }))
  }

  const sortProductNamesAlphabetically = (): Array<TProductsCategories> => {
    return currentGameProductsCategories!.map((category) => ({
      ...category,
      products: [...category.products!].sort((a, b) => a.productName.localeCompare(b.productName))
    }))
  }

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (e.target.value) {
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