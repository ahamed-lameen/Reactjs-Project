/**
* 
* sideBar.jsx
* @author - Lameen
* @date - 30/03/2023
**/

import { Link } from 'react-router-dom';
import './style.css'

function SideBar() {
    return ( 
        <div className='row'>
            <div className='cell-4 side-bar'>
                <p className='label-menu'>MAIN MENU</p>
                <ul className='menu-list'>
                    <Link className='menu-link' to='/'><li className='active'><i class="menu-icon fa-solid fa-signal"></i> Dashboard</li></Link>
                    <Link className='menu-link' to='inspection'><li className='activ'><i class="menu-icon fa-solid fa-file"></i> Inpections</li></Link>
                    <Link className='menu-link' to='inprogress'><li><i class="menu-icon fa-solid fa-signal"></i> In Progress</li></Link>
                    <Link className='menu-link' to='readytosend'><li><i class="menu-icon fa-solid fa-envelope"></i> Ready to Send</li></Link>
                    <Link className='menu-link' to='completed'><li><i class="menu-icon fa-solid fa-circle-check"></i> Completed</li></Link>
                    <Link className='menu-link' to='reports'><li><i class="menu-icon fa-solid fa-signal"></i> Reports</li></Link>
                    <Link className='menu-link' to='customers'><li><i class="menu-icon fa-solid fa-user-group"></i> Customers</li></Link>
                </ul>
            </div>
            <div className=''>

            </div>
        </div>
    );
}

export default SideBar;