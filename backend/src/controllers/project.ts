import express from "express";
import * as model from "../models/project";

async function getProject(req: express.Request, res: express.Response) {
  const queryResult = await model.getAllProjects();
  res.send(queryResult.rows);
};

export { getProject };