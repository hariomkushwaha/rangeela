import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price *100;
    const pulishablekey = 'pk_test_51GsQJuGe95DLmQyzoV2tZ8zEHvUT5lZmBBHaqSELi0M5oRQKlJEHpCbetkhl2e3FUJIa8tBPUO5Jh7vxwAXZ49W000rhAoOsF3'

    const onToken = token =>{
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Rangeela Naal'
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey ={pulishablekey}
        />
    );
};

export default StripeCheckoutButton;

