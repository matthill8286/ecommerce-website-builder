import Layout from "@/components/Layout";
import React, { ReactElement } from "react";

// import { CheckoutForm, CheckoutSidebar, Layout, Spinner } from "@/components";
// import BaseSeo from "@/components/seo/BaseSeo";
// import { useCheckout } from "@/lib/providers/CheckoutProvider";

const CheckoutPage = () => {
  // const { checkout, loading } = useCheckout();

  // if (loading) {
  //   return (
  //     <>
  //       <Spinner />
  //       <BaseSeo title="Checkout - Saleor Tutorial" />
  //     </>
  //   );
  // }

  // if (!checkout || checkout.lines?.length === 0) {
  //   return <BaseSeo title="Checkout - Saleor Tutorial" />;
  // }

  return (
    <>
      {/* <BaseSeo title="Checkout - Saleor Tutorial" /> */}

      <main className="min-h-screen w-screen max-w-7xl md:px-8 md:mx-auto overflow-hidden flex md:flex-row flex-col justify-between">
        <div className="md:w-2/3 w-full">{/* <CheckoutForm /> */}</div>
        <div className="md:w-1/3 w-full">
          {/* <CheckoutSidebar checkout={checkout} /> */}
          Checkout
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
