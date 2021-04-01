import {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section4.scss';

import car from '../../assets/images/car5.png';
import phone from '../../assets/images/section4_phone.png'

gsap.registerPlugin(ScrollTrigger);

const Section4 = (props) => {

  const phoneAnimation = () => {
    gsap.to('#four > .left > .phone', {
      duration: 0.5,
      opacity: 1,
      top: '50%'
    });
  }

  const h2Animation = () => {
    gsap.to('#four > .right > h2', {
      duration: 0.5,
      top: '0px',
      opacity: 1,
      onComplete: () => {
        textAnimation();
      }
    })
  }

  const textAnimation = () => {
    gsap.to('#four > .right > p', {
      duration: 0.5,
      top: '0px',
      opacity: 1,
    });
  }

  useEffect(() => {
    if (!props.mobile) {
      gsap.fromTo('#four > .left', {
        width: '0%'
      }, {
        duration: 1,
        width: '40%',
        scrollTrigger: '#four > .left > .phone',
        clearProps: "all",
        onComplete: () => {
          phoneAnimation();
          h2Animation();
        }
      });
    }
  }, [props.mobile]);

  return (
    <section id="four">
      <div className="left">
        <img src={car} className="car"/>
        <img src={phone} className="phone"/>
      </div>
      <div className="right">
        <h2>trade in your car every&nbsp;month.</h2>
        <p>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new&nbsp;car!</p>
      </div>
    </section>
  );
}

export default Section4;
