import React from 'react';
import "./MenCardsItem.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const MenCardsItem = ({ item }) => {
  const [basket, setBasket] = useState(
    localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
  );

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addBasket = (id) => {
    const findBasketItem = basket.find((e) => e.id === id);
    if (findBasketItem) {
     
      const updatedBasket = basket.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              totalPrice: parseFloat(item.totalPrice) + parseFloat(item.price),
            }
          : item
      );
      setBasket(updatedBasket);
    } else {
     
      const newBasketItem = {
        ...item,
        count: 1,
        totalPrice: parseFloat(item.price),
      };
      setBasket([...basket, newBasketItem]);
    }
  };

  const truncatedTitle = item.title.split(' ').slice(0, 4).join(' ');

  return (
    <div className='men__section__card'>
      <img width={"255px"} height={"300px"} src={item.image} alt="" />
      <h3 style={{ marginTop: "14px" }}>{truncatedTitle}{item.title.split(' ').length > 4 ? '...' : ''}</h3>
      <h5 style={{ marginTop: "14px" }}>${item.price}</h5>
      <div className='men__section__btns d-flex gap-3 mt-3'>
        <button style={{width:"80px"}} className='btn btn-primary p-2 '><Link to={`/details/${item.id}`}>Detail</Link></button>
        <button onClick={() => addBasket(item.id)} style={{width:"100px"}} className='btn btn-danger p-2'>Add</button>
      </div>
    </div>
  );
};

export default MenCardsItem;