import './Footer.scss';

import logo from '../../assets/images/logo_black.svg';

const Footer = () => {
  return (
    <footer>
        <img className="logo" src={logo}/>

        <div>
          <a>About Us</a>
          <a>Terms of Use</a>
          <a>FAQ</a>
        </div>
    </footer>
  );
}

export default Footer;
