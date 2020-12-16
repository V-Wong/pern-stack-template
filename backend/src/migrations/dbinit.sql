DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE hackathon (
    hackathon_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    hackathon_id INT not NULL,
    person_id INT not NULL,
    submit_date DATE DEFAULT NOW(),
    FOREIGN KEY(hackathon_id) REFERENCES hackathon(hackathon_id),
    FOREIGN KEY(person_id) REFERENCES person(person_id)
);

create TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    contents TEXT,
    project_id INT NOT NULL,
    person_id INT NOT NULL,
    FOREIGN KEY(project_id) REFERENCES project(project_id),
    FOREIGN KEY(person_id) REFERENCES person(person_id)
);

INSERT INTO person(name)
VALUES ('TEST PERSON 1'), 
       ('TEST PERSON 2');

INSERT INTO hackathon(title, start_date, end_date)
VALUES ('TEST Hackthon', DATE '2020-12-16', DATE '2020-12-25');

INSERT INTO project(title, description, hackathon_id, person_id)
VALUES ('TEST PROJECT', 'Generic Description', 1, 1);

INSERT INTO comment(contents, project_id, person_id)
VALUES ('TEST COMMENT', 1, 1);