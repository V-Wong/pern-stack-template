DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    github_id TEXT NOT NULL
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    person_id INT not NULL,
    submit_date DATE DEFAULT NOW(),
    FOREIGN KEY(person_id) REFERENCES person(person_id)
);

INSERT INTO person(name, github_id)
VALUES ('TEST PERSON 1', 'Test'), 
       ('TEST PERSON 2', 'Test');

INSERT INTO project(title, description, person_id)
VALUES ('TEST PROJECT', 'Generic Description', 1);
