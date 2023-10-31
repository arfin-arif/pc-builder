import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import React from "react";

const MonitorPage = ({ allProducts }) => {
  return (
    <>
      <ProductCard allProducts={allProducts} />
    </>
  );
};

export default MonitorPage;
MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products");
  let data1 = await res1.json();
  const allProducts = data1.filter((product) => product.category === "monitor");
  return {
    props: {
      allProducts,
    },
  };
};
