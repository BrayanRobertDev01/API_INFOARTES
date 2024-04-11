import cors from "cors";
import express from "express";
import { MainRouter } from "./routes/index.routes";

const app = express();
app.use(cors({ origin: ["*"] }));
app.use(express.json());
app.use("/", MainRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is listening...")
);
