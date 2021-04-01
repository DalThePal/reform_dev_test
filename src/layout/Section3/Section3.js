import React, {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section3.scss';

import phone  from '../../assets/images/delivery.png';
import car    from '../../assets/images/car3.png';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {

  const carAnimation = () => {
    gsap.to('#three > .right > .car', {
      duration: 0.5,
      opacity: 1,
      left: '-25%'
    })
  }

  const phoneAnimation = () => {
    gsap.to('#three > .right > .phone', {
      duration: 0.5,
      opacity: 1,
      top: '50%'
    })
  }

  const textAnimation = () => {
    gsap.to('#three > .left > p', {
      duration: 0.5,
      top: '0px',
      display: 'block',
    });
  }

  useEffect(() => {
    gsap.to('#three > .left > h1', {
      duration: 0.5,
      top: '0px',
      scrollTrigger: '#three > .right > .car',
      display: 'block',
      onComplete: () => {
        textAnimation();
      }
    });
    gsap.to('#three > .right', {
      duration: 0.5,
      width: '850px',
      scrollTrigger: '#three > .right > .car',
      onComplete: () => {
        carAnimation();
        phoneAnimation();
      }
    })
  }, []);

  return (
    <section id='three'>
      <div className="left">
        <h1>delivered to your door.</h1>
        <p>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your&nbsp;door.</p>
      </div>

      <div className="right">
        <img src={car} className="car"/>
        <img src={phone} className="phone"/>
      </div>
    </section>
  );
}

export default Section3;
