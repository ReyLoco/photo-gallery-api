import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

/**
 * Multer is a module to upload files to a server folser
 */
const storage = multer.diskStorage({
  // destination: carpeta en la raiz para guardar las imágenes.
  destination: "uploads",
  // Nombre con el que se guardará la imagen.
  filename: (req, file, cb) => {
    // El módulo uuid crea un nombre aleatorio al que añadimos la extensión del archivo original.
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

export default multer({ storage });
