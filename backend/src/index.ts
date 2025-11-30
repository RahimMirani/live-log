import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users";

dotenv.config(); // ENV FILE IS MISSING → SERVER SHOULD THROW

const app = express();
app.use(express.json());

// ❌ purposely wrong: API prefix missing a slash
app.use("api/users", userRoutes);

const PORT = process.env.PORT || 3000;

// ❌ error: missing callback & logger dependency issue
app.listen(PORT);
console.log("Server listening on PORT:", PORT);
