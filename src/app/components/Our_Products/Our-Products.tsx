


import Image from "next/image";

const products = [
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "30%",
    img: "/pictures image/IMG-20241208-WA0163.jpg",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    img: "/pictures image/IMG-20241208-WA0164.jpg",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "50%",
    img: "/pictures image/IMG-20241208-WA0165.jpg",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    img: "/pictures image/IMG-20241208-WA0166.jpg",
  },
  {
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    img: "/pictures image/IMG-20241208-WA0167.jpg",
  },
  {
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    isNew: true,
    img: "/pictures image/IMG-20241208-WA0169.jpg",
  },
  {
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "50%",
    img: "/pictures image/IMG-20241208-WA0170.jpg",
  },
  {
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    isNew: true,
    img: "/pictures image/WhatsApp Image 2024-12-08 at 15.38.41_aa5b27b5.jpg",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold mb-8">Our Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white border rounded-lg shadow-lg group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-auto transition-transform transform group-hover:scale-105"
                />
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-medium text-lg">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="mt-2">
                  <span className="font-bold text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="line-through text-gray-500 text-sm ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-white rounded shadow text-[#B88E2F] hover:scale-105 border border-[#B88E2F]">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
