import Express from "express";
import data from "./data.js";

const app = Express();

app.get("/api/products", (req, resp) => {
  resp.send(data.products);
});

const port = process.env.PORT || 5200;
app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
