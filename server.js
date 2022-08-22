const express = require("express");
const axios = require("axios");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = {
    savings: {
        transactions: [
            {
                amount: 100,
                operation: "add",
                date: "20/08/2022",
            },
            {
                amount: 3.33,
                operation: "add",
                date: "20/08/2022",
            },
        ],
        total: 103.33,
    },
    uberTax: {
        transactions: [],
        total: 0,
    },
    carExpenses: {
        transactions: [
            {
                amount: 200,
                operation: "add",
                date: "20/08/2022",
            },
            {
                amount: 3,
                operation: "add",
                date: "20/08/2022",
            },
        ],
        total: 203,
    },
    petrol: {
        transactions: [],
        total: 0,
    },
    loans: {
        transactions: [],
        total: 0,
    },
};

//-- Route Handlers --//
const getInitialData = async (req, res) => {
    console.log("CMONNN");
    return res.status(200).send({
        response: db,
    });
};

//-- Routes --//
app.get("/initialData", getInitialData);

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
