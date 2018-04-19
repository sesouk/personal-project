INSERT INTO users (auth0_id, email, name) values ($1, $2, $3)
RETURNING *;