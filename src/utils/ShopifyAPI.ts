import axios from 'axios'

const SHOP_DOMAIN = 'your-shopify-store.myshopify.com'
const API_VERSION = '2021-04' // Adjust the API version if necessary

// Fetch products from Shopify
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/products.json`, {
      headers: {
        'X-Shopify-Access-Token': 'your-api-password',
      },
    })

    return response.data.products // Return the fetched products data
  } catch (error) {
    console.error('Error fetching products from Shopify:', error)
    throw error
  }
}