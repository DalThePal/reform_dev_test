import logo from '../../assets/images/logo_white.png';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2_uncut.png';
import car3 from '../../assets/images/car3.png';

import './Section1.scss';

const Section1 = () => {
  return (
    <section id="one">
      <img className="logo" src={logo}/>
      <div className="text">
        <h1>drive a new car every month.</h1>
        <span>Available On the App</span>
      </div>
      <div className="car-container">
        <img className="car car2" src={car2}/>
        <img className="car car3" src={car3}/>
        <img className="car car1" src={car1}/>
      </div>
    </section>
  )
}

export default Section1;
