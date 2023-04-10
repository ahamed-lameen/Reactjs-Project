/**
* 
* title.jsx
* @author - Lameen
* @date - 02/04/2023
**/

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/button/button';
import TextField from '../../components/textField/textField';
import Title from '../../components/title/title';
import './style.css'

function CreateNewCustomer() {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);

    const [customer, setCustomer] = useState({
        companyName: state.companyName || '',
        billingAddress: state.billingAddress || '',
        firstName: state.firstName || '', 
        lastName: state.lastName || '', 
        jobTitle: state.jobTitle || '', 
        email: state.email || '', 
        cellPhone: state.cellPhone || ''
    });

    const backToCreateNewCustomerPage = () => {
    navigate("/customers");
    }

    function createCustomerSubmit() {
        const url = `https://anyapi.io/api/v1/apiKey=okjq76r5fg84ni7unasio824u3rovv4a8f9k317b0q28ovcnam8qjcg`;
        fetch(url, {method : "POST",
        body: JSON.stringify(customer) })
        console.log(customer);
    }

    return ( 
        <div className='createnew-container'>
            <div className='title-container'>
                <Title title={state.customerID ? 'EDIT CUSTOMER DETAILS' : 'CREATE A NEW CUSTOMER'} />
            </div>
            <div className='form-container'>
                <div className='row'>
                    <div className='cell-1'>
                        <TextField label='Company Name' size={28} placeholder='Enter company name' initialValue={state.companyName} handleChange={event => setCustomer({...customer, companyName: event.target.value})}/>
                    </div>
                    <div className='cell-1 mr-40'>
                        <TextField label='Billing address' size={28} placeholder='Enter billing address' initialValue={state.billingAddress} handleChange={event => setCustomer({...customer, billingAddress: event.target.value})} />
                    </div>
                </div>
                <div className='row'>
                    <div className='cell-1'>
                        <TextField label='First Name' size={28} placeholder='Enter first name' initialValue={state.firstName} handleChange={event => setCustomer({...customer, firstName: event.target.value})}/>
                    </div>
                    <div className='cell-1 mr-40'>
                        <TextField label='Last Name' size={28} placeholder='Enter last name' initialValue={state.lastName} handleChange={event => setCustomer({...customer,  lastName: event.target.value})}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='cell-1 mr-40'>
                        <TextField label='Job Title' size={74} placeholder='Enter job title' initialValue={state.jobTitle} handleChange={event => setCustomer({...customer, jobTitle: event.target.value})}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='cell-1'>
                        <TextField label='Email' size={28} placeholder='Enter email' initialValue={state.email}  handleChange={event => setCustomer({...customer, email: event.target.value})} />
                    </div>
                    <div className='cell-1 mr-40'>
                        <TextField label='Cell Phone' size={28} placeholder='Enter cell phone' initialValue={state.cellPhone} handleChange={event => setCustomer({...customer, cellPhone: event.target.value})}/>
                    </div>
                </div>
            </div>
            <div className='button-container row'>
                <div className='row-fixed mr-20'>
                    <Button label={state.customerID ? 'Cancel' : 'Back'}  handleClick={() => backToCreateNewCustomerPage()}/> 
                </div>
                <div className='row-fixed'>
                    <Button label={state.customerID ? 'Update' : 'Create'} isPrimary={true} handleClick={() => createCustomerSubmit()} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewCustomer;