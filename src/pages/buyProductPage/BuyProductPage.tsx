import { useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import BackToPreviousPageButton from './BackToPreviousPageButton';
import ProductSection from './ProductSection';
import PayPalMethod from './paymentMethods/PayPalMethod';
import PaysafecardMethod from './paymentMethods/PaysafecardMethod';
import CardMethod from './paymentMethods/CardMethod';

const paymentServices = [
  'Please select a payment option...',
  'PayPal',
  'Credit or Debit Card',
  'Battle.net Balance ($1.00)',
  'paysafecard'
];

const BuyProductPage = () => {
  const [displayPaymentService, setDisplayPaymentService] = useState(0);

  return (
    <main className='mt-20'>
      <ScrollToTopButton />
      <div className='px-16'>
        <div className='border-b border-b-borderGray pb-12'>
          <div className='grid grid-cols-[65%_35%] max-w-[900px] m-auto'>
            <section className='border-r border-r-borderGray pr-16'>
              {displayPaymentService === 3
                &&
                <div className='flex items-center gap-4 bg-mediumBlue border border-borderGray rounded p-4 mb-4'>
                  <img
                    className='self-start w-6'
                    src='/icons/circle-warn.svg'
                    alt=''
                    loading='lazy'
                  />
                  <div>
                    <p className='text-sm text-white'>
                      You don't have enough Battle.net Balance to cover the cost of this purchase.
                    </p>
                    <p className='text-sm text-white'>
                      Purchase additional <span className='font-bold text-lighterBlue underline'>Battle.net Balance</span> or
                      <span className='font-bold text-lighterBlue underline'> redeem a Battle.net Balance Card</span> and try again.
                    </p>
                  </div>
                </div>
              }
              <h3 className='text-2xl font-bold text-white mb-4'>Payment Information</h3>
              <label
                htmlFor='paymentMethods'
                className='block gray-text-uppercase mb-1'
              >
                Pay With
              </label>
              <select
                id='x'
                className='w-full bg-darkBlue text-white border border-borderGray cursor-pointer appearance-none
                rounded p-2 transition-all duration-300 hover:border-white bg-[url("/icons/caret-down.svg")] bg-no-repeat bg-[calc(100%-0.5rem)] bg-[length:0.55rem]'
              >
                {paymentServices.map((serive, index) => (
                  <option
                    onClick={() => setDisplayPaymentService(index)}
                    key={index}
                  >
                    {serive}
                  </option>
                ))}
              </select>
              <div className={`${displayPaymentService === 0 || displayPaymentService === 3 ? 'block' : 'hidden'}`}>
                <p className='text-sm text-lightGray mt-4 mb-8'>
                  By clicking “<span className='text-white'>Pay Now</span>,” you represent
                  that you are an authorized user of this payment method, you agree to the
                  <span className='text-lighterBlue'> Blizzard End User License Agreement</span>,
                  <span className='text-lighterBlue'> Blizzard's Terms of Sale</span>, and to the
                  immediate delivery of your order. You will lose the right to withdraw your order
                  once the delivery process has started.
                </p>
                <div>
                  <button className='blue-button cursor-not-allowed opacity-70 p-2 mb-6' type='button'>
                    Pay Now
                  </button>
                  <BackToPreviousPageButton />
                </div>
              </div>
              {displayPaymentService === 1 && <PayPalMethod />}
              {displayPaymentService === 2 && <CardMethod />}
              {displayPaymentService === 4 && <PaysafecardMethod />}
            </section>
            <ProductSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BuyProductPage;