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

const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Visa = sequelize.define('Visa', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placeOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maritalStatus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    residentialAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    purposeOfVisit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intendedDateOfArrival: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    intendedDurationOfStay: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressInSriLanka: {
        type: DataTypes.STRING,
        allowNull: false
    },
    previousVisitsToSriLanka: {
        type: DataTypes.STRING,
        allowNull: true
    },
    recentPassport: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scannedCopyOfPassportDataPage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anyOtherSupportingDocuments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    trueAndAccurate: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sriLankanLaw: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    agreeTermsAndConditions: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Visa;
