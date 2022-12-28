import express from "express";
import Product from "../models/ProductModal.js";
import data from "../data.js";

const productrouter = express.Router();

productrouter.get("/", async (req, resp) => {
  const products = await Product.find();
  resp.send(products);
});
productrouter.get("/slug/:slug", async (req, resp) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    resp.send(product);
  } else {
    resp.status(404).send("product not found");
  }
  resp.send(data.products);
});

productrouter.get("/:id", async (req, resp) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    resp.send(product);
  } else {
    resp.status(404).send("product not found");
  }
  resp.send(data.products);
});
export default productrouter;
