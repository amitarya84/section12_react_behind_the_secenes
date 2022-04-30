import React from 'react';
import Myparagraph from './MyParagraph';

const Demooutput = (props) => {
    console.log('Demo output running!')
    return <Myparagraph>{props.show ? 'This is new' : ''}</Myparagraph>
}

export default React.memo(Demooutput);
