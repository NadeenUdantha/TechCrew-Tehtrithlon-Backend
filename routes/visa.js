const express = require('express');
const VisaApplication = require('../models/visa_application');

const router = express.Router();

// {
//     "fullName" : "Kasun Udara",
//     "DOB" : 2001-03-20,
//     "gender" : "Male",
//     "nationality" : "Sri Lankan", 
//     "placeOfBirth" : "Galle",
//     "maritalStatus" : "Married", 
//     "residentialAddress" : "3/29, Kalugddghg,gsdhgshdg",
//     "phoneNumber" : "0767200006",
//     "emailAddress" : "kasunu2001@gmail.com",
//     "purposeOfVisit" : "fjdfdfdjf",
//     "intendedDateOfArrival" : "2024-09-12",
//     "intendedDurationOfStay" : "2 Weeks", 
//     "addressInSriLanka" : "dhjhdjfhjdhfjdh",
//     "previousVisitsToSriLanka" : "shdssdhd", 
//     "recentPassport" : "hdjdfhjdhfdhfjdfjdhfjdhfjd",
//     "scannedCopyOfPassportDataPage" : "hdffhfjhdjfhj",
//     "AnyOtherSupportingDocuments" : "ghghghghghghgh",
//     "trueAndAccurate" : True,
//     "sriLankanLaw" : True,
//     "agreeTermsAndConditions" : True,
//     "signature" : "gfgfgffgfhjhjhkhk"
//  }

router.post('/create', async (req, res) => {
  const {
    fullName,
    DOB,
    gender,
    nationality,
    placeOfBirth,
    maritalStatus,
    residentialAddress,
    phoneNumber,
    emailAddress,
    purposeOfVisit,
    intendedDateOfArrival,
    intendedDurationOfStay,
    addressInSriLanka,
    previousVisitsToSriLanka,
    recentPassport,
    scannedCopyOfPassportDataPage,
    AnyOtherSupportingDocuments,
    trueAndAccurate,
    sriLankanLaw,
    agreeTermsAndConditions,
    signature
  } = req.body;

  try {
    const visa = await VisaApplication.create({
      fullName,
      DOB,
      gender,
      nationality,
      placeOfBirth,
      maritalStatus,
      residentialAddress,
      phoneNumber,
      emailAddress,
      purposeOfVisit,
      intendedDateOfArrival,
      intendedDurationOfStay,
      addressInSriLanka,
      previousVisitsToSriLanka,
      recentPassport,
      scannedCopyOfPassportDataPage,
      AnyOtherSupportingDocuments,
      trueAndAccurate,
      sriLankanLaw,
      agreeTermsAndConditions,
      signature
    });
    res.status(200).json(visa);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
