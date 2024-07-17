import { Link } from 'react-router-dom';

const linksData = [
  {
    image: '/icons/desktop.svg',
    link: '/mobile',
    text: 'Mobile App'
  },
  {
    image: '/icons/mobile-screen.svg',
    link: '/desktop',
    text: 'Desktop App'
  }
];

const DownloadPage = () => {
  return (
    <main>
      <section className='grid items-center max-w-[2600px] min-h-[750px] bg-[url("/download-page/background.png")] background-image-styles px-10 py-20 m-auto'>
        <div className='grid justify-center'>
          <img
            className='w-20 rounded-full aspect-square m-auto'
            src='/logo/logo-icon.png'
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
          <h1 className='text-6xl font-bold text-center text-white mt-8 mb-8'>Downloading<br /> Battle.net desktop app</h1>
          <p className='text-lg text-lightGray text-center mb-16'>
            If your download didn't start, <span className='text-lighterBlue font-semibold underline cursor-pointer transition-colors hover:text-almostWhite'>try again</span>
          </p>
          <div className='min-w-[350px] max-w-[350px] bg-[#0e0e0e99] rounded-md px-6 py-5 m-auto'>
            <p className='text-lg text-lightGray ml-3 mb-4'>Helpful links:</p>
            {linksData.map((data, index) => (
              <Link
                className='flex items-center gap-2 w-fit text-white font-semibold rounded-md p-3 transition-colors hover:bg-almostTransparent'
                to={data.link}
                key={index}
              >
                <img
                  className='max-w-4 w-4'
                  src={data.image}
                  alt={`got to ${data.text} page`}
                  loading='lazy'
                />
                {data.text}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DownloadPage;