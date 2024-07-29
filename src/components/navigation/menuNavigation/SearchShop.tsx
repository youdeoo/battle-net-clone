import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { TFormatGameData, TGameData, TProduct } from '@/types/types';
import gamesData from '@/assets/data.json';

type TProductArray = Array<TProduct | undefined>;

type TGameAndFormatData = {
  games: Array<TGameData>;
} & Omit<TFormatGameData, 'link'>

type TGamesWithMatchingProducts = {
  gameName: string;
  icon: string;
  products: Array<TProduct>;
}

const SearchShop = () => {
  const [searchProductValue, setSearchProductValue] = useState('');
  const emptyInput = searchProductValue === '';

  const handleSearchProductValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchProductValue(e.target.value);
  }

  const removeUnecessaryCharacters = (product: TProduct | undefined): string | undefined => {
    return product?.productName?.replace(/[®:'-.\s]+/g, ' ').toLowerCase();
  }

  const productNameMatch = (product: TProduct | undefined): boolean | undefined => {
    return removeUnecessaryCharacters(product)?.includes(searchProductValue.toLowerCase());
  }

  const groupProductsByGameType = (data: TGameAndFormatData): TProductArray => {
    return data.games.flatMap((gameData) => gameData.productsCategories?.
      flatMap((cateogry) => cateogry.products));
  }

  const removeDuplicateProducts = (data: TGameAndFormatData): TProductArray => {
    return groupProductsByGameType(data).filter((element, index, self) =>
      index === self.findIndex((selfEl) => selfEl?.productName === element?.productName))
  }

  const filterProductsByGameAndSearch = (data: TGameAndFormatData, gameData: TGameData): TProductArray => {
    return removeDuplicateProducts(data).filter((product) => gameData.productsCategories?.some((category) =>
      category.products?.includes(product as TProduct) && productNameMatch(product)))
  }

  const getGamesWithMatchingProducts = (): Array<TGamesWithMatchingProducts> => {
    const gameData = gamesData.flatMap((data) => data.games.map((gameData) => ({
      gameName: gameData.gameName,
      icon: gameData.icon,
      products: filterProductsByGameAndSearch(data as TGameAndFormatData, gameData as TGameData)
    })))

    const gamesWithMatchingProducts = gameData.filter((data) => data.products.length > 0 ? data : null);
    return gamesWithMatchingProducts as Array<TGamesWithMatchingProducts>;
  }

  const foundProduct = getGamesWithMatchingProducts().length !== 0;

  return (
    <div className='relative flex items-center gap-3 h-[56px] rounded-md bg-mediumGray py-[1.125rem] px-4'>
      <img
        className='max-w-5 w-5'
        src='/icons/magnifying-glass-solid.svg'
        alt='search shop'
        loading='lazy'
      />
      <input
        onChange={handleSearchProductValue}
        value={searchProductValue}
        className='w-full text-white bg-mediumGray outline-none placeholder:text-sm 
        placeholder:text-gray placeholder:opacity-80 placeholder:font-bold'
        type='text'
        placeholder='Search Shop'
      />
      <button
        onClick={() => setSearchProductValue('')}
        className={`${emptyInput ? 'invisible' : 'visible'}`}
        type='button'
      >
        <img
          className='max-w-5 w-5 rotate-45 brightness-200'
          src='/icons/plus.svg'
          alt='remove searched text'
          loading='lazy'
        />
      </button>
      <div className={`${emptyInput ? 'hidden' : 'block'} absolute top-[4rem] left-0 z-50 min-w-[31rem] max-w-[31rem]
      max-h-[600px] bg-mediumBlue border border-borderGray rounded overflow-scroll pb-4 px-6`}
      >
        {foundProduct
          ?
          getGamesWithMatchingProducts().map((gameData) => (
            <div key={gameData?.gameName}>
              <div className='flex items-center gap-1 pt-4 pl-2 mb-2'>
                <img
                  className='max-w-6 w-6'
                  src={gameData?.icon}
                  alt={gameData?.gameName}
                  loading='lazy'
                />
                <span className='text-[13px] font-bold text-lightGray uppercase tracking-wider'>
                  {gameData?.gameName}
                </span>
              </div>
              {gameData?.products.map((product) => (
                <Link
                  onClick={() => setSearchProductValue('')}
                  to={`/product/${product?.productLink}`}
                  className='group flex items-center gap-3 py-1 px-2 overflow-hidden transition-colors hover:bg-[#272930] rounded'
                  key={product!.id}
                >
                  <img
                    className='max-w-24 w-24 rounded'
                    src={product?.image}
                    alt={product?.productName}
                    loading='lazy'
                  />
                  <div className='flex flex-col gap-0.5 overflow-hidden'>
                    <span className='text-lightGray text-sm font-bold whitespace-nowrap leading-[18px] 
                    text-ellipsis overflow-hidden transition-colors group-hover:text-white'
                    >
                      {product?.productName}
                    </span>
                    <span className='text-xs text-lightGray'>{product?.grayText}</span>
                    {product?.yellowText
                      &&
                      <span className='text-xs text-yellow leading-[18px] whitespace-nowrap text-ellipsis overflow-hidden'>
                        {product.yellowText}
                      </span>
                    }
                  </div>
                </Link>
              ))}
            </div>
          ))
          :
          <p className='text-lightGray pt-4 pl-2'>No results found</p>
        }
      </div>
    </div>
  );
}

export default SearchShop;