import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="max-w-full mx-auto">
      <div className="text-center mt-[80px]">
        <h2 className="text-xl">404!</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
