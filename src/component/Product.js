import React from 'react';
import { useCart } from 'react-use-cart';

export default function Product(props) {
    let { image, price, title} = props.data;
    const { addItem } = useCart();
    const addtoCart=()=>{
        addItem(props.data);
    }

    return (
        <div className='each-product'>
            <div className='image-div'>
                <img src={image} alt=''></img>
            </div>
            <div className='product-description'>
                <p className='product-title'>{title}</p>
                <p className='product-price'>Rs. <span className='price'>{price}</span></p>
                <div className='addtocart-div' onClick={()=>addtoCart()}><button className='addtoCart'>Add to Cart</button></div>
            </div>
        </div>
    )
}
