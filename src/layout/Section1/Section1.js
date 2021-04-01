import React, {useEffect} from 'react';
import {isMobile} from 'react-device-detect';
import gsap from 'gsap';

import logo from '../../assets/images/logo_white.svg';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';
import car3 from '../../assets/images/car3.png';
import arrow from '../../assets/images/arrow.svg';

import './Section1.scss';

const Section1 = (props) => {

  useEffect(() => {
    if (!props.mobile) {
      backgroundAnimation();
      carAnimation();
    }
  }, []);

  const backgroundAnimation = () => {
    gsap.to('#one', {
      duration: 0.5,
      width: '100%',
      onComplete: () => {
        phoneAnimation();
        textAnimation();
      }
    });
  }

  const phoneAnimation = () => {
    gsap.to('#one > .phone', {
      duration: 0.5,
      opacity: 1,
      right: '135px'
    });
  }

  const textAnimation = () => {
    gsap.to('#one > .left > .text', {
      duration: 0.5,
      opacity: 1,
      top: '100px'
    });
  }

  const carAnimation = () => {
    gsap.to('#one > .left > .car-container', {
      duration: 0.5,
      left: '0px'
    });
  }

  if (props.mobile) {
    return (
      <section id="one">
        <img className="logo" src={logo}/>
        <div className="text">
          <h1>drive a new car every month.</h1>
          <span>Available On the App <img src={arrow}/></span>
        </div>
        <div className="car-container">
          <img className="car car2" src={car2}/>
          <img className="car car3" src={car3}/>
          <img className="car car1" src={car1}/>
        </div>
      </section>
    )
  } else {
    return (
      <section id="one">
        <div className="left">
          <img className="logo" src={logo}/>
          <div className="text">
            <h1>drive a new car every month.</h1>
            <span>Available On the App <img src={arrow}/></span>
          </div>
          <div className="car-container">
            <img className="car car2" src={car2}/>
            <img className="car car3" src={car3}/>
            <img className="car car1" src={car1}/>
          </div>
        </div>
        <div className="phone"/>
      </section>
    );
  }
}

export default Section1;
