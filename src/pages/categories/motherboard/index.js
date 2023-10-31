import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";

const MotherboardPage = ({ allProducts }) => {
  return (
    <>
      <ProductCard allProducts={allProducts} />
    </>
  );
};

export default MotherboardPage;
MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products");
  let data1 = await res1.json();
  const allProducts = data1.filter(
    (product) => product.category === "motherboard"
  );
  return {
    props: {
      allProducts,
    },
  };
};
