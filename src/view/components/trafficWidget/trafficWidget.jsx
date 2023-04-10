/**
* 
* trafficWidget.jsx
* @author - Lameen
* @date - 06/04/2023
**/

import './style.css'

function TrafficWidget(props) {
    return ( 
        <div className='cell-1 traffic-box'  style={{borderTopColor: props.color}}>
            <h2 className='traffic-title'>{props.trafficTitle}</h2>
            <p className='traffic-subtitle'>{props.trafficSubtitle}</p>
        </div>
    );
}

export default TrafficWidget;