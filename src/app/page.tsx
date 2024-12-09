import BrowseSection from "./components/BrowseSection/BrowseSection";
import Furniture from "./components/FurnitureSection/Furniture";
import HeroBanner from "./components/Hero/Hero";
import ProductsSection from "./components/Our_Products/Our-Products";
import RoomInspiration from "./components/RoomInspiration/RoomInspiration";

export default function Home() {
  return (
   <div>
    <HeroBanner/>
    <BrowseSection/>
    <ProductsSection/>
    <RoomInspiration/>
    <Furniture/>
   </div>
  );
}
