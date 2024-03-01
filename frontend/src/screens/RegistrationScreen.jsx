import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/HeaderNoLogo";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";

const RegistrationScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    owner: {
      name: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      emergencyContact: {
        name: "",
        phone: "",
      },
    },
    dog: {
      name: "",
      breed: "",
      age: "",
      gender: "",
      spayedNeutered: false,
      weight: "",
      picture: "",
    },
    health: {
      vaccinations: [{ type: "", date: "" }],
      allergies: [""],
      medicalConditions: [""],
      vetInfo: {
        name: "",
        clinic: "",
        phone: "",
      },
    },
    behavior: {
      socialization: "",
      issues: [""],
      training: [""],
      favoriteActivities: [""],
    },
    servicePreferences: {
      preferredService: "",
      bathService: false,
      preferredDaysTimes: "",
      specialInstructions: "",
    },
    consentAgreements: {
      liabilityWaiver: false,
      photoRelease: false,
      cancellationPolicy: false,
    },
    additionalNotes: "",
  });

  const addVaccination = () => {
    setFormData({
      ...formData,
      health: {
        ...formData.health,
        vaccinations: [...formData.health.vaccinations, { type: "", date: "" }],
      },
    });
  };

  const removeVaccination = (index) => {
    const updatedVaccinations = formData.health.vaccinations.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      health: {
        ...formData.health,
        vaccinations: updatedVaccinations,
      },
    });
  };

  const handleVaccinationChange = (index, field, value) => {
    const updatedVaccinations = formData.health.vaccinations.map(
      (vaccination, i) => {
        if (i === index) {
          return { ...vaccination, [field]: value };
        }
        return vaccination;
      }
    );
    setFormData({
      ...formData,
      health: {
        ...formData.health,
        vaccinations: updatedVaccinations,
      },
    });
  };

  const addHealthField = (fieldName) => {
    const updatedFields = {
      ...formData.health,
      [fieldName]: [...formData.health[fieldName], ""],
    };
    setFormData({ ...formData, health: updatedFields });
  };

  const removeHealthField = (fieldName, index) => {
    const updatedFields = formData.health[fieldName].filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      health: { ...formData.health, [fieldName]: updatedFields },
    });
  };

  const handleHealthFieldChange = (fieldName, index, value) => {
    const updatedFields = formData.health[fieldName].map((field, i) => {
      if (i === index) {
        return value;
      }
      return field;
    });
    setFormData({
      ...formData,
      health: { ...formData.health, [fieldName]: updatedFields },
    });
  };

  // const addBehaviorField = (fieldName) => {
  //   const updatedFields = {
  //     ...formData.behavior,
  //     [fieldName]: [...formData.behavior[fieldName], ""],
  //   };
  //   setFormData({ ...formData, behavior: updatedFields });
  // };

  // const removeBehaviorField = (fieldName, index) => {
  //   const updatedFields = formData.behavior[fieldName].filter(
  //     (_, i) => i !== index
  //   );
  //   setFormData({
  //     ...formData,
  //     behavior: { ...formData.behavior, [fieldName]: updatedFields },
  //   });
  // };

  // const handleBehaviorFieldChange = (fieldName, index, value) => {
  //   const updatedFields = formData.behavior[fieldName].map((field, i) => {
  //     if (i === index) {
  //       return value;
  //     }
  //     return field;
  //   });
  //   setFormData({
  //     ...formData,
  //     behavior: { ...formData.behavior, [fieldName]: updatedFields },
  //   });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Submission successful", data);
        navigate("/thankyou");
      } else {
        const errorData = await response.json();
        console.error("Submission failed: ", errorData);
        toast.error(
          "Submission failed. Please contact us at info@redsrunaround.com for assistance!",
          {
            className: "toast-message",
          }
        );
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error(
        "Submission failed. Please contact us at info@redsrunaround.com for assistance!",
        {
          className: "toast-message",
        }
      );
    }
  };

  return (
    <>
      <Header />
      <br />
      <h1 className="text-center">Registration</h1>
      <h3 className="text-center">PLEASE READ: </h3>
      <Row>
        <Col></Col>
        <Col md={8}>
          <p className="text-center">
            We're thrilled to introduce our new dog concierge service, designed
            to bring joy and adventure to your furry friend's life. As part of
            our pilot program, we're inviting a select group of participants to
            experience our services firsthand. This is a unique opportunity for
            us to fine-tune our offerings, ensuring we provide the best possible
            experience for you and your dog.
          </p>

          <p className="text-center">
            Your feedback during this phase will be invaluable in shaping our
            services. Please note, while we are committed to excellence, this
            pilot program allows us to test and refine our processes. We
            appreciate your understanding and patience if we make adjustments
            along the way.
          </p>

          <p className="text-center">
            Thank you for joining us on this exciting journey. We can't wait to
            make a positive difference in your and your dog's life!
          </p>

          <p className="text-center">
            <strong>
              Our liability waiver can be found{" "}
              <Link className="link-deco" to="/liabilitywaiver">
                here
              </Link>
              . Please read and understand the waiver before proceeding with the
              registration form. By submitting this form, you are acknowledging
              that you have read and agree to the terms of the waiver.
            </strong>
          </p>
          <p className="text-center">
            Final note: If you are chosen to participate in our pilot program,
            you will be contacted to set up a meet and greet with our team.
            Thank you for your interest in Red's Runaround!
          </p>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <h4>Owner Information</h4>
          <Form.Group className="pb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.owner.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: { ...formData.owner, name: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.owner.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: { ...formData.owner, email: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={formData.owner.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: { ...formData.owner, phone: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Address (where dog will be picked up from)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              value={formData.owner.address.street}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    address: {
                      ...formData.owner.address,
                      street: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="City"
              value={formData.owner.address.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    address: {
                      ...formData.owner.address,
                      city: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="State"
              value={formData.owner.address.state}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    address: {
                      ...formData.owner.address,
                      state: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="Zip Code"
              value={formData.owner.address.zipCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    address: {
                      ...formData.owner.address,
                      zipCode: e.target.value,
                    },
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={formData.owner.emergencyContact.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    emergencyContact: {
                      ...formData.owner.emergencyContact,
                      name: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="Phone"
              value={formData.owner.emergencyContact.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  owner: {
                    ...formData.owner,
                    emergencyContact: {
                      ...formData.owner.emergencyContact,
                      phone: e.target.value,
                    },
                  },
                })
              }
            />
          </Form.Group>
          <h4>Dog Information</h4>
          <Form.Group className="pb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your dog's name"
              value={formData.dog.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, name: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your dog's breed"
              value={formData.dog.breed}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, breed: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your dog's age"
              value={formData.dog.age}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, age: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={formData.dog.gender}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, gender: e.target.value },
                })
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Check
              type="checkbox"
              label="Spayed/Neutered"
              checked={formData.dog.spayedNeutered}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, spayedNeutered: e.target.checked },
                })
              }
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your dog's weight"
              value={formData.dog.weight}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dog: { ...formData.dog, weight: e.target.value },
                })
              }
            />
          </Form.Group>

          <h4>Health Information</h4>
          <Form.Label>Vaccinations</Form.Label>

          {formData.health.vaccinations.map((vaccination, index) => (
            <Row key={index}>
              <Col>
                <Form.Group className="pb-4">
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    value={vaccination.type}
                    onChange={(e) =>
                      handleVaccinationChange(index, "type", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="pb-4">
                  <Form.Control
                    type="date"
                    value={vaccination.date}
                    onChange={(e) =>
                      handleVaccinationChange(index, "date", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => removeVaccination(index)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button variant="secondary" onClick={addVaccination}>
            Add Vaccination
          </Button>
          <br />
          <br />
          <Form.Group className="pb-4">
            <Form.Label>Allergies</Form.Label>
            {formData.health.allergies.map((allergy, index) => (
              <Row key={index}>
                <Col>
                  <Form.Control
                    type="text"
                    value={allergy}
                    onChange={(e) =>
                      handleHealthFieldChange(
                        "allergies",
                        index,
                        e.target.value
                      )
                    }
                  />
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => removeHealthField("allergies", index)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            <br />
            <Button
              variant="secondary"
              onClick={() => addHealthField("allergies")}
            >
              Add Allergy
            </Button>
          </Form.Group>
          <Form.Label>Medical Conditions</Form.Label>
          <Form.Group className="pb-4">
            {formData.health.medicalConditions.map((condition, index) => (
              <Row key={index}>
                <Col>
                  <Form.Control
                    type="text"
                    value={condition}
                    onChange={(e) =>
                      handleHealthFieldChange(
                        "medicalConditions",
                        index,
                        e.target.value
                      )
                    }
                  />
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() =>
                      removeHealthField("medicalConditions", index)
                    }
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            <br />
            <Button
              variant="secondary"
              onClick={() => addHealthField("medicalConditions")}
            >
              Add Medical Condition
            </Button>
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label>Vet Information</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={formData.health.vetInfo.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  health: {
                    ...formData.health,
                    vetInfo: {
                      ...formData.health.vetInfo,
                      name: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="Clinic"
              value={formData.health.vetInfo.clinic}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  health: {
                    ...formData.health,
                    vetInfo: {
                      ...formData.health.vetInfo,
                      clinic: e.target.value,
                    },
                  },
                })
              }
            />
            <Form.Control
              type="text"
              placeholder="Phone"
              value={formData.health.vetInfo.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  health: {
                    ...formData.health,
                    vetInfo: {
                      ...formData.health.vetInfo,
                      phone: e.target.value,
                    },
                  },
                })
              }
            />
          </Form.Group>
          {/* <h4>Behavior Information</h4>
        <Form.Group className="pb-4">
          <Form.Label>Socialization</Form.Label>
          <Form.Control
            as="textarea"
            value={formData.behavior.socialization}
            onChange={(e) =>
              setFormData({
                ...formData,
                behavior: {
                  ...formData.behavior,
                  socialization: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group className="pb-4">
          <Button
            variant="secondary"
            onClick={() => addBehaviorField("issues")}
          >
            Add Issue
          </Button>
          {formData.behavior.issues.map((issue, index) => (
            <Row key={index}>
              <Col>
                <Form.Control
                  type="text"
                  value={issue}
                  onChange={(e) =>
                    handleBehaviorFieldChange("issues", index, e.target.value)
                  }
                />
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => removeBehaviorField("issues", index)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form.Group>
        <Form.Group className="pb-4">
          <Button
            variant="secondary"
            onClick={() => addBehaviorField("training")}
          >
            Add Training
          </Button>
          {formData.behavior.training.map((training, index) => (
            <Row key={index}>
              <Col>
                <Form.Control
                  type="text"
                  value={training}
                  onChange={(e) =>
                    handleBehaviorFieldChange("training", index, e.target.value)
                  }
                />
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => removeBehaviorField("training", index)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form.Group> */}
          {/* <Form.Group className="pb-4">
          <Button
            variant="secondary"
            onClick={() => addBehaviorField("favoriteActivities")}
          >
            Add Favorite Activity
          </Button>
          {formData.behavior.favoriteActivities.map((activity, index) => (
            <Row key={index}>
              <Col>
                <Form.Control
                  type="text"
                  value={activity}
                  onChange={(e) =>
                    handleBehaviorFieldChange(
                      "favoriteActivities",
                      index,
                      e.target.value
                    )
                  }
                />
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() =>
                    removeBehaviorField("favoriteActivities", index)
                  }
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form.Group> */}
          {/* <h4>Service Preferences</h4>
        <Form.Group className="pb-4">
          <Form.Label>Preferred Service</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred service"
            value={formData.servicePreferences.preferredService}
            onChange={(e) =>
              setFormData({
                ...formData,
                servicePreferences: {
                  ...formData.servicePreferences,
                  preferredService: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group className="pb-4">
          <Form.Check
            type="checkbox"
            label="Bath Service"
            checked={formData.servicePreferences.bathService}
            onChange={(e) =>
              setFormData({
                ...formData,
                servicePreferences: {
                  ...formData.servicePreferences,
                  bathService: e.target.checked,
                },
              })
            }
          />
        </Form.Group> */}
          {/* <Form.Group className="pb-4">
          <Form.Label>Preferred Days/Times</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred days/times"
            value={formData.servicePreferences.preferredDaysTimes}
            onChange={(e) =>
              setFormData({
                ...formData,
                servicePreferences: {
                  ...formData.servicePreferences,
                  preferredDaysTimes: e.target.value,
                },
              })
            }
          />
        </Form.Group> */}

          <h4>Consent Agreements</h4>
          <Form.Group className="pb-4">
            <Form.Check
              type="checkbox"
              label="Liability Waiver (link to waiver up top)"
              checked={formData.consentAgreements.liabilityWaiver}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  consentAgreements: {
                    ...formData.consentAgreements,
                    liabilityWaiver: e.target.checked,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group className="pb-4">
            <Form.Check
              type="checkbox"
              label="Photo Release (By checking this box, you agree to allow Red's Runaround to use photos of your dog for promotional purposes)"
              checked={formData.consentAgreements.photoRelease}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  consentAgreements: {
                    ...formData.consentAgreements,
                    photoRelease: e.target.checked,
                  },
                })
              }
            />
          </Form.Group>
          {/* <Form.Group className="pb-4">
            <Form.Check
              type="checkbox"
              label="Cancellation Policy"
              checked={formData.consentAgreements.cancellationPolicy}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  consentAgreements: {
                    ...formData.consentAgreements,
                    cancellationPolicy: e.target.checked,
                  },
                })
              }
            />
          </Form.Group> */}
          <Form.Group className="pb-4">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={formData.additionalNotes}
              rows={5}
              onChange={(e) =>
                setFormData({ ...formData, additionalNotes: e.target.value })
              }
            />
            <Form.Label>Special Instructions</Form.Label>
            <Form.Control
              as="textarea"
              value={formData.servicePreferences.specialInstructions}
              rows={5}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  servicePreferences: {
                    ...formData.servicePreferences,
                    specialInstructions: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};
export default RegistrationScreen;
