import Image from 'next/image';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';

interface PostCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, category, excerpt, image }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden transition-all transform w-full max-w-3xl mx-auto">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src={image}
          width={700}
          height={300}
          alt={title}
          layout="responsive"
          objectFit="cover" // Better for full display within given space
          className="rounded-t-lg"
        />
      </div>

      {/* Base64 Encoded Image */}



      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 transition-colors">
          {title}
        </h2>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <FiCalendar className="mr-2" />
          <span>{date}</span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 mt-4 line-clamp-3">{excerpt}</p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-6 py-4 border-t">
        {/* Read More Link */}
        <a 
          href="#" 
          className="flex items-center text-blue-600 font-medium hover:underline"
        >
          Read more <FiArrowRight className="ml-2" />
        </a>

        {/* Tag Icon */}
        <div className="flex items-center text-gray-400">
          <FiTag className="mr-2" />
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

