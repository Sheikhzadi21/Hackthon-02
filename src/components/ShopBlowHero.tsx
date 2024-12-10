import Image from "next/image";
import FilterIcon from "@/picture/filter.png";

export default function BlowHero() {
  return (
    <div className="w-full h-16 bg-[#F9F1E7] flex items-center justify-between px-8">
      {/* Left Section: Filter and Info */}
      <div className="flex items-center gap-4">
        {/* Filter Icon */}
        <div className="flex items-center gap-2">
          <Image src={FilterIcon} width={30} height={30} alt="Filter Icon" />
          <p className="text-sm font-medium">Filter</p>
        </div>
        {/* Result Info */}
        <p className="text-sm text-gray-600">| Showing 1–16 of 32 results</p>
      </div>

      {/* Right Section: Show and Input */}
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium">Show</p>
        {/* Input Field */}
        <input 
          className="w-10 h-10 bg-black text-white text-center rounded focus:outline-none"
          type="number" 
          defaultValue="16" 
          placeholder="16"
        />
      </div>
    </div>
  );
}
