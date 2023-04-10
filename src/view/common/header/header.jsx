/**
 * 
 * header.jsx
 * @author - Lameen
 * @date - 30/03/2023
 **/

import Logo from '../../../assets/img/roofing.png';
import User from '../../../assets/img/profile_user.png';
import './style.css'

function Header() {
    return ( 
        <header>
            <div className='row'>
                <div className='cell-1'>
                    <img src={Logo} className='logo'/>
                </div>
                <div className='cell-2 right-box'>
                    <i class="bell-icon fa-regular fa-bell"></i>
                    <img src={User} className='user-img'  />
                    <label className='label-sales'>Sales</label>
                    <i class="down-icon fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;