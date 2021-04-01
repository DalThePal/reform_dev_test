import './Section4.scss';

import car from '../../assets/images/car5.png';
import phone from '../../assets/images/section4_phone.png'

const Section4 = () => {

  return (
    <section id="four">

      <div className="right">
        <h1>trade in your car every month.</h1>
        <p>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new &nbsp;car!</p>
      </div>

      <div className="left">
        <img src={car} className="car"/>
        <img src={phone} className="phone"/>
      </div>
     
    </section>
  );
}

export default Section4;
