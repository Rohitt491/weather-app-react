import React from 'react'
import Choosestate from './Choosestate.jsx'
import Weakinfocard from './Weakinfocard.jsx';
import Humid from './Humid.jsx';
import Leftside from './Leftside.jsx';
function Home() {
  return (
    <div className='homeWrap'>
      <div className="weatherSection">
          <Leftside/>
        <div className="rightSide">
          <Choosestate /> 
          <Weakinfocard />
          <Humid />
        </div>
      </div>
    </div>
  );
}
export default Home;