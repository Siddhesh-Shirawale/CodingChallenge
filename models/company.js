const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      phone: {
         type: String,
         required: true,
      },
      logo: {
         type: String,
         required: true,
      },
      state: {
         type: String,
         required: true,
      },
      city: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
