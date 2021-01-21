import pool from "../dbConfig/dbConfig";

function getPerson(id: number) {
  return pool.query("SELECT * from person where person_id = $1", [id]);
};

function getPersonByGitHub(githubId: number) {
  return pool.query("SELECT * from person where github_id = $1", [githubId]);
};

async function createPerson(githubId: number) {
  const client = await pool.connect();

  try {
    const insertText = `INSERT INTO person(name, github_id)
                        VALUES ('Test', $1);`;
    const insertValues = [githubId];
    await client.query(insertText, insertValues);
  } catch (e) {
    throw e;
  };
};

export { getPerson, getPersonByGitHub, createPerson };