import express from "express";
import * as model from "../models/project";

async function getProject(req: express.Request, res: express.Response) {
  if (req.query.person_id) {
    const queryResult = await model.getSingleProject((req.query as any).person_id);
    res.send(queryResult.rows);
  } else {
    const queryResult = await model.getAllProjects();
    res.send(queryResult.rows);
  }    
}

export { getProject };