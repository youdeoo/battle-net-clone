import { memo } from 'react';
import type { TProductDataProp, TCommonProductsDataProp } from '@/types/types';

type Prop = TProductDataProp & TCommonProductsDataProp;

const ProductDetails = memo(({ productData, currentCommonProductsData }: Prop) => {
  return (
    <section id='product-details' className='product-page-grid-section scroll-m-32'>
      <h2 className='text-3xl font-bold text-white'>
        Product Details
      </h2>
      <div className='flex flex-row flex-wrap'>
        <div className='w-[33.3%]'>
          {currentCommonProductsData.productDetails.map((detail, index) => (
            (detail.heading === 'Genre' || detail.heading === 'Platforms')
            &&
            <div
              className={`${detail.heading === 'Platforms' && 'mt-8'}`}
              key={index}
            >
              <h3 className='text-xl font-bold text-almostWhiteSecond'>
                {detail.heading}
              </h3>
              {detail.text
                &&
                <p className='text-sm text-lightGray mt-2'>{detail.text}</p>
              }
              {detail.platforms
                &&
                <div className='grid grid-cols-2 gap-2 mt-2'>
                  {detail.platforms.map((platform, platformIndex) => (
                    <div className='flex items-center gap-2 flex-[1_1_50%]' key={platformIndex}>
                      <img
                        className='max-w-3 w-3 h-auto'
                        src={platform.logo}
                        alt=''
                        aria-hidden='true'
                        loading='lazy'
                      />
                      <span className='text-sm text-lightGray'>{platform.name}</span>
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
        <div className='w-[33.3%]'>
          {currentCommonProductsData.productDetails.map((detail, index) => (
            (detail.heading === 'Available Languages' || detail.heading === 'Available Regions')
            &&
            <div
              className={`${detail.heading === 'Available Regions' && 'mt-8'}`}
              key={index}
            >
              <h3 className='text-xl font-bold text-almostWhiteSecond'>
                {detail.heading}
              </h3>
              {detail.languages
                &&
                <ul className='flex flex-wrap gap-y-2 mt-2'>
                  {detail.languages.map((language, languageIndex) => (
                    <li
                      className='flex-[1_1_50%] text-sm text-lightGray'
                      key={languageIndex}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              }
              {detail.regions
                &&
                <ul className='flex flex-wrap gap-y-2 mt-2'>
                  {detail.regions.map((region, regionIndex) => (
                    <li
                      className='flex-[1_1_50%] text-sm text-lightGray'
                      key={regionIndex}
                    >
                      {region}
                    </li>
                  ))}
                </ul>
              }
            </div>
          ))}
        </div>
        <div className='w-[33.3%]'>
          <div>
            <h3 className='text-xl font-bold text-almostWhiteSecond'>
              Product Requirements
            </h3>
            <ul className='list-disc pl-8'>
              {productData.productRequirements.map((req, reqIndex) => (
                <li
                  className='text-sm text-lightGray first-of-type:my-2'
                  key={reqIndex}
                >
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div >
    </section>
  );
})

export default ProductDetails;