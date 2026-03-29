import { Router } from "express";
import { authProduct } from "../middleware/AuthProduct.js";

const router = Router();

router.get("/product", authProduct, (req, res) => {
  const products = [
    { id: 1, name: "Laptop", title: "Powerful Laptop", description: "High performance laptop for coding and gaming" },
    { id: 2, name: "Mobile", title: "Smartphone", description: "Latest Android smartphone with great camera" },
    { id: 3, name: "Headphones", title: "Wireless Headphones", description: "Noise cancelling wireless headphones" },
    { id: 4, name: "Keyboard", title: "Mechanical Keyboard", description: "RGB mechanical keyboard for fast typing" },
    { id: 5, name: "Mouse", title: "Gaming Mouse", description: "High DPI gaming mouse with RGB lights" },
    { id: 6, name: "Monitor", title: "4K Monitor", description: "Ultra HD monitor for clear display" },
    { id: 7, name: "Tablet", title: "Android Tablet", description: "Portable tablet for entertainment and work" },
    { id: 8, name: "Smart Watch", title: "Fitness Smartwatch", description: "Track fitness and health data easily" },
    { id: 9, name: "Speaker", title: "Bluetooth Speaker", description: "Portable speaker with powerful sound" },
    { id: 10, name: "Camera", title: "Digital Camera", description: "High quality digital camera for photography" }
  ];

  res.json({
    success: true,
    products
  });
});
router.get("/product1",(req, res) => {
  const products = [
    { id: 1, name: "Laptop", title: "Powerful Laptop", description: "High performance laptop for coding and gaming" },
    { id: 2, name: "Mobile", title: "Smartphone", description: "Latest Android smartphone with great camera" },
    { id: 3, name: "Headphones", title: "Wireless Headphones", description: "Noise cancelling wireless headphones" },
    { id: 4, name: "Keyboard", title: "Mechanical Keyboard", description: "RGB mechanical keyboard for fast typing" },
    { id: 5, name: "Mouse", title: "Gaming Mouse", description: "High DPI gaming mouse with RGB lights" },
    { id: 6, name: "Monitor", title: "4K Monitor", description: "Ultra HD monitor for clear display" },
    { id: 7, name: "Tablet", title: "Android Tablet", description: "Portable tablet for entertainment and work" },
    { id: 8, name: "Smart Watch", title: "Fitness Smartwatch", description: "Track fitness and health data easily" },
    { id: 9, name: "Speaker", title: "Bluetooth Speaker", description: "Portable speaker with powerful sound" },
    { id: 10, name: "Camera", title: "Digital Camera", description: "High quality digital camera for photography" }
  ];

  res.json({
    success: true,
    products
  });
});

export default router;