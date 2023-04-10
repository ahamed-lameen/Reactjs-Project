/**
* 
* trafficCount.jsx
* @author - Lameen
* @date - 06/04/2023
**/

import './style.css'

function TrafficCount(props) {
    return ( 
        <>
            <div className='row-fixed'>
                <div className='point' style={{backgroundColor: props.color}}></div>
                <div className='traffic-info'>{props.subTitle}</div>
            </div>
            <h4 className='traffic-count'>{props.title}</h4>
        </>
    );
}

export default TrafficCount;