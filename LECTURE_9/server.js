const express = require("express");
const app = express();

const users = [
    { id: 1, name: "Kartik rathore", email: "GZDlC@example.com" },
    { id: 2, name: "Shivam Singh", email: "ravi@com" },
    { id: 3, name: "Aman Chauhan", email: "alex@com" },
    { id: 4, name: "Vishu Tomar", email: "vasu@com" },
];

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});