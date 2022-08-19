const express = require("express");
const axios = require("axios");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-- Route Handlers --//

//-- Routes --//

//-- Production Route --//
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function (req, res) {
        res.sendFile(path.joion(__dirname, "client/build", "index.html"));
    });
}

//-- Runs server --//
app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server running on port ${port}`);
});
