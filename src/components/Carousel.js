import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import CarouselItem from './CarouselItem'
import carouselSettings from './carouselSettings';

 function Carousel() {
    const settings = {
      ...carouselSettings
    };

    return (
      <div className='product-carousel'>
        <h2>BestSellers</h2>
        <Slider {...settings}>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Slider>
      </div>
    );
};

export default connect(null, {getProducts})(Carousel);