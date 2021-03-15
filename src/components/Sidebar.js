import infoIcon from "../img/info-icon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h4>Summary</h4>
      <hr />

      <form>
        <h5>Do you have a promo code?</h5>
        <label>
          <input type="text" placeholder="Enter promo code" />
          <button onClick={(e) => e.preventDefault()} type="submit">
            Apply
          </button>
        </label>
      </form>

      <hr />

      <dl className="subtotal">
        <dt>
          <h4>Subtotal</h4>
        </dt>
        <dd>£26.49</dd>
      </dl>

      <dl className="shipping-tax">
        <dt>Shipping</dt>
        <dd>TBD</dd>
        <dt className="sales-tax">
          <span>
            Sales Tax
            <a href="#!">
              <img src={infoIcon} alt="info icon" />
            </a>
          </span>
        </dt>
        <dd>£5.29</dd>
      </dl>

      <hr />

      <dl className="estimated-total">
        <dt>
          <h4>Estimated Total</h4>
        </dt>
        <dd>£31.78</dd>
      </dl>

      <hr />

      <button className="proceed-to-checkout">Proceed to Checkout</button>

      <p className="delivery-note">
        Based on delivery from COOK West Dulwich to SE24 9BW (
        <a href="#!">change</a>)
      </p>

      <a href="#!" className="switch-to-collect">
        Get it sooner! Switch to contact-free Click & Collect from COOK West
        Dulwich for FREE!
      </a>

      <hr />

      <p className="call-for-help">
        Need help? Call us on: <a href="tel:01732 759000">01732 759000</a>
      </p>
    </div>
  );
}
