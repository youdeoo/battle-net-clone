import { useState, memo } from 'react';
import { stateIndexEqualIndex } from '@/lib/utils';
import type { TCommonProductsDataProp } from '@/types/types';

const SystemRequirements = ({ currentCommonProductsData }: TCommonProductsDataProp) => {
  const [displaySystemRequirementsIndex, setDisplaySystemRequirementsIndex] = useState(0);

  return (
    <section id='system-requirements' className='product-page-grid-section scroll-m-32'>
      <h2 className='text-3xl w-1/2 font-bold text-white'>
        System Requirements
      </h2>
      <div>
        <div className='flex items-center border-b border-borderGray'>
          {currentCommonProductsData.systemRequirements.map((system, index) => (
            <button
              onClick={() => setDisplaySystemRequirementsIndex(index)}
              className={`group relative flex items-center gap-2 cursor-pointer pb-4 px-4 
                ${stateIndexEqualIndex(displaySystemRequirementsIndex, index) && 'before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-lighterBlue'}`}
              type='button'
              key={system.name}
            >
              <img
                className={`${stateIndexEqualIndex(displaySystemRequirementsIndex, index) && 'brightness-[5]'} max-w-4 w-4 h-auto 
                transition-all group-hover:brightness-[5]`}
                src={system.logo}
                alt={`system requirements for ${system.name}`}
                loading='lazy'
              />
              <span className={`${stateIndexEqualIndex(displaySystemRequirementsIndex, index) && 'text-white'} font-bold text-gray 
                transition-colors group-hover:text-white`}
              >
                {system.name}
              </span>
            </button>
          ))}
        </div>
        <div className='flex flex-row'>
          {currentCommonProductsData.systemRequirements.map((system, systemIndex) =>
            system.requirements.map((req) => (
              stateIndexEqualIndex(displaySystemRequirementsIndex, systemIndex)
              &&
              <div
                className='mt-8'
                key={req.requirementsHeading}
              >
                <h3 className='text-2xl font-bold text-white'>
                  {req.requirementsHeading}
                </h3>

                <div className='flex flex-wrap'>
                  {req.data.map((data) => (
                    <dl
                      className='w-1/2 mt-4 pr-8'
                      key={data.heading}
                    >
                      <dt className='font-bold text-almostWhiteSecond'>{data.heading}</dt>
                      <dd className='text-sm text-lightGray'>{data.data}</dd>
                    </dl>
                  ))}
                </div>
              </div>
            )))}
        </div>
      </div>
    </section>
  );
}

export default memo(SystemRequirements);