import { FC } from 'react';

const Account: FC = () => {
  const accountData = [
    {
      image: '/icons/user-gear.svg',
      text: 'Account Settings'
    },
    {
      image: '/icons/heart.svg',
      text: 'Wish List'
    },
    {
      image: '/icons/barcode.svg',
      text: 'Redeem Code'
    },
    {
      image: '/icons/dashcube.svg',
      text: 'Chnage BattleTag'
    }
  ];

  return (
    <div className='group/main-item header-link relative'>
      <img
        className='max-w-5 group-hover/main-item:brightness-[5]'
        src='/icons/circle-user.svg'
        alt='account'
        loading='lazy'
      />

      <div className='flex items-center gap-2'>
        <span className='text-white font-bold'>Account</span>
        <img
          className='max-w-3 group-hover/main-item:brightness-[5]'
          src='/icons/chevron-down.svg'
          alt=''
          aria-hidden='true'
          loading='lazy'
        />
      </div>

      <div className='absolute top-12 right-0 z-10 hidden min-w-[320px] pt-4 animate-[hideRotateX_.15s_ease-in-out] 
        group-hover/main-item:block group-hover/main-item:animate-[displayRotateX_.15s_ease-in-out]'
      >
        <div className='absolute top-[8px] right-[4.5rem] z-20 size-4 rotate-[45deg] rounded-[2px] border-t-[1px] 
        border-t-borderGray border-l-[1px] border-l-borderGray bg-mediumBlue'
        >
        </div>
        <div className='rounded-md border border-borderGray bg-mediumBlue'>
          <div className='p-2'>
            <div className='p-4'>
              <button className='blue-button transition-colors hover:bg-[#40a3ff]'>Log In</button>
            </div>

            {accountData.map((data, index) => (
              <div
                key={index}
                className='group/text flex items-center gap-3 rounded-md p-4 transition-colors hover:bg-mediumGray'
              >
                <img
                  className='max-w-5 group-hover/text:brightness-[5]'
                  src={data.image}
                  alt={data.text}
                  loading='lazy'
                />
                <span className='text-sm text-lightGray group-hover/text:text-white'>{data.text}</span>
              </div>
            ))}
          </div>

          <div className='bg-[#22242C] p-2 mt-1'>
            <div className='group flex items-center gap-3 rounded-md p-4 transition-colors hover:bg-mediumGray'>
              <img
                className='max-w-5 group-hover:brightness-[5]'
                src='/icons/pencil.svg'
                alt='create account'
                loading='lazy'
              />
              <span className='text-sm text-lightGray group-hover:text-white'>Create Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;