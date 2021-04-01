import { useEffect } from 'react';
import gsap from 'gsap';

import circle from '../../assets/images/circle.svg';
import icon   from '../../assets/images/icon.svg';

import './Loading.scss';

const Loading = (props) => {

  useEffect(() => {
    gsap.to('.circle', {
      duration: 1.5,
      rotation: 160,
      transformOrigin:"51.5% 50%",
      onComplete: () => {
        props.setLoading(false)
      }
    });
    
  }, []);

  return (
    <div className="loading">
      <img src={circle} className="circle"/>
      <img src={icon} className="icon"/>
    </div>
  );
}

export default Loading;
