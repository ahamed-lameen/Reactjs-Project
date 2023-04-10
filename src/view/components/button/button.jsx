/**
* 
* button.jsx
* @author - Lameen
* @date - 05/04/2023
**/

import './style.css'

function Button(props) {
    return ( 
        <button className={ props.isPrimary ? 'primary-button' : 'secondary-button' } onClick={props.handleClick}>{props.label}{}</button>
    );
}

export default Button;