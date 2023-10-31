import Image from "next/image";
import Link from "next/link";
const HomeProductCard = ({ allProducts }) => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {allProducts?.map((product) => (
        <Link
          key={product.id}
          href={`/categories/${product.category}/${product.id}`}
        >
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex flex-row-reverse mb-2">
                <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
                  {product.status}
                  <span className="absolute bg-blue-500 text-blue-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
                    99+
                  </span>
                </button>
              </div>

              <div className="flex items-center mb-3">
                <Image
                  className="rounded-lg  "
                  src={product.image}
                  height={200}
                  width={300}
                  alt=""
                  responsive
                ></Image>
              </div>
              <div className="flex items-center justify-between ">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-2 text-base  uppercase text-right leading-6 text-indigo-200">
                  {product.category}
                </p>
              </div>

              <div className="flex justify-between ">
                <p className="text-white dark:text-whit">$ :{product.price}</p>
                <p className="text-white dark:text-whit">
                  * Ratings :{product.rating}{" "}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeProductCard;
