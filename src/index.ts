import app from "./app";
import { startConnection } from "./database";

async function main() {
  // Antes de arrancar el servidor conectamos con la BD
  startConnection();

  // Iniciamos el servidor
  await app.listen(app.get("port"));
  console.log("Server on port ", app.get("port"));
}

main();
