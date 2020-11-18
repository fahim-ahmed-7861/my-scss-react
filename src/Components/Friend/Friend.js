import React, { createContext, useContext, useState } from 'react';
import Catagories from '../Catagories/Catagories';
import FriendDetails from '../FriendDetails/FriendDetails';

export const CategoryContext = createContext();
const Friend = () => {

    const [count,setCount]=useContext(CategoryContext);
    


    return (
      
            <div>
                <h1>Count : {count}</h1>
                <button onClick={() => setCount(count + 1)}>Add Button</button>
                <Catagories></Catagories>
                <FriendDetails></FriendDetails>
            </div>  

      
    );
};

export default Friend;