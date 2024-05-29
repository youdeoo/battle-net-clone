import { FC } from 'react';
import { ICarouselItem } from '../interfaces/interfaces';

interface Prop {
  carouselData: Array<ICarouselItem>;
}

const Carousel: FC<Prop> = ({ carouselData }) => {
  return (
    <section>
      {carouselData.map((data, index) => (
        <div key={index}>
          <p className='text-white'>{data.text}</p>
          <img src={data.backgroundImage.laptop} />
        </div>
      ))}
    </section>
  );
}

export default Carousel;