import Image from "next/image";
import React from "react";

const FeaturedCardHelper = ({ card }) => {
  const { name, description, bgClass } = card;

  return (
    <div className={`card text-white p-6 md:card-side shadow-xl   ${bgClass}`}>
      <div className="card-body">
        <h2 className="card-title uppercase">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCardHelper;
