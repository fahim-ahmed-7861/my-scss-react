import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Friend, { CategoryContext } from './Components/Friend/Friend';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {

  const imgStyle = {
    height: '200px',
    width: '200px',
    textAlign: 'center', 
    paddingLeft : '250px'
  }

  const [count,setCount]=useState('Mobile');

  return (
    
    <CategoryContext.Provider value={[count, setCount]}>
      <img style={imgStyle} src='https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE'></img>
    <div className="App">


        <Friend></Friend>

      
      
    </div>

    </CategoryContext.Provider>
  );
}

export default App;
