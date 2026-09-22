const express = require('express');
const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

// Age Check Route
app.get('/age-check/:age', (req, res) => {
    try {
        let age = Number(req.params.age);

        if (age < 18) {
            throw new Error("You are not eligible to vote");
        } else {
            res.send("You are eligible to vote");
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Age is less than 18"
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});