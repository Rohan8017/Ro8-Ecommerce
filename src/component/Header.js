
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import React from 'react'

export default function Header(props) {
    return (
        <div className='header-sticky'>
            <div className='header'>
                <div className='left-icon-name'>
                    Online Shopping App
                </div>
                <div className='search-icon-div'>
                    <input type='search' className='search-products' placeholder='Search Products...' onChange={(e)=>props.setSearchVal(e.target.value)}/>
                    <button className='search-button'><FiSearch style={{ fontSize: '20px' }} /></button>
                </div>
                <div className='CartValue'>
                    <BsCart style={{ fontSize: '24px', color: 'white' }} />
                </div>
            </div>
        </div>
    )
}



