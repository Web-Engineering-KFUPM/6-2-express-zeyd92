import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";


const app = express();
const PORT = 3000;
app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });




    app.use(cors());



    app.get("/", (req, res) => {
      res.send("Welcome to the Quote Generator API");
    });

    app.get("/api/quote", (req, res) => {
      const quote = getRandomQuote();
      res.json({ quote });
    });



    