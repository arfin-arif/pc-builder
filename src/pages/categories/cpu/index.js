import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import Image from "next/image";
import Link from "next/link";

const CpuProcessorPage = ({ cpuProducts: allProducts }) => {
  return (
    <>
      <ProductCard allProducts={allProducts} />
    </>
  );
};

export default CpuProcessorPage;
CpuProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products");
  let data1 = await res1.json();
  const cpuProducts = data1.filter((product) => product.category === "cpu");
  return {
    props: {
      cpuProducts,
    },
  };
};
