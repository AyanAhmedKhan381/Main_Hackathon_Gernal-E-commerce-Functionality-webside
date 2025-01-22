import Image from "next/image";

interface Props {
  Title?: string,
  miniTitle?: string
}


  export function HeroSection({Title,miniTitle}:Props) {
  return (
    <div className="relative h-[300px] sm:h-[100px] lg:h-[300px]">
      {/* Background Image */}
      <Image
        src="/Rectangle 1.png" // Replace with the correct image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />

      {/* Text and Breadcrumb */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-900">{Title}</h1>
        <p className="mt-2 text-sm text-gray-600">
          <span className="text-gray-800">Home</span> &gt; <span>{miniTitle}</span>
        </p>
      </div>
    </div>
  );
}

