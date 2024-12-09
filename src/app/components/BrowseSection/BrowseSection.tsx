import Image from "next/image";

const BrowseSection = () => {
  return (
    <section className="py-12 bg-gray-50 mx-auto max-w-[1200px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Browse The Range</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Dining", img: "/images/Image-living room.png" },
          { title: "Living", img: "/images/Mask Group (1).png" },
          { title: "Bedroom", img: "/images/Mask Group.png" },
        ].map((item, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto transition-transform transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-center mt-4 text-lg font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseSection;
