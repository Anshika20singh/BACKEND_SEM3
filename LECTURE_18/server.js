const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        // res.status(500).json({success:false, message: "Something went wrong!"});
        next(error);   
        // pass the error to thr error handling middleware
    }
});

// app.get('/', (req, res) => {
//     try {
//         throw new Error("Something went wrong!");
//     } catch (error) {
//         res.status(500).json({success:false, message: error.message});
//     }
// });

app.get("/age-check/:age", (req, res,next) => {
    // let age = 17;
    let age = req.params.age;
    try{
        if(age<18){
            throw new Error("You are not eligible to vote");
        }else{
            res.send("You are eligible to vote");
        }
    }catch(error) {
        // res.status(500).json({success:false, message: "Age is less than 18"});
        next(error);
    }
});

// app.get("/age-check/:age", (req, res) => {
//     // let age = 17;
//     let age = req.params.age;
//     try{
//         if(age<18){
//             throw new Error("You are not eligible to vote");
//         }else{
//             res.send("You are eligible to vote");
//         }
//     }catch(error) {
//         res.status(500).json({success:false, message: error.message});
        // next(error); 

//     }
// });

app.use((err, req, res, next) => {
    res.status(500).json({success:false, message: err.message});
});


// invalid route middleware - ye humesha code ke last ma likhenge kyuki phale likhenge to ye sabse phale execute hoga aur ye 404 error dega
// iske baad kuch bhi nhi chalta
app.use((req, res) => {
    res.status(404).json({success:false, message: "Route not found"});
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));