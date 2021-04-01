import { useState } from 'react';

import './App.scss';

import Loading  from './layout/Loading';
import Section1 from './layout/Section1';
import Section2 from './layout/Section2';
import Section3 from './layout/Section3';
import Section4 from './layout/Section4';
import Section5 from './layout/Section5';
import Section6 from './layout/Section6';
import Footer   from './layout/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loading setLoading={setLoading}/>
    )
  }
  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  );
}

export default App;
