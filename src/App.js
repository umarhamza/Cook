
import {useEffect, useState} from 'react';
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";

import mockAPI from './api/mockAPI.json';
import "./index.scss";

export default function App() {
  const [itemsInBasket, setItemsInBasket] = useState([]);
  let basket = null;

  useEffect(() => {
    basket = JSON.parse(localStorage.getItem('basket'));
      if (!basket) {
        basket = mockAPI.items.filter((item) => parseInt(item.id) <= 3).map((item) => {return {...item, quantity: 1}});
        localStorage.setItem('basket', JSON.stringify(basket));
        setItemsInBasket(basket);
      } else {
        setItemsInBasket(basket);
      }
      
  }, [basket]);

  console.log(itemsInBasket);

  return (
    <div className='container'>
      <div className='row'>
        <div className='table-col col col-8'>
          <Table basket={itemsInBasket} currency={mockAPI.currency} />
          <Carousel product={mockAPI.items} />
        </div>
        <div className='sidebar-col col col-4'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
