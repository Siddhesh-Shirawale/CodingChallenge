const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const Company = require("../models/company");

router.get("/", (req, res, next) => {
   const currentPage = req.query.page || 1;
   const perPage = 5;
   let totalItems;
   Company.find()
      .countDocuments()
      .then((count) => {
         totalItems = count;
         return Company.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
      })
      .then((company) => {
         res.status(200).json({
            message: "Fetched company details successfully.",
            company: company,
            totalItems: totalItems,
         });
      })
      .catch((err) => {
         console.log(err.message);
      });
});

router.post("/", (req, res) => {
   const newRecord = new Company({
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      phone: req.body.phone,
      logo: req.body.logo,
      state: req.body.state,
      city: req.body.city,
   });

   newRecord
      .save()
      .then((docs) => {
         res.status(201).send(docs);
      })
      .catch((err) => {
         console.log(
            ` Error while adding company details ${JSON.stringify(
               err,
               undefined,
               2
            )}`
         );
      });
});

router.put("/:id", (req, res) => {
   if (!ObjectID.isValid(req.params.id))
      return res
         .status(400)
         .send(`No record with given id :   ${req.params.id}`);

   const updatedRecord = {
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      phone: req.body.phone,
      logo: req.body.logo,
      state: req.body.state,
      city: req.body.city,
   };

   Company.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true }
   )
      .then((docs) => {
         res.send(docs);
      })
      .catch((err) => {
         console.log(`Error while updating company details : ${err.message}`);
      });
});

router.delete("/:id", (req, res) => {
   if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("No record with given id : " + req.params.id);

   Company.findByIdAndRemove(req.params.id).then((docs) => {
      res.send(docs).catch((err) => {
         console.log(`Error while deleting company details : ${err.message}`);
      });
   });
});
module.exports = router;
