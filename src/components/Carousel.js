import Slider from 'react-slick';
import CarouselItem from './CarouselItem'

export default function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div className='product-carousel'>
        <h2>Best Sellers</h2>
        <Slider {...settings}>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Slider>
      </div>
    );
}