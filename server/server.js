import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

const app = express();

await connectDB();

//middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working."));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log("Server is running on PORT : " + PORT);
});

export default app;
