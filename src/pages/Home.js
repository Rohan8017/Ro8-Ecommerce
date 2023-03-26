import React from 'react'
import Product from '../component/Product';

export default function Home({searchVal,productData}) {
    
    return (
        <div className="home-page-body">
            <div className='home-page-data'>
                {productData.filter((item)=>{
                    return searchVal ==='' ? item :item.title.toLowerCase().includes(searchVal.toLowerCase())
                }).map((item, index) => {
                    return <Product key={item.id} data={item} index={index} />;
                })}
            </div>
        </div>
    )
}

