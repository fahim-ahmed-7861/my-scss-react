import React, { useContext, useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { CategoryContext } from '../Friend/Friend';
import FriendDetails from '../FriendDetails/FriendDetails';


const allproducts = [{ name: 'lenovo', category: 'laptop' }, { name: 'Dell', category: 'laptop' },

{ name: 'Asus', category: 'laptop' }, { name: 'Samsung', category: 'mobile' },
    , { name: 'i phone', category: 'mobile' }, , { name: 'Symphony', category: 'mobile' },
    , { name: 'Nikon', category: 'camera' }, { name: 'Sony', category: 'camera' }, { name: 'Canon', category: 'camera' }]


const Catagories = () => {

    const [category] = useContext(CategoryContext);

    const [products,setProducts]=useState([]);

    useEffect(() => {

        const newProducts=allproducts.filter((product) => product.category.toLowerCase()===category.toLowerCase());

        setProducts(newProducts);



    },[category])

    return (
        <div>
            <h1>catagories : 1: {products.length}</h1>

            { 
            products.map(pd=><CategoryDetails product={pd}></CategoryDetails>)
            }



        </div>
    );
};

export default Catagories;