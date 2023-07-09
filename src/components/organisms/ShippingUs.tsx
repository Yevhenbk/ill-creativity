import React, { FC } from 'react'
import Text from '@atoms/Text'

const ShippingUs: FC = () => {
  return (
    <div className='pt-16 overflow-hidden flex flex-col items-center 
    justify-center gap-16'>
      <Text intent='teritary' uppercase={true} bold={true}
      size='header'>
        <h1 className='w-[100%] text-center'>Shipping Policy</h1>  
      </Text>
      <Text intent='teritary' size='large'>
        <p className='w-[70vw] pb-8'>
        At Illuminatingcreativity, we strive to provide a seamless and efficient shipping experience for our valued customers. Please review our shipping policy below to understand how we handle the delivery of our products:
        </p>
        <p className='w-[70vw] pb-8'>
        Order Processing: Upon receiving your order, we will process it within 30 business days. Please note that business days do not include weekends or public holidays.
        Shipping Methods and Carriers: We offer a variety of shipping methods, including standard ground shipping, express shipping, and international shipping. The available options will be presented to you during the checkout process. We work with reputable shipping carriers to ensure reliable and timely delivery of your package.
        </p>
        <p className='w-[70vw] pb-8'>
        Shipping Costs: Shipping costs are calculated based on the weight, dimensions, and destination of your order. The applicable shipping charges will be displayed at the checkout before you confirm your purchase. Please note that additional customs fees or import taxes may apply for international orders and are the responsibility of the customer.
        </p>
        <p className='w-[70vw] pb-8'>
        Estimated Delivery Time: The estimated delivery time will depend on the shipping method you select and your location. During the checkout process, you will be provided with an estimated delivery date range based on the carrier's guidelines. Please note that unforeseen circumstances such as weather conditions or logistical issues may affect the actual delivery time.  
        </p>
        <p className='w-[70vw] pb-8'>
        Order Tracking: Once your order is shipped, we will provide you with a tracking number via email or through your customer account. You can use this tracking number to monitor the progress of your shipment and receive real-time updates on its status.
        </p>
        <p className='w-[70vw] pb-8'>
        Lost or Damaged Packages: In the rare event that your package is lost or damaged during transit, please contact our customer support team immediately. We will work closely with the shipping carrier to resolve the issue and ensure a satisfactory outcome.
        </p>
        <p className='w-[70vw] pb-8'>
        International Shipping: We offer international shipping to select countries. Please note that customs regulations and duties vary by country. It is your responsibility to be aware of and comply with any import restrictions, taxes, or customs fees imposed by your local customs authorities.
        </p>
        <p className='w-[70vw] pb-8'>
        30-Day Return Guarantee:
        </p>
        <p className='w-[70vw] pb-8'>
        At Illuminatingcreativity, we want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your order, we offer a 30-day return guarantee from the date of delivery. Please review the details of our return policy below:
        </p>
        <p className='w-[70vw] pb-8'>
        Eligibility: To be eligible for a return, the item(s) must be unused, in their original condition, and in the original packaging. Certain products may be excluded from our return policy due to hygiene reasons or other restrictions, such as personalized or customized items. Please contact our customer support team for clarification if you are unsure about the eligibility of your item(s).
        Return Process: To initiate a return, please contact our customer support team within 30 days of receiving your order. They will guide you through the return process and provide you with a return authorization number (RMA) if required. Returns without a valid RMA may not be accepted.
        </p>
        <p className='w-[70vw] pb-8'>
        Return Shipping: Unless the return is due to a defective or damaged product, the customer is responsible for the return shipping costs. We recommend using a trackable shipping service and purchasing shipping insurance to ensure the safe return of the item(s). The original shipping charges are non-refundable.
        </p>
        <p className='w-[70vw] pb-8'>
        Refund or Exchange: Once we receive and inspect the returned item(s), we will process your refund or exchange according to your preference. Refunds will be issued to the original payment method used for the purchase. Exchanges are subject to product availability.
        </p>
        <p className='w-[70vw] pb-32'>
        Restocking Fee: In some cases, a restocking fee may apply to returned
        </p>
      </Text>
    </div>
  )
}

export default ShippingUs