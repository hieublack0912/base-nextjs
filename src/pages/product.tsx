import React from "react";
import Layout from "@/components/helper/Layout";
import { NextPage } from "next";
import Product from "@/components/Product";

const MaintenancePage: NextPage = () => {
  return (
    <>
      <Layout>
        <Product />
      </Layout>
    </>
  );
};

export default MaintenancePage;
