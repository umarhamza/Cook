import TableRow from "./TableRow";

export default function Table(props) {

  const { currency, itemsInBasket, removeProduct } = props;

  return (
    <div className='table'>
      <div className='table-header'>
        <div className='th-1'>
          <h4>Frozen Meals</h4>
        </div>
        <div className='th-2'>
          <h4>Price Each</h4>
        </div>
        <div className='th-3'>
          <h4>Quantity</h4>
        </div>
        <div className='th-4'>
          <h4>Total</h4>
        </div>
      </div>

      <div className='table-body'>
        {itemsInBasket &&
          itemsInBasket.map((item) => (
            <TableRow
              key={`${item.id}-table`}
              item={item}
              currency={currency}
              updateBasket={props.updateBasket}
              removeProduct={props.removeProduct}
            />
          ))}
      </div>
    </div>
  );
}
