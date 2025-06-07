import React from "react";

function HomeSectionCard({product}) {
  return (
<div className="py-3 px-2 mb-2 cursor-pointer flex flex-col items-center bg-[#e9c794dc] rounded-lg shadow-md overflow-hidden w-[8.5rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] mx-auto h-[14rem]">
  <div className="h-[9rem] w-full">
    <img
      className="object-cover object-top w-full h-full"
      src={product.imageUrl}
      alt=""
    />
  </div>

  <div className="p-2 text-center flex-grow flex flex-col justify-between">
    <h3 className="text-xs md:text-base font-semibold text-gray-900 line-clamp-1">{product.brand}</h3>
    <p className=" text-xs md:text-sm text-gray-600 line-clamp-1">{product.titleColor}</p>
  </div>
</div>

  );
}

export default HomeSectionCard;
