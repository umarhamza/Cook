import {useState} from 'react';

export default function TableRow(props) {
  const {
    currency,
    product: { name, price, serves, image },
  } = props;

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQty = e => {
      setQuantity(quantity + 1);
  };
  
  const handleReduceQty = e => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='tr'>
      <div className='tr-image'>
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <div className='tr-content'>
        <div className='product-name'>
          <div className='tr-image tr-image-desktop'>
            <img src={image} alt={`Photo of ${name}`} />
          </div>
          <div className='product-name-wrapper'>
            <h3>{name}</h3>
            <p>{`(${serves})`}</p>
            <button className='remove-product'>Remove</button>
          </div>
        </div>
        <div className='product-price'>
          <p>
            <span>Price Each:</span>{' '}
            {`${currency}${parseFloat(price / 100, 10).toFixed(2)}`}
          </p>
        </div>
        <div className='product-qty'>
          <div className='product-qty-field'>
            <button className='reduce-qty' onClick={handleReduceQty}>
              -
            </button>
            <input
              type='number'
              min='1'
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <button className='increase-qty' onClick={handleIncreaseQty}>
              +
            </button>
          </div>
        </div>
        <div className='product-total'>
          <p>
            <span>Line Total:</span>{' '}
            {`${currency} ${parseFloat((price * quantity) / 100, 10).toFixed(
              2
            )}`}
          </p>
        </div>
        <button className='remove-product'>Remove</button>
      </div>
    </div>
  );
}
