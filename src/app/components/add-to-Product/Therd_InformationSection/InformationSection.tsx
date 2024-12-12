// components/InformationSection.tsx
import Image from "next/image";
import React from "react";

const InformationSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 border-gray-600 border-t mt-5">
      {/* Tabs */}
      <div className="flex justify-around pb-2 max-w-4xl mx-auto">
        <button className="text-gray-800 font-medium border-black">
          Description
        </button>
        <button className="text-gray-800 font-medium focus:outline-none">
          Additional Information
        </button>
        <button className="text-gray-800 font-medium focus:outline-none">
          Reviews [5]
        </button>
      </div>

      {/* Text Content */}
      <div className="mt-6 text-gray-800 max-w-4xl mx-auto">
        <p className="mb-4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
          stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords,
          and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
          engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
          a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced. The analogue knobs
          allow you to fine-tune the controls to your personal preferences, while the
          guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Image Content */}
      <div className="flex gap-4 space-x-5 mt-10 max-w-5xl mx-auto border-gray-700">
        <div>
          <Image
            src={"/dynamic_Product_card_Images/3rd section images/Group 107.png"}
            alt="image"
            width={1100}
            height={400}
            className="bg-[#F9F1E7]"
          />
        </div>
        <div className="">
          <Image
            src={"/dynamic_Product_card_Images/3rd section images/Mask group.png"}
            alt="image"
            width={1100}
            height={400}
            className="bg-[#F9F1E7]"
          />
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
