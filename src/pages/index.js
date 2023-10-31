import { Inter } from "next/font/google";
import RootLayout from "../components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import FeaturedCard from "@/components/UI/FeaturedCard";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ allProducts, allCategories }) => {
  return (
    <>
      <div>
        <h1>Featured Products</h1>
      </div>
      <ProductCard allProducts={allProducts} />
      <div>
        <h1>Featured Categories</h1>
      </div>
      <div className="mx-5">
        <FeaturedCard allCategories={allCategories} />
      </div>
    </>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products");
  let data1 = await res1.json();
  const res2 = await fetch("http://localhost:5000/categories");
  const data2 = await res2.json();
  data1 = data1.filter((entry, i) => i < 7);
  return {
    props: {
      allProducts: data1,
      allCategories: data2,
    },
  };
};
