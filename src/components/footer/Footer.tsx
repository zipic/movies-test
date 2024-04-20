import { Link } from 'react-router-dom';
import './style.scss';

export const Footer = () => {
  return(
    <div className='footer'>
      <Link
        className='footer__link' 
        to="https://www.linkedin.com/in/oleksandr-zaporozhets/"
      >
        Design by Oleksandr Zaporozhets
      </Link>
    </div>
  );
}

export default Footer;