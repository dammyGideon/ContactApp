const express = require("express");
const router = express.Router();
const {
   
    getContacts,
    createContent,
    getContact,
    updateContact,
    deleteContact

    } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getContacts).post(createContent);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;