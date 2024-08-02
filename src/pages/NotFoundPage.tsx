import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className='flex flex-col place-content-center mt-8'>
      <img
        className='w-96 mb-16 m-auto'
        src='/not-found-page/image.png'
        alt='Not found page'
        loading='lazy'
      />
      <h1 className='text-xl font-bold text-center text-white mb-6'>
        Hmm... looks like there's nothing here.
      </h1>
      <Link to='/' className='blue-button text-center max-w-24 p-1 m-auto blue-button-hover'>
        Home
      </Link>
    </main>
  );
}

export default NotFoundPage;