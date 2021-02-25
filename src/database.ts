import { connect } from "mongoose";

export async function startConnection() {
  try {
    await connect("mongodb://localhost/photo-gallery-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
}
