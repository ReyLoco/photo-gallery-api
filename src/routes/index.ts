// Este módulo sirve para declarar las rutas de la aplicación, en este caso, para las llamadas a BD.
import { Router } from "express";
import multer from "../libs/multer";

const router = Router();
// Debemos importar todos los métodos del controlador.
import { createPhoto, getPhotos, getPhoto, updatePhoto, deletePhoto } from "../controllers/photo.controllers";

// Rutas que no necesitan id.
router.route("/photos")
    .get(getPhotos)
    .post(multer.single("image"), createPhoto);

// Rutas que llevan id.
router.route("/photos/:id")
    .get(getPhoto)
    .put(updatePhoto)
    .delete(deletePhoto);

export default router;
