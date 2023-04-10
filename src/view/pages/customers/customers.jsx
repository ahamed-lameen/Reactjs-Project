/**
* 
* customers.jsx
* @author - Lameen
* @date - 30/03/2023
**/

import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TableFilter from '../../components/tableFilter/tableFilter';
import Title from '../../components/title/title';
import data from './data.json';
import './style.css'

function Customers() {
    const navigate = useNavigate();
    const goToCreateNewCustomerPage = (selectedCustomer) => {
        navigate("/createNewCustomer", {state: selectedCustomer});
    }

    return ( 
    <div className='box'>
        <div className='row calender-box'>
            <div className='cell-1 title-box'>
                <Title title="CUSTOMERS" />
            </div>
            <div className='cell-2 mb-14'>
                <TableFilter /> 
            </div>
            <div className='cell-2 button-box'>
                <Button label={"Create a new customer"} isPrimary={true} handleClick={() => goToCreateNewCustomerPage({})}  />
            </div>
        </div>
        <div className='row table-title'>
            <div className='cell-w285 title ml-20'>NAME & ID</div>
            <div className='cell-w157 title'>COMPANY NAME</div>
            <div className='cell-w250 title'>BILLING ADDRESS</div>
            <div className='cell-w136 title'>EMAIL</div>
            <div className='cell-w143 title'>CELL PHONE</div>
            <div className='cell-w75 title'>ACTION</div>
        </div>
        <div className='data-container'>
            {data.map((value) => (
                <div className='row layout-box'>
                    <div className='cell-w285 ml-20'>
                        <div>{value.firstName} {value.lastName}</div>
                        <div className='customer-detail'>{value.customerID}</div>
                    </div>
                    <div className='cell-w157'>
                        <div>{value.companyName}</div>
                    </div>
                    <div className='cell-w250'>
                    <div className='cell-w170'>
                        {value.billingAddress}
                    </div>
                    </div>
                    <div className='cell-w136'>{value.email}</div>
                    <div className='cell-w143'>
                        {value.cellPhone}
                    </div>
                    <div className='editing-icon'><i class="fa-solid fa-pen" onClick={() => goToCreateNewCustomerPage(value)} ></i> <i class="delete-icon fa-solid fa-trash"></i></div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Customers;