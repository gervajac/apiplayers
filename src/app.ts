import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes";
import db from "./config/mongo";

const middleware = require("./middleware")
const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

db().then(() => console.log("Conection ready"))
app.use(middleware.decodeToken)
app.get("/api/todos", (req, res) => {

    console.log(req.headers);

    return res.json({
        todos: [
            {
                title: "task1"
            },
            {
                title: "task2"
            },
        ]   
    });
});

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));