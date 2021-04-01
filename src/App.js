import './App.scss';

import Section1 from './layout/Section1';
import Section2 from './layout/Section2';
import Section3 from './layout/Section3';
import Section4 from './layout/Section4';
import Section5 from './layout/Section5';

const App = () => {

  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  );
}

export default App;
