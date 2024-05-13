import React, { useState } from 'react';
import "./MenSection.css";
import MenCards from '../MenCards/MenCards';
import { useContext } from 'react';
import MainContext from '../../../../../context/Context';

const MenSection = () => {
  const { data } = useContext(MainContext);
  const [inputVal, setInputVal] = useState("");
  const [priceVal, setPriceVal] = useState("Default");

  return (
    <section className='men__section'>
      <div className='men__section__overlay'></div>
      <div className="container">
        <div className='men__section__heading'>
          <h3>New Released Products for Games</h3>
          <p>Who are in extremely love with eco-friendly system.</p>
        </div>

        <div className='men__section__cards d-flex flex-column gap-5 '>
          <div className="d-flex gap-4">
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="p-2 border-1 rounded-1"
              placeholder="Search for something"
              type="text"
              id="search"
            />
            <select
              value={priceVal}
              onChange={(e) => setPriceVal(e.target.value)}
              className="p-2 border-1 rounded-1"
              name="select"
              id="sort"
            >
              <option value="Default">Default</option>
              <option value="Az">Lowest to Highest Price</option>
              <option value="Cox">Highest to Lowest Price</option>
            </select>
          </div>
          <MenCards items={data} inputVal={inputVal} priceVal={priceVal} />
        </div>

      </div>
    </section>
  );
};

export default MenSection;