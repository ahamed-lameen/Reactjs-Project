/**
* 
* metricWidget.jsx
* @author - Lameen
* @date - 05/04/2023
**/

import './style.css'

function MetricWidget(props) {
    return ( 
            <div className='row dashboard-box'>
                <div className='cell-1'>
                    <h2 className='metric-title'>{props.title}</h2>
                    <p className='metric-subtitle'>{props.subTitle}</p>
                </div>
                <div className='cell-w44 progress-img-box'>
                    {props.img}
                </div>
            </div>
    );
}

export default MetricWidget;