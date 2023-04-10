/**
* 
* title.jsx
* @author - Lameen
* @date - 02/04/2023
**/

import './style.css'

function Title(props) {
    return ( 
        <h2 className='inspection-title'>{props.title}</h2>
    );
}

export default Title;