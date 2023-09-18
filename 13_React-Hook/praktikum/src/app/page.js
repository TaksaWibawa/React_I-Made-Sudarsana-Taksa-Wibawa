"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar.js";
import Header from "@/components/header.js";
import ProductForm from "@/components/productForm.js";
import AccountForm from "@/components/accountForm.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";

export default function App() {
  const [isProductFormActive, setIsProductFormActive] = useState(true);

  return (
    <>
      <Navbar
        isProductFormActive={isProductFormActive}
        toggleForm={() => setIsProductFormActive(!isProductFormActive)}
      />
      <main className="container-fluid py-5">
        <Header />
        {isProductFormActive ? <ProductForm /> : <AccountForm />}
      </main>
    </>
  );
}
