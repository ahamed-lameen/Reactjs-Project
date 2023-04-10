/**
* 
* progressBar.jsx
* @author - Lameen
* @date - 06/04/2023
**/

import './style.css'

function ProgressBar(props) {
    return ( 
        <div className='progress-bar'>
            <div className='range'style={{backgroundColor: props.color, width: props.percentage + '%'}}></div>
        </div> 
    );
}

export default ProgressBar;