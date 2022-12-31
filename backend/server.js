import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedrouter from "./routes/seedroutes.js";
import productrouter from "./routes/productroutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedrouter);
app.use("/api/products", productrouter);
app.use("/api/users", userRouter);

app.use("/api/orders", orderRouter);

app.use((err, req, resp, next) => {
  resp.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5200;
app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
