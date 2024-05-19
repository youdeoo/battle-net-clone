import { FC } from 'react';

const Balance: FC = () => {
  const balanceData = [
    {
      image: '/icons/plus.svg',
      text: 'Add Balance'
    },
    {
      image: '/icons/gift.svg',
      text: 'Gift Balance'
    },
    {
      image: '/icons/clock.svg',
      text: 'Balance History'
    },
    {
      image: '/icons/circle-question.svg',
      text: 'Balance Help'
    }
  ]

  return (
    <div className='menu-option group flex gap-2 bg-mediumGray rounded-md'>
      <span className='text-sm font-semibold text-lightGray'>Battle.net Balance</span>
      <img
        className='max-w-3'
        src='/icons/chevron-down.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
      />

      <div className='menu-element-on-hover right-0'>
        <div className='border border-borderGray rounded-md bg-mediumBlue p-2'>
          {balanceData.map((data, index) => (
            <div key={index} className='flex gap-3 rounded-md p-4 transition-colors hover:bg-mediumGray'>
              <img
                className='max-w-5'
                src={data.image}
                alt={data.text}
                loading='lazy'
              />
              <span className='text-lightGray text-sm'>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Balance;