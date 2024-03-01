import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
connectDB();

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import regRoutes from "./routes/regRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reg", regRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
