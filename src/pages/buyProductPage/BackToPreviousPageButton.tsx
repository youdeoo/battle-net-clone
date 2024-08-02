import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BackToPreviousPageButton = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const backToPreviousPage = (): void => {
    return navigate(`/product/${productId}`, { replace: true });
  }

  return (
    <button
      onClick={backToPreviousPage}
      className='blue-button bg-[#313339] p-2'
      type='button'
    >
      Cancel
    </button>
  );
}

export default memo(BackToPreviousPageButton);