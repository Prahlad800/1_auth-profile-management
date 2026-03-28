import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../utils/utils";
import "./home.css";



function Home() {
  const [loggedUser, setLoggedUser] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedUser(localStorage.getItem("loggedInUser"));
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/api/pro/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (err) {
      handleError("Unauthorized or error fetching products");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">Welcome, {loggedUser} 👋</h1>

        <button className="home__logoutBtn" onClick={handleLogout}>
          Logout
        </button>

        <div className="home__grid">
          {products.map((item) => (
            <div key={item.id} className="productCard">
              <h2 className="productCard__name">{item.name}</h2>

              <h4 className="productCard__title">{item.title}</h4>

              <p className="productCard__desc">{item.description}</p>
            </div>
          ))}
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Home;
