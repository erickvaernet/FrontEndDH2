import React from 'react';
import './App.css';
import PropsVsState from './components/PropsVsState';


function App() {
  
  return (
    <React.Fragment>
      <PropsVsState s={2}/>
    </React.Fragment>
  );
}

export default App;
