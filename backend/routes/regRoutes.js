import express from "express";
import path from "path";
import multer from "multer";
import fs from "fs";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = `frontend/public/uploads/registrations`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename(req, file, cb) {
    cb(
      null,
      `registration-${file.fieldname}-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only!"), false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");

import {
  getRegistrations,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} from "../controllers/regController.js";

import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router
  .route("/")
  .get(protect, admin, getRegistrations)
  .post(createRegistration);
router
  .route("/:id")
  .get(protect, admin, checkObjectId, getRegistrationById)
  .put(protect, admin, checkObjectId, updateRegistration)
  .delete(protect, admin, checkObjectId, deleteRegistration);

router.post("/u", protect, admin, (req, res) => {
  uploadSingleImage(req, res, function (err) {
    const imagePath = `uploads/events/fullsize/${req.file.filename}`;

    if (err) {
      return res.status(400).send({ message: err.message });
    } else {
      res.status(201).send({
        message: "Image uploaded successfully",
        image: imagePath,
      });
    }
  });
});

export default router;
