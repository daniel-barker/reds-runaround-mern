import mongoose from "mongoose";

const vaccinationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
});

const registrationSchema = mongoose.Schema(
  {
    owner: {
      name: String,
      email: String,
      phone: String,
      address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
      },
      emergencyContact: {
        name: String,
        phone: String,
      },
    },
    dog: {
      name: String,
      breed: String,
      age: Number,
      gender: String,
      spayedNeutered: Boolean,
      weight: Number,
      picture: String,
    },
    health: {
      vaccinations: [vaccinationSchema],
      allergies: [String],
      medicalConditions: [String],
      vetInfo: {
        name: String,
        clinic: String,
        phone: String,
      },
    },
    behavior: {
      socialization: String,
      issues: [String],
      training: [String],
      favoriteActivities: [String],
    },
    servicePreferences: {
      preferredService: String,
      bathService: Boolean,
      preferredDaysTimes: String,
    },
    consentAgreements: {
      liabilityWaiver: Boolean,
      photoRelease: Boolean,
      cancellationPolicy: Boolean,
    },
    additionalNotes: String,
  },
  { timestamps: true }
);

const RegistrationSchema = mongoose.model("Registration", registrationSchema);

export default RegistrationSchema;
