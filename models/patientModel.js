const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    rfid: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },

    fname: {
      type: String,
    },
    mname: {
      type: String,
    },
    lname: {
      type: String,
    },
    suffix: {
      type: String,
    },

    civilstat: {
      type: String,
    },

    age: {
      type: String,
    },
    bdate: {
      type: String,
    },
    add: {
      type: String,
    },

    addbrgy: {
      type: String,
    },
    addmun: {
      type: String,
    },
    addprov: {
      type: String,
    },
    occupation: {
      type: String,
    },
    ocadd: {
      type: String,
    },
    occon: {
      type: String,
    },
    con_num1: {
      type: String,
    },
    con_num2: {
      type: String,
    },
    con_tel1: {
      type: String,
    },
    con_tel2: {
      type: String,
    },
    con_email: {
      type: String,
    },
    pm_name: {
      type: String,
    },
    pm_age: {
      type: String,
    },
    pm_bdate: {
      type: String,
    },
    pm_add: {
      type: String,
    },
    pm_num: {
      type: String,
    },
    pm_tel: {
      type: String,
    },
    pm_email: {
      type: String,
    },
    pm_fo: {
      type: String,
    },
    pm_foc: {
      type: String,
    },
    pm_foadd: {
      type: String,
    },
    guar_fname: {
      type: String,
    },
    guar_mname: {
      type: String,
    },
    guar_lname: {
      type: String,
    },
    guar_suffix: {
      type: String,
    },
    guar_sex: {
      type: String,
    },
    guar_civilstat: {
      type: String,
    },
    guar_age: {
      type: String,
    },
    guar_bdate: {
      type: String,
    },
    guar_add: {
      type: String,
    },
    guar_addbrgy: {
      type: String,
    },
    guar_addmun: {
      type: String,
    },

    guar_addprov: {
      type: String,
    },
    guar_num: {
      type: String,
    },
    guar_tel: {
      type: String,
    },
    guar_email: {
      type: String,
    },
    guar_go: {
      type: String,
    },
    guar_goc: {
      type: String,
    },
    guar_goadd: {
      type: String,
    },
    guar_relationship: {
      type: String,
    },
    guar_description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patients", patientSchema);

module.exports = Patient;
