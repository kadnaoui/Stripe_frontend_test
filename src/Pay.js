import React from 'react'
import {useNavigate} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 
const Pay = () => {
    const [stripeToken,setStripeToken]=React.useState(null)
    const Navigate=useNavigate()
    const key='pk_test_51LOPn3CcWJEaunIgsOakBOaITLwLViT4hk2pAt0x4qQttNdFKreNaRwMPcuYgWJgf3Yu0qJVkufIDg1B0eGEUR9b00VvkpjK5R'
    const onToken=(token)=>{
            setStripeToken(token);
    }
    React.useEffect(()=>{
        const makeRequest=async()=>{
            try {
                const tokenId=stripeToken.id;
                console.log(tokenId);
              const res=await   axios.post('http://localhost:5000/checkout/payment',{
                tokenId:tokenId,
                amount:2000
              })
              console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
       stripeToken&& makeRequest()
    }
    ,[stripeToken])
    return (
    <div>Pay
        <StripeCheckout 
        name='Ecommerce'
        image='https://kadnaoui.vercel.app/static/media/logo.26ba5c1002a599e2f161.png'
        billingAddress
        shippingAddress
        description='your totalis 20 dollars'
        amount={2000}
        token={onToken}
        stripeKey={key}
        >

       
        <button >Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay