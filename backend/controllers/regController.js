import asyncHandler from "../middleware/asyncHandler.js";
import Registration from "../models/regModel.js";

// users will only be able to submit a registration form.
// Admins will be able to view all registrations, view a single registration, update a registration, and delete a registration.
// things may change after the pilot program is run.

const getRegistrations = asyncHandler(async (req, res) => {
  const registrations = await Registration.find({});
  res.json(registrations);
});

const getRegistrationById = asyncHandler(async (req, res) => {
  const registration = await Registration.findById(req.params.id);

  if (registration) {
    res.json(registration);
  } else {
    res.status(404);
    throw new Error("Registration not found");
  }
});

const createRegistration = asyncHandler(async (req, res) => {
  const registration = new Registration({
    owner: req.body.owner,
    dog: req.body.dog,
    health: req.body.health,
    behavior: req.body.behavior,
    servicePreferences: req.body.servicePreferences,
    consentAgreements: req.body.consentAgreements,
    additionalNotes: req.body.additionalNotes,
  });

  const createdRegistration = await registration.save();
  res.status(201).json(createdRegistration);
});

const updateRegistration = asyncHandler(async (req, res) => {
  const {
    owner,
    dog,
    health,
    behavior,
    servicePreferences,
    consentAgreements,
    additionalNotes,
  } = req.body;

  const registration = await Registration.findById(req.params.id);

  if (registration) {
    registration.owner = owner;
    registration.dog = dog;
    registration.health = health;
    registration.behavior = behavior;
    registration.servicePreferences = servicePreferences;
    registration.consentAgreements = consentAgreements;
    registration.additionalNotes = additionalNotes;

    const updatedRegistration = await registration.save();
    res.json(updatedRegistration);
  } else {
    res.status(404);
    throw new Error("Registration not found");
  }
});

const deleteRegistration = asyncHandler(async (req, res) => {
  const registration = await Registration.findById(req.params.id);

  if (registration) {
    await registration.deleteOne({ _id: registration._id });
    res.json({ message: "Registration removed" });
  } else {
    res.status(404);
    throw new Error("Registration not found");
  }
});

export {
  getRegistrations,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
