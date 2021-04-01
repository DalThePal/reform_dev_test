import {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section5.scss';

import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';

gsap.registerPlugin(ScrollTrigger);

const CARD_DATA = [
  {
    title: "SIMPLE MONTHLY PRICING",
    text: "Pick your plan, pay the monthly price. Thats it. No hidden fees!",
    image: icon2
  },
  {
    title: 'VEHICLE INSURANCE INCLUDED',
    text: 'That’s right, you’re covered.  All Eleanor plans include insurance coverage.',
    image: icon1
  },
  {
    title: 'MAINTENANCE IS COVERED',
    text: 'Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.',
    image: icon3
  }
]

const Section5 = (props) => {

  const cardAnimation = (index) => {
    gsap.to(`.card-${index}`, {
      duration: 1,
      opacity: 1,
      top: '0px',
      onComplete: () => {
        index = index + 1;

        if (index < CARD_DATA.length) {
          cardAnimation(index);
        }
      }
    });
  }

  useEffect(() => {
    if (!props.mobile) {
      gsap.to('.card-0', {
        duration: 1,
        opacity: 1,
        top: '0px',
        scrollTrigger: '.card-0',
        onComplete: () => {
          cardAnimation(1);
        }
      });
    }
  });

  let cards = CARD_DATA.map((item, index) => {
    return (
      <div className={`card card-${index}`}>
        <img src={item.image} />
        <h6>{item.title}</h6>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <section id="five">
      {cards}
    </section>
  );
}

export default Section5;
