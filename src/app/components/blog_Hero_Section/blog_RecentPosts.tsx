import Image from 'next/image';

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/blogs/icons/Rectangle 69 (1).png", // Path to the uploaded image
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/blogs/icons/Rectangle 69 (2).png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/blogs/icons/Rectangle 69 (3).png",
  },
  {
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/blogs/icons/Rectangle 69 (4).png",
  },
  {
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/blogs/icons/Rectangle 69.png",
  },
];

const RecentPosts = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Posts</h2>
      {recentPosts.map((post, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-16 h-16 relative">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold ">{post.title}</h3>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
