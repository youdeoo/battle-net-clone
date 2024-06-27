import { FC } from 'react';
import { TCommonProductsDataProp } from '../../types/types';

const Features: FC<TCommonProductsDataProp> = ({ currentCommonProductsData }) => {
  return (
    <div className='border-b border-borderGray'>
      {currentCommonProductsData.productFeatures.map((feature, featureIndex) => (
        <div
          className={`${feature.heading ? 'grid grid-cols-[25%_75%]' : 'ml-[25%]'} pb-16 mt-16`}
          key={featureIndex}
        >
          {feature.heading
            &&
            <h2>{feature.heading}</h2>
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
        </div>
      ))}
    </div>
  );
}

export default Features;