import ProductCard from "./ProductCard";

export const products = [
  {
    image: "/PRODUCT-Images/Images (2).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (3).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },

  {
    image: "/PRODUCT-Images/image 4 (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
 
  {
    image: "/PRODUCT-Images/Images (2).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (3).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },

  {
    image: "/PRODUCT-Images/image 4 (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
 
  {
    image: "/PRODUCT-Images/Images (2).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (3).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    image: "/PRODUCT-Images/Images (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },

  {
    image: "/PRODUCT-Images/image 4 (1).png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
 
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto w-[90%] mt-20">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
