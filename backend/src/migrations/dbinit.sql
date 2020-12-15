DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE event (
    event_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    event_id INT not NULL,
    person_id INT not NULL,
    CONSTRAINT fk_event 
        FOREIGN KEY(event_id)
            REFERENCES event(event_id),
    constraint fk_user
        FOREIGN KEY(person_id)
            REFERENCES person(person_id)
);

INSERT INTO person(name)
VALUES ('TEST PERSON 1'), 
       ('TEST PERSON 2');

INSERT INTO event(title)
VALUES ('TEST EVENT');

INSERT INTO project(title, description, event_id, person_id)
VALUES ('TEST PROJECT', 'TEST DESCRIPTION', 1, 1);