import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section6.scss';

import dude from '../../assets/images/dude.png';
import car  from '../../assets/images/car1_better_resolution.png';
import arrow from '../../assets/images/arrow.svg';

gsap.registerPlugin(ScrollTrigger);

const Section6 = (props) => {

  const dudeAnimation = () => {
    gsap.to('#six > .left > .dude', {
      duration: 0.5,
      opacity: 1,
      left: '50%'
    });
  }

  const carAnimation = () => {
    gsap.to('#six > .left > .car', {
      duration: 0.5,
      opacity: 1,
      left: '25%'
    });
  }

  const textAnimation = () => {
    gsap.to('#six > .right', {
      duration: 0.5,
      opacity: 1,
      top: '0px'
    });
  }

  useEffect(() => {
    if (!props.mobile) {
      gsap.fromTo('#six > .left', {
        width: "0%"
      }, {
        duration: 1,
        width: '50%',
        scrollTrigger: '#six > .left > .dude',
        clearProps: "all",
        onComplete: () => {
          dudeAnimation();
          carAnimation();
          textAnimation();
        }
      });
    }
  }, [props.mobile]);

  return (
    <section id="six">
      <div className="left">
        <img src={dude} className="dude"/>
        <img src={car} className="car"/>
      </div>
      <div className="right">
        <h2>Customers with that new car smell</h2>
        <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
        <span>Alex Bateman, Interface Designer</span>
        <hr/>
        <span className="available">Available On the App <img className="arrow" src={arrow}/></span>
      </div>
    </section>
  );
}

export default Section6;
