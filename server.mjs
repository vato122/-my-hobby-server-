import dotenv from "dotenv";
import express from "express";
import cors from "cors";  



dotenv.config();

const app = express();


const PORT = 4000;

app.use(cors());
app.use(express());

app.get("/", (req,res) => {
    res.json({ status: "ok", message: "server is running" });
});

app.get("/my-hobby", (req,res) => {
    res.json({ hobby: "to play waterpolo"});
});




app.listen(PORT, ()=> {
    console.log(`server listening on http://localhost:${PORT}`);
});