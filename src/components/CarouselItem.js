export default function CarouselItem(props) {
  const {
    addProduct, 
    product: { id, name, image },
  } = props;

    return (
      <figure id={id} onClick={(e) => addProduct(id)}>
        <div className='product-carousel-img'>
          <img src={image} alt={`Photo of ${name}`} />
        </div>
        <figcaption>{name}</figcaption>
      </figure>
    );
}