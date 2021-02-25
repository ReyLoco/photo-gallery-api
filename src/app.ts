import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";
import path from "path";

const app = express();
/*****************
// settings
******************/
// Se define el puerto del servidor
app.set("port", process.env.PORT || 3000);

/*****************
// middlewares
******************/
// Para ver mensajes del servidor
app.use(morgan("dev"));
// Para la traducción de documentos json procedentes del servidor.
app.use(express.json());

/*****************
// routes
******************/
// cada vez que llega a la aplicación en el server la ruta /api se manejará con el enrutador indexRoutes
app.use("/api", indexRoutes);

// Carpeta dónde se almacenarán los archivos de imagen. Debe estar fuera de Dist y de SRC para estar accesible a des y a pro
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
