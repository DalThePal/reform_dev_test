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
  let mobile = window.innerWidth < 1024 ? true : false;

  if (loading) {
    return (
      <Loading setLoading={setLoading}/>
    )
  } else {
    return (
      <div className="App">
        <Section1 mobile={mobile}/>
        <Section2 mobile={mobile}/>
        <Section3 mobile={mobile}/>
        <Section4 mobile={mobile}/>
        <Section5 mobile={mobile}/>
        <Section6 mobile={mobile}/>
        <Footer mobile={mobile}/>
      </div>
    );
  }
}

export default App;
