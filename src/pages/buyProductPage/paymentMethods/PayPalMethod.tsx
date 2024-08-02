import BackToPreviousPageButton from '../BackToPreviousPageButton';

const PayPalMethod = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-bold text-white'>Link your paypal account</h1>
      <p className='text-sm text-lightGray mt-4'>
        You will need to accept a billing agreement on the PayPal site.
      </p>
      <button className='blue-button p-2 my-4' type='button'>
        Continue to PayPal
      </button>
      <BackToPreviousPageButton />
    </div>
  );
}

export default PayPalMethod