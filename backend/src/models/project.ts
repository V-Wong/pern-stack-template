import pool from "../dbConfig/dbConfig";

function getAllProjects() {
  pool.query("SELECT * from project", (err, results) => {
    if (!err) return results;
    else return err;
  });
};

function getSingleProject(projectId: string) {
  pool.query("SELECT * from project where project_id = $1", [projectId], (err, results) => {
    if (!err) return results;
    else return err;
  });
};

export { getAllProjects, getSingleProject };