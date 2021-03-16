import {useState} from 'react';
import infoIcon from "../img/info-icon.svg";

export default function Sidebar(props) {
  const {
    basket: {
      subtotal,
      total,
      currency
    }
  } = props;

  // Convert tax to decimal
  const tax = parseInt(subtotal * (props.basket.tax / 100));

  const [state, setState] = useState({showToolTip: false});

  return (
    <div className='sidebar'>
      <h4>Summary</h4>
      <hr />

      <form>
        <h5>Do you have a promo code?</h5>
        <label>
          <input type='text' placeholder='Enter promo code' />
          <button onClick={(e) => e.preventDefault()} type='submit'>
            Apply
          </button>
        </label>
      </form>

      <hr />

      <dl className='subtotal'>
        <dt>
          <h4>Subtotal</h4>
        </dt>
        <dd>{`${currency}${parseFloat(subtotal / 100, 10).toFixed(2)}`}</dd>
      </dl>

      <dl className='shipping-tax'>
        <dt>Shipping</dt>
        <dd>TBD</dd>
        <dt className='sales-tax'>
          <span>
            Sales Tax
            <a
              className='tooltip-wrapper'
              href='#!'
              onClick={(e) => {
                setState({ ...state, showToolTip: !state.showToolTip });
              }}
            >
              <img src={infoIcon} alt='info icon' />
              <div
                className={
                  state.showToolTip ? 'active tooltip' : 'tooltip'
                }
              >
                Sales Tax is 20%
              </div>
            </a>
          </span>
        </dt>
        <dd>{`${currency}${parseFloat(tax / 100, 10).toFixed(2)}`}</dd>
      </dl>

      <hr />

      <dl className='estimated-total'>
        <dt>
          <h4>Estimated Total</h4>
        </dt>
        <dd>{`${currency}${parseFloat(total / 100, 10).toFixed(2)}`}</dd>
      </dl>

      <hr />

      <button className='proceed-to-checkout'>Proceed to Checkout</button>

      <p className='delivery-note'>
        Based on delivery from COOK West Dulwich to SE24 9BW (
        <a href='#!'>change</a>)
      </p>

      <a href='#!' className='switch-to-collect'>
        Get it sooner! Switch to contact-free Click & Collect from COOK West
        Dulwich for FREE!
      </a>

      <hr />

      <p className='call-for-help'>
        Need help? Call us on: <a href='tel:01732 759000'>01732 759000</a>
      </p>
    </div>
  );
}
