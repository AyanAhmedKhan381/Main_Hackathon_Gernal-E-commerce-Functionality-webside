

// import Image from "next/image";
// import banner from "../../../../public/background/hero background.jpeg"; // Move your image to the `public` folder.

// export default function HeroBanner() {
//   return (
//     <section className="bg-white">
//       <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center w-[1440px] h-[1007px] justify-end">
       
//         {/* left Side Image */}
//         <div className="w-full hidden lg:block h-fit flex-col md:flex-row justify-center relative">
//           <Image
//             src={banner}
//             alt="Hero Banner"
//             className="rounded-lg shadow-lg "
//           />
//         </div>

//          {/* right Side Content */}
//          <div className="mb-8 md:mb-0 absolute bg-[#FFF3E3] p-10 mr-10 mt-28 ">
//           <h4 className="text-sm text-[#333333] uppercase mb-2">New Arrival</h4>
//           <div className="text-4xl font-bold leading-tight mb-4 w-[559px] h-[127px] top-[343px] left-[780px] text-[#B88E2F]">
//             Discover Our <br />
//             <span className=" text-[#B88E2F]">New Collection</span>
//           </div>
//           <p className="text-[#333333] mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit
//             tellus, luctus nec ullamcorper mattis.
//           </p>
//           <button className="text-white px-14 py-4 rounded-sm shadow-lg hover:bg-yellow-600 font-semibold bg-[#B88E2F]">
//             Buy Now
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import banner from "../../../../public/background/hero background.jpeg"; // Ensure the image is correctly placed in the public folder.
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="container mx-auto lg:-mt-14 w-[94%] px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side Image */}
        <div className="w-full justify-center relative hidden lg:block">
          <Image
            src={banner}
            alt="Hero Banner"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="bg-[#FFF3E3] p-8 lg:p-10 lg:mr-10 lg:mt-32 mt-8 lg:right-48 lg:mx-auto lg:absolute lg:justify-center">
          <h4 className="text-sm text-[#333333] uppercase mb-2">New Arrival</h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-[#B88E2F]">
            Discover Our <br />
            <span className="text-[#B88E2F]">New Collection</span>
          </h1>
          <p className="text-[#333333] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href={"shop"}>
          <button className="text-white px-10 py-4 rounded-sm shadow-lg hover:bg-yellow-600 font-semibold bg-[#B88E2F]">
            Buy Now
          </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
