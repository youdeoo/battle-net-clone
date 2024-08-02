import BackToPreviousPageButton from '../BackToPreviousPageButton';

const PaysafecardMethod = () => {
  return (
    <div className='mt-4'>
      <p className='text-sm text-lightGray'>
        You will need to complete your purchase on the paysafecard site.
      </p>
      <p className='text-sm text-lightGray mt-4 mb-8'>
        By clicking “<span className='text-white'>Pay Now</span>,” you represent
        that you are an authorized user of this payment method, you agree to the
        <span className='text-lighterBlue'> Blizzard End User License Agreement</span>,
        <span className='text-lighterBlue'> Blizzard's Terms of Sale</span>, and to the
        immediate delivery of your order. You will lose the right to withdraw your order
        once the delivery process has started.
      </p>
      <button className='blue-button p-2 mb-4' type='button'>Continue</button>
      <BackToPreviousPageButton />
    </div>
  );
}

export default PaysafecardMethod;