/**
* 
* pagination.jsx
* @author - Lameen
* @date - 02/04/2023
**/

import './style.css'

function Pagination() {
    return ( 
        <>
            <div className='row'>
               <div className='cell-1 pagination'>
                        <div className='label-page'>1 - 1 of 1</div>
                        <i class="slide-icon-left fa-solid fa-chevron-left"></i>
                        <i class="slide-icon-right fa-solid fa-chevron-right"></i>
                </div> 
            </div>
        </>
    );
}

export default Pagination;