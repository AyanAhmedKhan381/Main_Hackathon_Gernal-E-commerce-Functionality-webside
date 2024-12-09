import PostCard from './blogPostCard';
import RecentPosts from './blog_RecentPosts';
import Sidebar from './blog_Sidebar';
// import Pagination from './Pagination';

function Blog_Hero_Section() {
  return (
    <div className="max-w-7xl mx-auto py-10 mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
        <PostCard
          title="Going all-in with millennial design"
          date="14 Oct 2022"
          category="Wood"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          image="/blogs/Rectangle 68.png" // Path to the uploaded image
        />
        {/* Add more PostCard components as needed */}
      </div>
      <div className="space-y-20">
      <Sidebar />
        <RecentPosts />
      </div>

      <div className="md:col-span-2 space-y-8">
        <PostCard
          title="Going all-in with millennial design"
          date="14 Oct 2022"
          category="Wood"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          image="/blogs/Rectangle 68 (1).png" // Path to the uploaded image
        />
        {/* Add more PostCard components as needed */}
      </div>
      
      <div className="md:col-span-2 space-y-8">
        <PostCard
          title="Going all-in with millennial design"
          date="14 Oct 2022"
          category="Wood"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          image="/blogs/Rectangle 68 (2).png" // Path to the uploaded image
        />
        {/* Add more PostCard components as needed */}
      </div>
      
      
      {/* <Pagination /> */}
    </div>
  );
}

export default Blog_Hero_Section;
