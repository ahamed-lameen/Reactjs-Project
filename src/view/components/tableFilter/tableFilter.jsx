/**
* 
* tableFilter.jsx
* @author - Lameen
* @date - 02/04/2023
**/

import './style.css'

function TableFilter(props) {
    return ( 
        <>
            <div className='row'>
                {props.calender && (<div className='day-box'>
                    <div className='label-day'>Day</div>
                </div>)}
                {props.calender && (<div className='label-calender'>Week</div>)}
                {props.calender && (<div className='label-calender'>Month</div>)}
                {props.calender && (<div className='icon-box'>
                    <i class="calender-icon fa-regular fa-calendar"></i>
                </div>)}
                <div className='icon-box'>
                    <i class="calender-icon fa-solid fa-magnifying-glass"></i>
                </div>
                {props.showStatus && (<div className='status-box'>
                    <div className='label-status'>Status: all</div>
                </div>
                )}
                {props.showInspector && (<div className='status-report mr-20'>
                    <div className='label-status'>Inspector</div>
                </div>
                )}
                {props.showSalesPerson && (<div className='status-report mr-20'>
                    <div className='label-status'>Sales person</div>
                </div>
                )}
                {props.showInspectionType && (<div className='status-report'>
                    <div className='label-status'>Type of inspection</div>
                </div>
                )} 
            </div>
        </>
    );
}

export default TableFilter;