import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

/**
 * Function to get from server and db all the uploaded photographies
 * @param req Request
 * @param res Response
 */
export async function getPhotos(req: Request, res: Response): Promise<Response> {
  const photos = await Photo.find();

  return res.json(photos);
}

/**
 * Function to get from server only one photo finded by id
 * @param req Request
 * @param res Response
 */
export async function getPhoto(req: Request, res: Response): Promise<Response> {
  const photo = await Photo.findById(req.params.id);

  return res.json(photo);
}

/**
 * Function to upload an image to the server and save data to db.
 * @param req Request
 * @param res Responde
 */
export async function createPhoto(req: Request, res: Response): Promise<Response> {
  // recuperamos los datos del body de la petición
  const { title, description } = req.body;

  // creamos una nueva foto con la info del archivo subido
  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file.path,
  };

  // usamos la interface
  const photo = new Photo(newPhoto);

  // guardamos, usando el método del esquema de mongodb
  await photo.save();

  // respondemos con la info
  return res.json({
    message: "Photo successfully saved",
    photo,
  });
}

/**
 * Function to upload an image to the server and save data to db.
 * @param req Request
 * @param res Responde
 */
export async function updatePhoto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedPhoto = await Photo.findByIdAndUpdate(id, { title, description }, { new: true });

  return res.json({
    message: "Successfully Updated",
    updatedPhoto,
  });
}

/**
 * Function to delete one photo from server and db.
 * @param req Request
 * @param res Responde
 */
export async function deletePhoto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const photo = await Photo.findByIdAndRemove(id);

  if (photo) {
    fs.unlink(path.resolve(photo.imagePath));
  }

  return res.json({
    message: "Photo Deleted",
    photo,
  });
}
