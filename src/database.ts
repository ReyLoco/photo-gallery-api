import { connect } from "mongoose";
/**
 * Function to connect with MongoDB data BS in localHost. 
 * Needed 3 keys/value to avoid errors. 
 */
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
