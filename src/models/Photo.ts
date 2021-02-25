import { Schema, Model, Document, model } from "mongoose";

// esquema para la BD MongoDB. Mongoose usa mayúsculas en los tipos
const schema = new Schema({
  title: String,
  description: String,
  imagePath: String,
});

// Interface para crear los tipos.
interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
}

export default model<IPhoto>("Photo", schema);
