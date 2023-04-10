/**
* 
* reports.jsx
* @author - Lameen
* @date - 30/03/2023
**/

import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TableFilter from '../../components/tableFilter/tableFilter';
import Title from '../../components/title/title';
import data from './data.json';
import './style.css'

function Reports() {
    const navigate = useNavigate();
    const goToInspectionPage = () => {
        navigate("/inspection");
    }

    return ( 
    <div className='box'>
        <div className='row calender-box'>
            <div className='cell-1 title-box'>
                <Title title="REPORTS" />
            </div>
            <div className='cell-2'>
                <TableFilter  calender={true}/>
            </div>
            <div className='cell-2 button-container'>
                <Button label={"Inspector"}  handleClick={() => goToInspectionPage()} />
            </div>
            <div className='cell-2 button-container'>
                <Button label={"Sales person"} />
            </div>
            <div className='cell-2 button-container'>
                <Button label={"Type of inspection"} />
            </div>
        </div>
        <div className='row table-title'>
            <div className='cell-w157 workorder-title title'>WORKORDER #</div>
            <div className='cell-w285 customer-name-title title'>CUSTOMER NAME & CUSTOMER ID/EMAIL</div>
            <div className='cell-w130 salesperson-title title'>SALESPERSON</div>
            <div className='cell-w136 serivice-type-title title'>INSPECTOR</div>
            <div className='cell-w143 supervisor-title title'>SUPERVISOR</div>
            <div className='cell-w180 serivice-type-title title'>SERVICE TYPE</div>
            <div className='cell-w200 date-title title'>COMPLETED DATE & TIME</div>
            <div className='cell-w75 title'>ACTION</div>
        </div>
        <div className='data-container'>
            {data.map((value) => (
                <div className='row layout-box'>
                    <div className='cell-w133 workorder-box'>
                        {value.workOrder}
                    </div>
                    <div className='cell-w230'>
                        <div>{value.customerName}</div>
                        <div className='customer-detail'>{value.customerID}</div>
                    </div>
                    <div className='cell-w107'>
                        {value.salesPerson}
                    </div>
                    <div className='cell-w111'>{value.inspector}</div>
                    <div className='cell-w120'>
                        {value.supervisorName}
                    </div>
                    <div className='cell-w150'>{value.serviceType}</div>
                    <div className='cell-w130'>
                        <div>{value.serviceDate}</div>
                        <div>{value.serviceTime}</div>
                    </div>
                    <div className='download-icon'><i class="fa-solid fa-download"></i></div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Reports;