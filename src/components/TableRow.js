import {useEffect, useState} from 'react';

export default function TableRow(props) {
  const { currency, item, updateBasket, removeProduct } = props;
  const [product, setProduct] = useState({...item});

  useEffect(() => {
    updateBasket(product);
  }, [product]);

  const handleIncreaseQty = e => {
      const quantity = product.quantity + 1;
      const total = product.price * quantity;
      setProduct({ ...product, quantity, total });
  };
  
  const handleReduceQty = e => {
    const quantity = product.quantity - 1;
    const total = product.price * quantity;
    if (quantity > 0) {
      setProduct({ ...product, quantity, total });
    } else {
      removeProduct(item.id);
    }
  };

  return (
    <div className='tr'>
      <div className='tr-image'>
        <img src={item.image} alt={`Photo of ${item.name}`} />
      </div>
      <div className='tr-content'>
        <div className='product-name'>
          <div className='tr-image tr-image-desktop'>
            <img src={item.image} alt={`Photo of ${item.name}`} />
          </div>
          <div className='product-name-wrapper'>
            <h3>{item.name}</h3>
            <p>{`(${item.serves})`}</p>
            <button
              className='remove-product'
              onClick={() => {removeProduct(item.id);}}
            >
              Remove
            </button>
          </div>
        </div>
        <div className='product-price'>
          <p>
            <span>Price Each:</span>{' '}
            {`${currency}${parseFloat(item.price / 100, 10).toFixed(2)}`}
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
              value={product.quantity}
              // readOnly style={{ pointerEvents: 'none' }}
              onChange={(e) => {
                parseInt(e.target.value) > 0 &&
                  setProduct({
                    ...product,
                    quantity: parseInt(e.target.value),
                  });
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
            {`${currency} ${parseFloat(
              (item.price * product.quantity) / 100,
              10
            ).toFixed(2)}`}
          </p>
        </div>
        <button
          className='remove-product'
          onClick={() => {removeProduct(item.id);}}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
