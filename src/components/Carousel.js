import Slider from 'react-slick';
import CarouselItem from './CarouselItem'
import carouselSettings from './carouselSettings';

export default function Carousel(props) {
    const settings = {
      ...carouselSettings
    };

    return (
      <div className='product-carousel'>
        <h2>BestSellers</h2>
        <Slider {...settings}>
          {props.products.map((product) => (
            <CarouselItem
              key={`${product.id}-carousel`}
              product={product}
              addProduct={props.addProduct}
            />
          ))}
        </Slider>
      </div>
    );
}