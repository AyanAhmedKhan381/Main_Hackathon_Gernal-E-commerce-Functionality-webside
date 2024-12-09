

import Image from "next/image";
import banner from "../../../../public/background/hero background.jpeg"; // Move your image to the `public` folder.

export default function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center w-[1440px] h-[1007px] justify-end">
       
        {/* left Side Image */}
        <div className="w-full hidden lg:block h-fit flex-col md:flex-row justify-center relative">
          <Image
            src={banner}
            alt="Hero Banner"
            className="rounded-lg shadow-lg "
          />
        </div>

         {/* right Side Content */}
         <div className="mb-8 md:mb-0 absolute bg-[#FFF3E3] p-10 mr-10 mt-28">
          <h4 className="text-sm text-[#333333] uppercase mb-2">New Arrival</h4>
          <div className="text-4xl font-bold leading-tight mb-4 w-[559px] h-[127px] top-[343px] left-[780px] text-[#B88E2F]">
            Discover Our <br />
            <span className=" text-[#B88E2F]">New Collection</span>
          </div>
          <p className="text-[#333333] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="text-white px-14 py-4 rounded-sm shadow-lg hover:bg-yellow-600 font-semibold bg-[#B88E2F]">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
}
