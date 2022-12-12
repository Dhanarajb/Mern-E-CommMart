import Express from "express";
import data from "./data.js";

const app = Express();

app.get("/api/products", (req, resp) => {
  resp.send(data.products);
});

app.get("/api/products/slug/:slug", (req, resp) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    resp.send(product);
  } else {
    resp.status(404).send("product not found");
  }
  resp.send(data.products);
});

const port = process.env.PORT || 5200;
app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
