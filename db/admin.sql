drop table if exists admin;

create table if not exists admin (
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR NOT NULL,
    name TEXT NOT NULL
);