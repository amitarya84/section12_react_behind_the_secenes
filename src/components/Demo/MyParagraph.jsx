import React from 'react';

const Myparagraph = (props) => {
    console.log('My paragraph Running')
    return (
        <p>
            {props.children}
        </p>
    );
}

export default Myparagraph;
