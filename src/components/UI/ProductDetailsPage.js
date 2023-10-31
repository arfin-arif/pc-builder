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
            <p>{product.description}</p>
          </div>

          {/* Key Features */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <ul className="list-disc list-inside">
              <li>Brand: {product.keyFeatures.Brand}</li>
              <li>Model: {product.keyFeatures.Model}</li>
              <li>Specification: {product.keyFeatures.Specification}</li>
              <li>Port: {product.keyFeatures.Type}</li>
              <li>Type: {product.keyFeatures.Voltage}</li>
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
            <span className="text-gray-500">
              Individual Rating :{product.individualRating}
            </span>
          </div>
          {/* Average Rating */}
          <div className="text-gray-600">
            Average Rating: {product.averageRating}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.name} className="mt-4">
            {/* Individual Reviews Go Here */}
            <div className="border-t-2 border-gray-100 p-4">
              <div className="flex items-center">
                <div className="ml-4">
                  {/* Reviewer Name */}
                  <p className="text-lg font-semibold">{review.name}</p>
                  {/* Review Rating */}
                  <div className="flex items-center mt-1">
                    <span className="text-2xl font-semibold">
                      {review.rating}
                    </span>
                    <span className="text-2xl font-semibold text-gray-500">
                      /5
                    </span>
                  </div>
                  {/* Review Content */}
                  <p className="mt-2">{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
