import React from "react";

function FruitsCard({ fruit }) {
  return (
    <div className=" rounded-2xl shadow-lg overflow-hidden group transform hover:scale-110 duration-100 relative">
      <img
        src={require(`../assests/${fruit.image}.jpeg`)}
        alt={`${fruit.image}`}
        className=" w-full h-52 object-cover"
      />
      <div className=" flex flex-col items-center my-1  space-y-1">
        <span className=" font-display text-slate-500 block">{fruit.name}</span>
        <span className=" font-display text-slate-500">
          <span>&#8377;</span>
          {fruit.price}
        </span>
        <span className=" font-display uppercase text-lime-400 text-xs invisible group-hover:visible">Add To Cart</span>
      </div>
      <span className=" absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">1% Off</span>
    </div>
  );
}

export default FruitsCard;
