import './Section3.scss';

import phone  from '../../assets/images/delivery.png';

const Section3 = () => {

  return (
    <section id='three'>
      <div className="left">
        <h1>delivered to your door.</h1>
        <p>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your&nbsp;door.</p>
      </div>

      <div className="right">
        <img src={phone} className="phone"/>
      </div>
    </section>
  );
}

export default Section3;
