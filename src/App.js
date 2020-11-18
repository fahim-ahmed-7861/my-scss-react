import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Friend, { CategoryContext } from './Components/Friend/Friend';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {

  const [count,setCount]=useState('Mobile');

  return (
    
    <CategoryContext.Provider value={[count, setCount]}>
    <div className="App">


        <Friend></Friend>

      
      
    </div>

    </CategoryContext.Provider>
  );
}

export default App;
