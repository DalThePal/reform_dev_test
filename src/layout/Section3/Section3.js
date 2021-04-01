import React, {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section3.scss';

import phone  from '../../assets/images/delivery.png';
import car    from '../../assets/images/car3.png';

gsap.registerPlugin(ScrollTrigger);

const Section3 = (props) => {

  const carAnimation = () => {
    gsap.to('#three > .right > .car', {
      duration: 0.5,
      opacity: 1,
      left: '-40%'
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
    if (!props.mobile) {
      gsap.to('#three > .left > h2', {
        duration: 1,
        top: '0px',
        scrollTrigger: '#three > .left > h2',
        display: 'block',
        onComplete: () => {
          textAnimation();
        }
      });
      gsap.to('#three > .right', {
        duration: 1,
        width: '60%',
        scrollTrigger: '#three > .left > h2',
        onComplete: () => {
          carAnimation();
          phoneAnimation();
        }
      })
    }
  }, [props.mobile]);

  return (
    <section id='three'>
      <div className="left">
        <h2>delivered to your&nbsp;door.</h2>
        <p>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your&nbsp;door.</p>
      </div>

      <div className="right">
        {!props.mobile && <img src={car} className="car"/>}
        <img src={phone} className="phone"/>
      </div>
    </section>
  );
}

export default Section3;
