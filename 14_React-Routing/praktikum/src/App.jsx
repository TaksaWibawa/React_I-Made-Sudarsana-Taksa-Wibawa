import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import AccountForm from "./pages/account-page";
import ProductForm from "./pages/product-page";
import ProductDetail from "./pages/product-detail-page";
import Login from "./pages/login-page";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import PrivateRoute from "./routes/private-route";
import ProtectedRoute from "./routes/protected-route";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

export default function App() {
  const [payload, setPayload] = useState([]);
  const updatePayload = (newPayload) => {
    setPayload(newPayload);
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute />}
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/account" element={<AccountForm />} />
          <Route path="/product" element={<ProductForm payload={payload} updatePayload={updatePayload} />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1 className="text-center my-5 fw-bold">404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
