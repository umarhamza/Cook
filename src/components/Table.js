export default function Table() {
  return (
    <div className="table">
      <div className="table-header">
        <div className="th-1">
          <h4>Frozen Meals</h4>
        </div>
        <div className="th-2">
          <h4>Price Each</h4>
        </div>
        <div className="th-3">
          <h4>Quantity</h4>
        </div>
        <div className="th-4">
          <h4>Total</h4>
        </div>
      </div>

      <div className="table-body">
        <div className="tr">
          <div className="tr-image">
            <img src="/images/lasagne.jpg" alt="" />
          </div>
          <div className="tr-content">
            <div className="product-name">
              <div className="tr-image tr-image-desktop">
                <img src="/images/lasagne.jpg" alt="" />
              </div>
              <div className="product-name-wrapper">
                <h3>Lasagne Al Forno</h3>
                <p>(Serves 4)</p>
                <button className="remove-product">Remove</button>
              </div>
            </div>
            <div className="product-price">
              <p>
                <span>Price Each:</span> £15.50
              </p>
            </div>
            <div className="product-qty">
              <div className="product-qty-field">
                <button className="reduce-qty">-</button>
                <input type="number" defaultValue="1" min="1" />
                <button className="increase-qty">+</button>
              </div>
            </div>
            <div className="product-total">
              <p>
                <span>Line Total:</span> £15.50
              </p>
            </div>
            <button className="remove-product">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
