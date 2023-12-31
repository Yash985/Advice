import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.adviceslip.com/advice";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            advice: result.data.slip.advice
        });
    } catch (error) {
        console.log(error.result.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});