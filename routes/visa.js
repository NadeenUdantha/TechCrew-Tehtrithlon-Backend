const express = require('express');
const Visa = require('../models/visa');

const router = express.Router();

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
    const visa = await Visa.create({
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
