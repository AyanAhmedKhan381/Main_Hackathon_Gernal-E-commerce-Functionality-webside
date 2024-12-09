import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-center py-6 mt-20 pt-24">
        <h1 className="text-gray-500 text-sm">
          Share your setup with <br /> <span className="text-black text-3xl font-bold">#FuniroFurniture</span>
        </h1>
      </header>

      {/* Gallery Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {/* Top-left image */}
        <div className="col-span-1 md:col-span-1">
          <Image
            src="/furnitureSection/Rectangle 43.png"
            alt="Shelf setup"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Laptop and radio */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-center">
          <Image
            src="/furnitureSection/Rectangle 38.png"
            alt="Laptop and radio"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Bedroom setup */}
        <div className="col-span-1">
          <Image
            src="/furnitureSection/Rectangle 44.png"
            alt="Bedroom setup"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Dining area */}
        <div className="col-span-1 md:col-span-1">
          <Image
            src="/furnitureSection/Rectangle 39.png"
            alt="Dining area"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Chair */}
        <div className="col-span-2 lg:mt-10  lg:ml-40">
          <Image
            src="/furnitureSection/Rectangle 40.png"
            alt="Vintage chair"
            width={400}
            height={1000}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-1 md:col-span-1">
          <Image
            src="/furnitureSection/Rectangle 39.png"
            alt="Dining area"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

      
      </main>
    </div>
  );
}
