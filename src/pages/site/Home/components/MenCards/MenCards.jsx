
import React, { useState, useEffect } from 'react';
import MenCardsItem from '../MenCardsItem/MenCardsItem';
import axios from 'axios';

const MenCards = ({ items, inputVal, priceVal }) => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    let isMounted = true;

    axios.get("http://localhost:3000/games").then((response) => {
      if (!isMounted) return; 
      
      let result = response.data;

      if (inputVal.trim() !== "") {
        result = result.filter(data =>
          data.title.toLowerCase().includes(inputVal.trim().toLowerCase())
        );
      }

      if (priceVal === "Az") {
        result.sort((a, b) => a.price - b.price);
      } else if (priceVal === "Cox") {
        result.sort((a, b) => b.price - a.price);
      }

      setSearch(result);
    }).catch(error => {
      console.error("Error fetching data:", error);
    });

    return () => {
      isMounted = false; 
    };
  }, [inputVal, priceVal]);

  return (
    <div className='d-flex gap-5'>
      {search.map((item, index) => (
        <MenCardsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenCards;
