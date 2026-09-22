const express = require("express");
const app = express();

const users = [
    { id: 1, name: "Devendra", email: "GZDlC@example.com" },
    { id: 2, name: "Ravi", email: "ravi@com" },
    { id: 3, name: "alex", email: "alex@com" },
    { id: 4, name: "vasu", email: "vasu@com" },
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