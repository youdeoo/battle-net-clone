import { stateIndexEqualIndex } from '@/lib/utils';
import type { TProductDataProp } from '@/types/types';

type Props = {
  markedProductIndex: number;
}

const SubscriptionPriceInformation = ({
  productData,
  markedProductIndex
}: TProductDataProp & Props) => {

  return (
    <div className='border-t border-t-borderGray pt-4 mt-0'>
      {productData.subscriptionPriceInformation!.map((info, index) => (
        <dl
          className={`${stateIndexEqualIndex(markedProductIndex, index) ? 'block' : 'hidden'}`}
          key={info.defaultPrice}
        >
          {info.discountPercent
            ?
            <>
              <dd className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-3xl font-bold text-lightGreen'>
                    {info.discountPrice}
                  </span>
                  <span className='font-bold text-gray line-through'>
                    {info.defaultPrice}
                  </span>
                </div>

                <span className='text-sm font-bold bg-lightGreen rounded py-0.5 px-1'>
                  {info.discountPercent}
                </span>
              </dd>

              <dd className='text-lg text-gray mt-2'>
                {info.text}
              </dd>
            </>
            :
            <>
              <dd className='text-3xl font-bold text-almostWhiteSecond'>
                {info.defaultPrice}
              </dd>
              <dd className='text-lg text-gray mt-2'>
                {info.text}
              </dd>
            </>
          }
        </dl>
      ))}
    </div>
  );
}

export default SubscriptionPriceInformation;