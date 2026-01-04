import express from "express";
import postRouter from "./routes/post.route.js";
import uploadRouter from "./routes/upload.route.js";
import connectDB from "./lib/connectDB.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/post", postRouter);
app.use("/api/file", uploadRouter);

app.use((error, req, res) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("server is running at port 3000");
});
