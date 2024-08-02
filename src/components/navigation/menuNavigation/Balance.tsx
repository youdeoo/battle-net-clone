import { FC, memo } from 'react';

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

const Balance: FC = () => {
  return (
    <div className='menu-option group flex items-center gap-2 bg-mediumGray hover-light-gray-background'>
      <span className='text-sm font-semibold text-lightGray transition-colors group-hover:text-white'>
        Battle.net Balance
      </span>
      <img
        className='max-w-3 w-3 group-hover:brightness-[5]'
        src='/icons/chevron-down.svg'
        alt=''
        aria-hidden='true'
        loading='lazy'
      />
      <div className='menu-element-on-hover right-0 group-hover:visible group-hover:opacity-100'>
        <div className='border border-borderGray rounded-md bg-mediumBlue p-2'>
          {balanceData.map((data) => (
            <div
              className='group/item relative flex gap-3 p-4 hover-light-gray-background 
              before:content-[""] before:absolute before:top-0 before:left-[.2px] before:h-full before:rounded-tl-md 
              before:rounded-bl-md before:active:border-l-[3px] before:active:border-l-lightBlue'
              key={data.text}
            >
              <img
                className='max-w-5 transition-all group-hover/item:brightness-[5]'
                src={data.image}
                alt={data.text}
                loading='lazy'
              />
              <span className='text-lightGray text-sm transition-colors group-hover/item:text-white'>
                {data.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Balance);