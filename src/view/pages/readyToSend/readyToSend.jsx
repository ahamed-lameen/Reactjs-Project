/**
* 
* readyToSend.jsx
* @author - Lameen
* @date - 30/03/2023
**/

import TableFilter from '../../components/tableFilter/tableFilter';
import Title from '../../components/title/title';
import data from './data.json';
import './style.css'


function ReadyToSend() {
    return ( 
        <div className='box'>
        <div className='row calender-box'>
            <div className='cell-1 title-box'>
                <Title title="READY TO SEND" />
            </div>
            <div className='cell-2'>
                <TableFilter showStatus={true} calender={true} />
            </div>
        </div>
        <div className='row table-title'>
            <div className='cell-w157 workorder-title title'>WORKORDER #</div>
            <div className='cell-w225 customer-name-title title'>CUSTOMER NAME & CUSTOMER ID/EMAIL</div>
            <div className='cell-w203 address-title title'>ADDRESS</div>
            <div className='cell-w180 serivice-type-title title'>SERVICE TYPE</div>
            <div className='cell-w141 inspector-title title'>INSPECTOR</div>
            <div className='cell-w154 action-title title'>ACTION</div>
        </div>
        <div className='data-container'>
            {data.map((value) => (
                <div className='row layout-container'>
                    <div className='cell-w157 workorder-box'>
                        <div><i class="file-icon fa-regular fa-file"></i></div> 
                        <div className='label-ID'>{value.workOrder}</div>
                    </div>
                    <div className='cell-w225'>
                        <div>{value.customerName}</div>
                        <div className='customer-detail'>{value.customerID}</div>
                    </div>
                    <div className='cell-w203'>
                        <div>{value.address}</div>
                        <div className='customer-detail'>{value.city}</div>
                    </div>
                    <div className='cell-w180'>{value.serviceType}</div>
                    <div className='cell-w160'>{value.inspector}</div>
                    <div className='cell-w66 action-box'>
                        <div className='label-action'>{value.action}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default ReadyToSend;