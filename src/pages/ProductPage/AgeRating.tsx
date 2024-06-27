import { FC } from 'react';
import { TCommonProductsDataProp } from '../../types/types';

const AgeRating: FC<TCommonProductsDataProp> = ({ currentCommonProductsData }) => {
  return (
    <div className='mt-8'>
      <div className='border-b border-borderGray pb-8 ml-[25%] mr-4'>
        <h3 className='text-xl font-bold text-white'>
          Age Rating
        </h3>

        <div className='flex gap-2 mt-2'>
          {currentCommonProductsData.ageRating.map((data, index) => (
            <img
              className='max-w-16 w-full h-auto'
              key={index}
              src={data.image}
              alt={data.name}
              loading='lazy'
            />
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center gap-8 mt-16 mb-8'>
        <div className='flex items-center gap-4'>
          <p className='text-[.9rem] font-bold text-lightGray uppercase w-full'>
            Published by
          </p>
          <img
            className='max-w-14 w-full h-auto'
            src={currentCommonProductsData.publishedBy}
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
        </div>

        <div className='flex items-center gap-4'>
          <p className='text-[.9rem] font-bold text-lightGray uppercase'>
            Developed by
          </p>

          {currentCommonProductsData.developBy.map((compnay, index) => (
            <img
              className='max-w-14 w-full h-auto'
              key={index}
              src={compnay}
              alt=''
              aria-hidden='true'
              loading='lazy'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgeRating;