// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'object',
      fields: [
        { name: 'firstName', title: 'First Name', type: 'string' },
        { name: 'lastName', title: 'Last Name', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'address', title: 'Address', type: 'object', fields: [
            { name: 'country', title: 'Country', type: 'string' },
            { name: 'city', title: 'City', type: 'string' },
            { name: 'streetAddress', title: 'Street Address', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', title: 'Product ID', type: 'string' },
            // { name: 'cartItem', title: 'Cart Item', type: 'array',
            //   of: [{type: 'reference', to: {type: 'product'}}]
            //  },
            
            // { name: 'productImage', title: 'Product Image', type: 'image' }, // Ensure this is correct
            { name: 'productName', title: 'Product Name', type: 'string' },
            { name: 'productPrice', title: 'Product Price', type: 'number' },
            { name: 'quantity', title: 'Quantity', type: 'number' }
          ]
        }
      ]
    },
    { name: 'totalPrice', title: 'Total Price', type: 'number' },
    { name: 'discountedTotal', title: 'Discounted Total', type: 'number' },
    { name: 'createdAt', title: 'Created At', type: 'datetime' },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Dispatched', value: 'dispatched' }
        ],
        layout: 'radio'
      }
    }
  ]
};
