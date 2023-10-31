import RootLayout from "@/components/Layouts/RootLayout";

const ContactPage = () => {
  return <div>Contact Page</div>;
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
