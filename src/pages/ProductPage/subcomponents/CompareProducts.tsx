import { memo } from 'react';
import type { TProductDataProp } from '@/types/types';

const oddIndex = (index: number): boolean => {
  return index % 2 === 1;
}

const CompareProducts = memo(({ productData }: TProductDataProp) => {
  const { images, headings, prices, linkTexts } = productData.compareProducts!.products;

  return (
    <section id='compare' className='py-16 border-b border-borderGray scroll-m-24'>
      <h2 className='text-3xl font-bold text-white'>
        Compare Products
      </h2>
      <table className='table-fixed border-collapse w-full mt-8'>
        <tbody>
          <tr>
            <td className='w-full'></td>
            {images.map((image, index) => (
              <td className='w-full pt-3 px-3' key={image}>
                <img
                  className='size-full'
                  src={image}
                  alt={headings[index]}
                  loading='lazy'
                />
              </td>
            ))}
          </tr>
        </tbody>
        <tbody className='sticky top-[7.5rem] z-[1] bg-darkBlue'>
          <tr>
            <th className='w-full'></th>
            {headings.map((data, index) => (
              <th className='w-full' key={data}>
                <div className='flex flex-col pt-4 pb-6 px-4'>
                  <span className='text-lg text-white'>{data}</span>
                  <span className='text-[1.35rem] text-lightGray mt-1'>
                    {prices[index]}
                  </span>
                </div>
              </th>
            ))}
          </tr>
          <tr>
            <td className='w-full'></td>
            {linkTexts.map((data, index) => (
              <td className='w-full pb-6 px-3' key={index}>
                <button
                  className='blue-button p-1 blue-button-hover'
                  type='button'
                >
                  {data}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
        <tbody>
          {productData.compareProducts!.content.map((data, index) => (
            <tr
              className='w-full'
              key={data.name}
            >
              <td className={`${oddIndex(index) && 'bg-mediumGray rounded-l'} text-lightGray p-4`}>
                {data.name}
              </td>
              {data.productsContent.map((content, index) => (
                <td
                  className={`${oddIndex(index) && 'bg-mediumGray last-of-type:rounded-r'} text-center p-4`}
                  key={index}
                >
                  {content[0] === '/'
                    ?
                    <img
                      className='max-w-4 w-4 h-auto brightness-200 m-auto'
                      src={content}
                      alt=''
                      aria-hidden='true'
                      loading='lazy'
                    />
                    :
                    <span className='text-white'>{content}</span>
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
})

export default CompareProducts