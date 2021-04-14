import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custombutton/custombutton.component';

const CartDropdown =()=>(
    <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButton>Go To CheckOut </CustomButton>
    </div>
    
)

export default CartDropdown;