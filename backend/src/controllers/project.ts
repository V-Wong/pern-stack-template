import express from "express";
import * as model from "../models/project";

function getProject(req: express.Request, _: express.Response) {
  if (req.query.person_id)
    return model.getSingleProject((req.query as any).person_id);
  else
    return model.getAllProjects();
}

export { getProject };