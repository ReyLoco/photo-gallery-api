# Photo-Galelly-Api
Desarrollo de aplicación para backend para la gestión de fotografías.

## Pasos Iniciales.
### Crear carpeta de Trabajo
Añadir la carpeta de trabajo a Visual code y moverse déntro de ella en consola.

### Iniciar proyecto Angular.
`raiz/photo-gallery-api> npm init -y`.

## Instalar TypeScript, Express y configurar.
### Instalar Typescript.
`raiz/photo-gallery-api> npm install typescript -D`

### Inicar TypeScript y configurar.
Se crea el archivo _tsconfig.json_.

`raiz/photo-gallery-api> npx tsc --init`

### Instalar Express.
`raiz/photo-gallery-api> npm install express`

`raiz/photo-gallery-api> npm install @types/express -D`

### Instalar rimraf.
Permite la ejecución de _del_ o _rm_ según sea el SO.

`raiz/photo-gallery-api> npm install rimraf`

### Instalar nodemon.
Permite el reinicio del servidor con los cambios en los archivos.

`raiz/photo-gallery-api> npm install nodemon`

`raiz/photo-gallery-api> npm install ts-node`

Crear el archivo nodemon.json e incluir el código...

```
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": [
    "src/**/*.spec.ts"
  ],
  "exec": "ts-node"
}
```

### Instalar morgan.
En desarrollo permite ver mensajes por consola cuando se hacen llamadas al servidor.

`raiz/photo-gallery-api> npm install morgan`

`raiz/photo-gallery-api> npm install @types/morgan -D`

### Configurar.
Cambiar y configurar valores en el archivo _tsconfig.json_.

_target_ y _moduleResolution_

```
"target": "es2019"
"moduleResolution": "node" (Descomentar esta linea)
```

_outDir_ y _rootDir_

```
"outDir": "./dist/",      (Descomentar y modificar estas lineas)
"rootDir": "./src",
```

Añadir los scripts para inicializar el proyecto en _package.json_.

```
"scripts": {
    "build": "tsc",
    "clean": "rimraf dist",
    "start": "npm run build && node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
```

### Crear carpetas y archivos.

Crear estructura de carpetas y archivos iniciales.
~~~
/src
/src/index.tsc
/src/app.ts
/src/database.ts
/src/routes
/src/routes/index.ts
/src/models
/src/models/Photo.ts
src/libs
src/libs/multer.ts
src/controllers/photo.controllers.ts
/uploads
~~~

### Instalar mongoose.
Para la conexión a la base de datos MongoDB

`raiz/photo-gallery-api> npm install mongoose`

`raiz/photo-gallery-api> npm install @types/mongoose -D`

### Instalar multer
Permite la subida de imágenes al servidor.

`raiz/photo-gallery-api> npm install multer`

`raiz/photo-gallery-api> npm install @types/multer -D`

### Instalar uuid
Módulo para crear aleatoriamente tokens/id para la subida de archivos

`raiz/photo-gallery-api> npm install uuid`

### Instalar
Permite usar promesas para el borrado de archivos del file system (fs)

`raiz/photo-gallery-api> npm install uuid`

`raiz/photo-gallery-api> npm install @types/fs-extra -D`

### Comentarios
- En models se crean los modelos de datos (schema) con su interface. 
- En routes se crea por cada modelo/interface las llamadas a los métodos incluidos en el controlador
- En controllers están los controladores por cada modelo que contiene los métodos que llaman - al server (get, delete, put, post).
- En libs está el archivo para la configuración de la librería multers que es la que permitirá subir archivos al servidor a través del file systems
