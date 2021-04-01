import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section6.scss';

import dude from '../../assets/images/dude.png';
import car  from '../../assets/images/car1_better_resolution.png';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {

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
    gsap.to('#six > .left', {
      duration: 0.5,
      width: '637px',
      scrollTrigger: '#six > .left',
      onComplete: () => {
        dudeAnimation();
        carAnimation();
        textAnimation();
      }
    });
  }, []);

  return (
    <section id="six">
      <div className="left">
        <img src={dude} className="dude"/>
        <img src={car} className="car"/>
      </div>
      <div className="right">
        <h1>Customers with that new car smell</h1>
        <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
        <span>Alex Bateman, Interface Designer</span>
        <hr/>
        <span className="available">Available On the App</span>
      </div>
    </section>
  );
}

export default Section6;
