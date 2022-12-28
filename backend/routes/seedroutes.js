import express from "express";
import Product from "../models/ProductModal.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedrouter = express.Router();

seedrouter.get("/", async (req, resp) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  resp.send({ createdProducts, createdUsers });
});
export default seedrouter;
