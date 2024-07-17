import { memo } from 'react';
import type { TProductDataProp } from '@/types/types';

const Features = memo(({ productData }: TProductDataProp) => {
  return (
    <>
      {productData.productFeatures
        &&
        productData.productFeatures.map((feature, featureIndex) => (
          <section
            className={`${feature.heading ? 'grid grid-cols-[25%_75%]' : 'ml-[25%]'} pb-16 mt-16 border-b border-borderGray`}
            key={featureIndex}
          >
            {(feature.heading && feature.secondHeading)
              ?
              <div>
                {feature.heading
                  &&
                  <h2 className='w-3/4 text-3xl font-bold text-white'>
                    {feature.heading}
                  </h2>
                }
                {feature.secondHeading
                  &&
                  <h3 className='w-3/4 text-white'>
                    {feature.secondHeading}
                  </h3>
                }
              </div>
              :
              feature.heading
              &&
              <h2 className='w-3/4 text-3xl font-bold text-white'>
                {feature.heading}
              </h2>
            }
            <div className='grid grid-cols-3 gap-6 size-full'>
              {feature.data.map((data, dataIndex) => (
                <div key={dataIndex} className='relative'>
                  <img
                    className='w-full h-full max-h-[180px] object-cover rounded'
                    src={data.image}
                    alt=''
                    aria-hidden='true'
                    loading='lazy'
                  />
                  <h3 className='text-xl font-bold text-almostWhiteSecond my-4'>
                    {data.heading}
                  </h3>
                  <p className='text-lightGray'>{data.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
    </>
  );
})

export default Features;