import React from 'react';

const CategoryDetails = (props) => {

    console.log(props.product);
    return (
        <div>
          <h1>1 : Category : {props.product.category}</h1>
    <p>2 : Item : {props.product.name}</p>
        </div>
    );
};

export default CategoryDetails;