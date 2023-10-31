import Image from "next/image";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-4">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            className="rounded-lg lg:w-[450px] lg:h-[450px] object-scale-down lg:object-fill"
            src={product.image}
            height={200}
            width={200}
            alt=""
            responsive
          ></Image>
        </div>
        <div className="md:w-1/2">
          {/* Product Name */}
          <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>
          <div className="mt-2">
            {/* Category */}
            <p className="text-gray-600 uppercase">
              Category: {product.category}
            </p>
            {/* Status */}
            <p className="text-green-500">Status: {product.status}</p>
            {/* Price */}
            <p className="text-lg font-bold text-indigo-600 mt-2">
              ${product.price}
            </p>
          </div>

          {/* Product Description */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              egestas, erat et varius convallis, dui dui egestas dui, quis
              iaculis nunc arcu nec urna.
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <ul className="list-disc list-inside">
              <li>Brand: ABC</li>
              <li>Model: XYZ123</li>
              <li>Specification: Lorem ipsum</li>
              <li>Port: USB 3.0</li>
              <li>Type: Component</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Ratings</h2>
        <div className="flex items-center mt-2">
          {/* Individual Rating */}
          <div className="mr-4">
            <span className="text-2xl font-semibold">4.5</span>
            <span className="text-gray-500">/5</span>
          </div>
          {/* Average Rating */}
          <div className="text-gray-600">Average Rating: 4.3/5</div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="mt-4">
          {/* Individual Reviews Go Here */}
          <div className="border-t-2 border-gray-100 p-4">
            <div className="flex items-center">
              {/* Reviewer Avatar */}
              <img
                src="/images/avatar.jpg" // Replace with reviewer's avatar URL
                alt="Reviewer"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                {/* Reviewer Name */}
                <p className="text-lg font-semibold">John Doe</p>
                {/* Review Rating */}
                <div className="flex items-center mt-1">
                  <span className="text-2xl font-semibold">4.5</span>
                  <span className="text-gray-500">/5</span>
                </div>
                {/* Review Content */}
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam egestas, erat et varius convallis, dui dui egestas dui,
                  quis iaculis nunc arcu nec urna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
