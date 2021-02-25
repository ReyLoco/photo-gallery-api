import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

// destination: carpeta de almacenamiento de imágenes que está en el raiz
// filename: Nombre con el que se guardará la imagen.
// uuid: módulo para nombrar aleatoriamente un archivo al que añadimos la extensión del archivo original.
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

export default multer({ storage });
