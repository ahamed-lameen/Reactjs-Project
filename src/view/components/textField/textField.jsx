/**
* 
* textField.jsx
* @author - Lameen
* @date - 08/04/2023
**/

import './style.css'

function TextField(props) {
    return ( 
        <div className='field-set'>
            <input type='text' className='text-field' size={props.size} value={props.initialValue} placeholder={props.placeholder} onChange={props.handleChange} />
            <p className='field-label'>{props.label}</p>
        </div>
    );
}

export default TextField;