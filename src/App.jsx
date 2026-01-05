import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

/**
 * React Router Tutorial App
 *
 * This app demonstrates the key concepts of React Router:
 *
 * 1. ROUTES SETUP:
 *    - Routes are defined using <Route> components inside a <Routes> container
 *    - Each route maps a URL path to a component
 *
 * 2. BASIC ROUTES:
 *    - "/" → Home component
 *    - "/about" → About component
 *    - "/users" → Users component
 *    - "/products" → Products component
 *
 * 3. DYNAMIC ROUTES (with parameters):
 *    - "/user/:id" → UserProfile component
 *    - "/product/:id" → ProductDetail component
 *    - The ":id" part is a URL parameter that can be accessed in the component using useParams()
 *
 * 4. CATCH-ALL ROUTE (404):
 *    - "*" → NotFound component
 *    - This matches any path that wasn't matched by previous routes
 *
 * 5. NAVIGATION:
 *    - Use <Link> or <NavLink> components to navigate between pages
 *    - Use useNavigate() hook for programmatic navigation
 */

function App() {
  return (
    <div className="app">
      {/* Navbar is shown on all pages */}
      <Navbar />

      {/* Routes define which component to show for each URL */}
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />

        {/* Dynamic Routes with Parameters */}
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* 404 Catch-all Route - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
