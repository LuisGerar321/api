const express = require("express");
const router = express.Router();

const handleRead = (req, res) => {
    res.send(`<h2> Get all workout sheets.</h2>`);
};

const handleUpdate = (req, res) => {
    res.send("<h2>Edit workout by id.</h2>")
};

const handleCreate = (req, res) => {
    res.send(`<h2>Creating a new workout.</h2>`);
};

const handleModify = (req, res) => {
    res.send("<h2>Edit a fiel into workout by id.</h2>");
};

const handleDelete = (req, res) => {
    res.send("<h2>Deleting a workout.</h2>");
}

module.exports = {
    handleCreate,
    handleDelete,
    handleModify,
    handleRead,
    handleUpdate,
};