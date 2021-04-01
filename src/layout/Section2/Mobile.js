import React, {useState} from 'react';

import arrow      from '../../assets/images/arrow.svg';
import porsche    from '../../assets/images/car3.png';
import landRover  from '../../assets/images/car4.png';

import './Section2.scss';

const CAR_DATA = [
  {
    make  : "Land Rover",
    model : "Range Rover Velar",
    year  : "2019",
    mpg   : "19/24",
    hp    : "397",
    acc   : "4.2",
    image : landRover
  },
  {
    make  : "Porsche",
    model : "911 Carrera S",
    year  : "2019",
    mpg   : "19/24",
    hp    : "443",
    acc   : "3.2",
    image : porsche
  }
];

const Section2 = () => {
  const [carIndex, setCarIndex] = useState(0);

  const handlePrevClick = () => {
    let index     = carIndex;

    if (index <= 0) {
      index = CAR_DATA.length - 1;
    } else {
      index = index - 1;
    }

    setCarIndex(index);
  }

  const handleNextClick = () => {
    let index     = carIndex;

    if (index >= CAR_DATA.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }

    setCarIndex(index);
  }

  let cars = CAR_DATA.map((item, index) => {
    return (
      <>
        <div className={`car-container`} key={index}>
          <div className={`desc`}>
            <h4>{item.make}</h4>
            <span>{item.year} - {item.model}</span>
            <p className="item mpg">{item.mpg}</p>
            <p className="item hp">{item.hp}</p>
            <p className="item acc">{item.acc}</p>
          </div>

        </div>
        <img src={item.image} className={`car-image ${item.make}`}/>
      </>
    );
  });

  return (
    <section id="two">

      <div className="right">
        <h1>select a vehicle from your phone.</h1>
        <p>Select from a wide range of luxury vehicles in our inventory. Drive it for a month, trade it the next for something else you have always wanted to&nbsp;own.</p>
      </div>

      <div className="left">

        <div className="arrow-container">
          <img className="prev" src={arrow} onClick={handlePrevClick}/>
          <img className="next" src={arrow} onClick={handleNextClick}/>
        </div>

        {cars[carIndex]}
      </div>

    </section>
  );
}

export default Section2;
