const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../public/Members");
const { check, validationResult } = require("express-validator");
const db = require("../../db/mongodb");
const { compose } = require("redux");

const tablename = "test";
// Get all members-------

router.get("/getAllUser", (req, res) => {
  db.get()
    .collection(tablename)
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Get single member-----

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of  ${req.params.id}` });
  }
});

// Create Member-------
router.post("/addUser", (req, res) => {
  console.log("CHECKING body data : ", req.body);
  db.get()
    .collection(tablename)
    .findOne({ email: req.body.email }, (err, resdata) => {
      if (err) {
        return res.json({
            statusCode : 500,
          status: "fail",
          response: "some error occur" + err,
        });
      }
      
      if(resdata){
        return res.json({
            statusCode : 403,
            status: "fail",
            response: "This email already exits",
          });
      } else {
        db.get()
        .collection(tablename)
        .insertOne(req.body, (err) => {
          console.log(err);
          res.json({
            statusCode : 200,
            status: "success",
            response: "data inserted",
          });
        });
      }
    });
});

// Update Member

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of  ${req.params.id}` });
  }
});

// Delete Member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json({ msg: "Member Deleted", members: members.filter((member) => member.id !== parseInt(req.params.id)) });
  } else {
    res.status(400).json({ msg: `No member with the id of  ${req.params.id}` });
  }
});

module.exports = router;
