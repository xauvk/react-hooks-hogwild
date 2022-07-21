import React from 'react';

const Filter = (props) => {
    function onClicked (e) {
        props.handlerChange(e.target.value)
    }
  
    return (
       <select onChange={onClicked}>
            <option value='All'>All</option>
            <option value='Greased'>Greased</option>
            <option value='Name'>Name</option>
            <option value='Weight'>Weight</option>
       </select>
    )
};

export default Filter;
