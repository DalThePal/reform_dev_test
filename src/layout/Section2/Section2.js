import React, {useState, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrow      from '../../assets/images/arrow.svg';
import porsche    from '../../assets/images/car3.png';
import landRover  from '../../assets/images/car4.png';
import mpg        from '../../assets/images/mpg.svg';
import hp         from '../../assets/images/hp.svg';
import acc        from '../../assets/images/acc.svg';

import './Section2.scss';

gsap.registerPlugin(ScrollTrigger);

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

const Section2 = (props) => {
  const [carIndex, setCarIndex] = useState(0);

  const handlePrevClick = () => {
    let prevIndex = carIndex;
    let index     = carIndex;

    if (index <= 0) {
      index = CAR_DATA.length - 1;
    } else {
      index = index - 1;
    }

    setCarIndex(index);
    if (!props.mobile) {
      oldCarAnimation(prevIndex);
      newCarAnimation(index);
    }
  }

  const handleNextClick = () => {
    let prevIndex = carIndex;
    let index     = carIndex;

    if (index >= CAR_DATA.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }

    setCarIndex(index);
    if (!props.mobile) {
      oldCarAnimation(prevIndex);
      newCarAnimation(index);
    }
  }

  const oldCarAnimation = (index) => {
    gsap.to(`.desc-${index}`, {
      duration: 0.5,
      opacity: 0,
      top: '-30px',
    });

    gsap.to(`.image-${index}`, {
      duration: 0.5,
      opacity: 0,
      left: '-200%',
    });
  }

  const newCarAnimation = (index) => {
    gsap.fromTo(`.desc-${index}`, {
      top: '20px'
    },
    {
      top: '0px',
      duration: 0.5,
      opacity: 1,
    });

    gsap.fromTo(`.image-${index}`, {
      left: '100%'
    },
    {
      duration: 0.5,
      opacity: 1,
      left: '20%',
    });
  }

  const arrowAnimation = () => {
    gsap.to('.arrow-container', {
      duration: 0.5,
      opacity: 1,
    });
  }
  
  useEffect(() => {

    if (!props.mobile) {
      gsap.fromTo('#two > .left', {
        width: '0%'
      }, {
        duration: 1,
        width: '40%',
        scrollTrigger: '#two > .left',
        clearProps: "all",
        onComplete: () => {
          newCarAnimation(carIndex);
          arrowAnimation();
        }
      });
    }
  }, [props.mobile]);

  let cars = CAR_DATA.map((item, index) => {
    return (
      <>
        <div className={`car-container car-${index}`} key={index}>
          <div className={`desc desc-${index}`}>
            <h4>{item.make}</h4>
            <span>{item.year} - {item.model}</span>
            <div className="item mpg">
              <img src={mpg}/>
              <p>MPG</p>
              {item.mpg}
            </div>
            <div className="item hp">
              <img src={hp}/>
              <p>HP</p>
              {item.hp}
            </div>
            <div className="item acc">
              <img src={acc}/>
              <p>0-60</p>
              {item.acc}
            </div>
          </div>

          {/* {!props.mobile && <img src={item.image} className={`car-image image-${index}`}/>} */}
        </div>
        <img src={item.image} className={`car-image image-${index}`}/>
      </>
    )
  })

  return (
    <section id="two">
      <div className="left">
        <div className="arrow-container">
          <img className="prev" src={arrow} onClick={handlePrevClick}/>
          <img className="next" src={arrow} onClick={handleNextClick}/>
        </div>

        {props.mobile ? cars[carIndex] : cars}
      </div>

      <div className="right">
        <h2>select a vehicle from your phone.</h2>
        <p>Select from a wide range of luxury vehicles in our inventory. Drive it for a month, trade it the next for something else you have always wanted to&nbsp;own.</p>
      </div>
    </section>
  );
}

export default Section2;
