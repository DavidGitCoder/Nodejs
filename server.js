const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
    const pathfile = path.join(__dirname, 'app.js');
    console.log(pathfile);
    //res.status(200).json({message:"Hi there! This is a server response."});
    //res.send("Hello from Express")
    //

    res.download(pathfile, (err) => {
        if (err) {
            console.log("Error during downloading the file:", err);
            res.status(500).send("Error downloading the file.");
        }
    });

})
app.listen(3000)
