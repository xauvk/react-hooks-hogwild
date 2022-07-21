import React from 'react';

const Filter = ({handlerChange}) => {
   

    return (
       <div>
            <div>Greased Pigs
                <input type='checkbox' name='greased' value='greased' onClick={handlerChange} />
            </div>
       </div>
    )
};

export default Filter;
