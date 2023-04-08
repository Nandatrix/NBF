const express = require("express");
const cors = require("cors");
const api = express();
const PORT = 3333;

api.use(express.json());
api.use(cors());

let data = [];

api.get("/getData", (req, res) => {
    res.json(data);
});

api.post("/post", (req, res) => {
    data.push(req.body);
    console.log(data);
});

api.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));