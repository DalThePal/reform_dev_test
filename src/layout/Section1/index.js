import {isMobile} from 'react-device-detect';
import Section1 from './Desktop';
import Mobile   from './Mobile';

export default isMobile ? Mobile : Section1;
