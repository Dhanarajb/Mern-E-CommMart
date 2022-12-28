import Express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedrouter from "./routes/seedroutes.js";
import productrouter from "./routes/productroutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = Express();

app.use("/api/seed", seedrouter);
app.use("/api/products", productrouter);

// app.get("/api/products", (req, resp) => {
//   resp.send(data.products);
// });

const port = process.env.PORT || 5200;
app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
