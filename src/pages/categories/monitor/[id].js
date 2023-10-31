import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetailsPage from "@/components/UI/ProductDetailsPage";
import React from "react";

const MonitorDetailsPage = ({ product }) => {
  return (
    <>
      <ProductDetailsPage product={product}></ProductDetailsPage>
    </>
  );
};

export default MonitorDetailsPage;

MonitorDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const productId = params.id;

  // Fetch data for the specific product with the ID provided
  const res = await fetch(`http://localhost:5000/products/${productId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
