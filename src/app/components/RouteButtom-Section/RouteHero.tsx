import Image from "next/image";
import React from "react";

const Buttom_Features_Section = () => {
  const features = [
    {
      icon: <Image src={"/icons/Group.png"} alt="image" width={80} height={50} />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <Image src={"/icons/guarantee.png"} alt="image" width={80} height={50} />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <Image src={"/icons/Vector.png"} alt="image" width={80} height={50} />,
      title: "Free Shipping",
      description: "Order over $150",
    },
    {
      icon: <Image src={"/icons/Vector (1).png"} alt="image" width={80} height={50} />,
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#f8f1e7] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center text-center space-y-3 relative"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-bold  text-gray-900 w-full">{feature.title} </h3>
             
             <p className="text-sm text-gray-500 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttom_Features_Section;
