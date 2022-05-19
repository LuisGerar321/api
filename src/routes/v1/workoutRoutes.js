const express = require("express");
const {
    handleCreate,
    handleDelete,
    handleModify,
    handleRead,
    handleUpdate,
} = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", handleRead);
router.post("/", handleCreate);
router.patch("/:id", handleModify);
router.put("/:id", handleUpdate);
router.delete("/:id", handleDelete)

module.exports = router;