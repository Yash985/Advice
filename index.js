import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.adviceslip.com/advice";

app.use(express.static("public"));

app.get("/", async(req, res) => {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
        advice: result.data.slip.advice
    });
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});