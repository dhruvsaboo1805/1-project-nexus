import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
// import Signup from './components/Signup'; // Import the Signup component

function App() {
  // const [activeComponent, setActiveComponent] = useState('login');

  // const handleSwitchComponent = (component) => {
  //   setActiveComponent(component);
  // };

  return (
    <div>
      {/* Conditionally render either Login or Signup component based on activeComponent state
      {activeComponent === 'login' ? (
        <Login onSwitchComponent={() => handleSwitchComponent('signup')} />
      ) : (
        <Signup onSwitchComponent={() => handleSwitchComponent('login')} />
      )} */}
      <Login></Login>
    </div>
  );
}

export default App;
