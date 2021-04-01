import './Section6.scss';

import dude from '../../assets/images/dude.png';

const Section6 = () => {

  return (
    <section id="six">
      <div className="right">
        <h1>Customers with that new car smell</h1>
        <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
        <span>Alex Bateman, Interface Designer</span>
        <hr/>
        <span className="available">Available On the App</span>
      </div>

      <div className="left">
        <img src={dude} className="dude"/>
      </div>
      
    </section>
  );
}

export default Section6;
