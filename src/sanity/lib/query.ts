import { groq } from "next-sanity";





export const Single_Product = groq`*[_type == "product" && _id == $id] {
  _id,
  title,
  description,
  price,
  discountPercentage,
  productImage,
  isNew
}`

export const Order_Query = groq`
  *[_type == "order"] | order(createdAt desc) {
    _id,
    createdAt,
    status,
    totalPrice,
    discountedTotal,
    customer {
      firstName,
      lastName,
      phone,
      email,
      address {
        country,
        city,
        streetAddress
      }
    },
    items[] {
      productId,
      productName,
      productPrice,
      quantity
    }
  }
`;


export const allProductQuery = groq`*[_type == "product"] {
    _id,
    title,
    description,
    price,
    dicountPercentage,
    productImage,
    isNew
  }`


export const ThreeProductQuery = `
*[_type == "product" && _id in ["sDoE4Hn6nkBPnCufhzGlFz","xaIbDd12g3ehznCa7fCoKg","sDoE4Hn6nkBPnCufhzGX8N"]] {
  _id,
  title,
  productImage,
  description,
  price,
  dicountPercentage,
  isNew
}
`;
export const TwoProductQuery = `
*[_type == "product" && _id in ["sDoE4Hn6nkBPnCufhzGX8N", "xaIbDd12g3ehznCa7fCoKg"]] {
  _id,
  title,
  productImage,
  description,
  price,
  discountPercentage,
  isNew
}
`;
export const FourProductQuery = `
*[_type == "product" && _id in ["xaIbDd12g3ehznCa7fCqhm", "xaIbDd12g3ehznCa7fCoe2", "xaIbDd12g3ehznCa7fD1cE", "xaIbDd12g3ehznCa7fD8Be"]] {
  _id,
  title,
  productImage,
  description,
  price,
  discountPercentage,
  isNew
}
`;