// const mongoose = require("mongoose");

// const ProfileSchema = new mongoose.Schema(
//   {
//     profileType: {
//       type: String,
//       enum: ["Boy", "Girl"],
//
//     },
//     fullName: {
//       type: String,
//
//       trim: true,
//     },
//     age: {
//       type: Number,
//
//       min: 18, // Minimum age restriction
//     },
//     gender: {
//       type: String,
//       enum: ["Male", "Female"],
//
//     },
//     location: {
//       type: String,
//
//     },
//     profession: {
//       type: String,
//
//     },
//     education: {
//       type: String,
//
//     },
//     religion: {
//       type: String,
//
//     },
//     caste: {
//       type: String,
//
//     },
//     language: {
//       type: String,
//
//     },
//     maritalStatus: {
//       type: String,
//       enum: ["Single", "Divorced", "Widowed"],
//
//     },
//     height: {
//       type: String,
//
//     },
//     bio: {
//       type: String,
//       maxlength: 500, // Restrict the length of the bio
//     },
//     image: {
//       type: String,
//
//     },
//     hobbies: {
//       type: [String], // List of hobbies
//     },
//     preferences: {
//       ageRange: {
//         min: { type: Number, default: 18 },
//         max: { type: Number, default: 40 },
//       },
//       location: {
//         type: String,
//
//       },
//       profession: {
//         type: String,
//
//       },
//       religion: {
//         type: String,
//
//       },
//       caste: {
//         type: String,
//
//       },
//     },
//     contactDetails: {
//       phone: {
//         type: String,
//
//       },
//       email: {
//         type: String,
//
//         unique: true,
//       },
//     },
//     accountStatus: {
//       type: String,
//       enum: ["Active", "Inactive", "Pending"],
//       default: "Pending",
//     },
//     dateCreated: {
//       type: Date,
//       default: Date.now,
//     },
//     isPremium: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const Profile = mongoose.model("Profile", ProfileSchema);

// module.exports = Profile;

const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    profileType: {
      type: String,
      enum: ["Boy", "Girl"],
    },
    fullName: {
      type: String,

      trim: true,
    },
    age: {
      type: Number,

      min: 18, // Minimum age restriction
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    location: {
      type: String,
    },
    profession: {
      type: String,
    },
    education: {
      type: String,
    },
    religion: {
      type: String,
    },
    caste: {
      type: String,
    },
    language: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Divorced", "Widowed"],
    },
    height: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 500, // Restrict the length of the bio
    },
    image: {
      type: String,
    },
    hobbies: {
      type: [String], // List of hobbies
    },
    preferences: {
      ageRange: {
        min: { type: Number, default: 18 },
        max: { type: Number, default: 40 },
      },
      location: {
        type: String,
      },
      profession: {
        type: String,
      },
      religion: {
        type: String,
      },
      caste: {
        type: String,
      },
    },
    contactDetails: {
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
    },
    accountStatus: {
      type: String,
      enum: ["Active", "Inactive", "Pending"],
      default: "Pending",
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
