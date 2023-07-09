'use client'

import { useState, useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Button from '@molecules/Button'
import Text from '@atoms/Text'
import { Context } from '@store/context'
import axios from 'axios'

const CheckoutForm = () => {
  const [email, setEmail] = useState('')

  const { cartItems, setCartItems, calculateTotalPrice } = useContext(Context)
  const totalPrice = calculateTotalPrice()

  const handlePayment = async (token) => {
    try {
      const response = await axios.post('https://formspree.io/f/xeqbjepe', { 
        cartItems,
        email
      })
    } catch (error) {
      console.error('Form submission failed:', error)
    }
  }

  return (
    <div>
      <label htmlFor='email'>
        <Text intent='teritary' size='large'>
          Your Email:
        </Text>  
      </label>
      <input
        type='text'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='border-2 border-gray-300 px-4 py-2 rounded-lg
        max-[800px]:w-[100%] w-[35rem] mb-8 mt-5'
      />
      <StripeCheckout
        token={handlePayment}
        stripeKey='pk_live_51MwLwZC3QkyPkbZAFZhrkOOZ3oxUamiEXIQ8loiAjoZJecvtys5vrxzTBNcUI1aquvt4NWkTwFNL3U5uwelkdOa000vHwOnK2B'
        amount={totalPrice.replace('.', '')} // Example: Amount in cents
        currency='USD' // Example: Currency
        shippingAddress={true}
        billingAddress={false}
      >
        <span className='flex w-[35rem] max-[800px]:w-[20rem]'>
        <Button intent='primary' fullWidth={true} disabled={!email}>
          <Text intent='quinary' uppercase={true} size='large'>
            <p>Checkout</p>
          </Text>
        </Button>
        </span>
      </StripeCheckout>
    </div>
  )
}

export default CheckoutForm