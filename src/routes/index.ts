import { Router } from "express";
import multer from "../libs/multer";

const router = Router();

import { createPhoto, getPhotos, getPhoto, updatePhoto, deletePhoto} from "../controllers/photo.controllers";

// Definimos las rutas de la aplicación.
router.route('/photos')
.get(getPhotos)
.post(multer.single("image"), createPhoto);

router.route('/photos/:id')
.get(getPhoto)
.put(updatePhoto)
.delete(deletePhoto);

export default router;
