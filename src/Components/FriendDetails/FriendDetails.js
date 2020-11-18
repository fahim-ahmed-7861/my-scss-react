import React, { useContext } from 'react';
import { CategoryContext } from '../Friend/Friend';

const FriendDetails = () => {
    const [count,setCount]=useContext(CategoryContext);


    return (
        <div>
            <h2>friends_details : {count}</h2>

            <button onClick={() => setCount('Laptop')}>Laptop</button>
            <button onClick={() => setCount('Camera')}>Camera</button>
            <button onClick={() => setCount('Mobile')}>Mobile</button>
        
          
        </div>
    );
};

export default FriendDetails;