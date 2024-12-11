import Image from "next/image";

interface Props {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image: string; // Path to the image
}

export default function ProductCard({ title, price, rating, reviews, image }: Props) {
  // Generate stars using Array and .map()
  const fullStars = Array(Math.floor(rating)).fill("★");
  const halfStar = rating % 1 ? "☆" : null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Image with Next.js Image optimization */}
      <div className="relative w-full h-48 mb-4 items-center">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      {/* Title */}
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      {/* Price */}
      <p className="text-gray-600">{price}</p>
      {/* Rating and Reviews */}
      <div className="flex items-center mt-2">
        {/* Stars */}
        <div className="flex items-center text-yellow-500">
          {/* Full Stars */}
          {fullStars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {/* Half Star */}
          {halfStar && <span>{halfStar}</span>}
        </div>
        {/* Reviews */}
        <span className="ml-2 text-gray-500 text-sm">{reviews} Reviews</span>
      </div>
    </div>
  );
}
