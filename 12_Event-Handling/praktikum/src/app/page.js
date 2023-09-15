"use client";

// learn on how can we import components/layouts that from the same directory in one import. we can use index.js to do that
import React from "react";
import Navbar from "@/components/navbar.js";
import Header from "@/components/header.js";
import ProductForm from "@/components/productForm.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container-fluid py-5">
        <Header />
        <ProductForm />
      </main>
    </>
  );
}
