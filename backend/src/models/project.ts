import pool from "../dbConfig/dbConfig";

function getAllProjects() {
  return pool.query("SELECT * from project");
};

function getSingleProject(projectId: string) {
  return pool.query("SELECT * from project where project_id = $1", [projectId]);
};

export { getAllProjects, getSingleProject };