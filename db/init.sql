drop table if exists products;

create table if not exists products (
    product_id serial primary key,
    image text,
    name text,
    description text,
    price decimal,
    stock integer
);
insert into products
    (name, image, description, price, stock)
values
    ('S/S T-Shirt White', '../images/logo-5-KVGE.png', 'This short sleeve tee features a large back logo with small chest logo offset to the left chest.', 24.99, 25),
    ('S/S T-Shirt Black', '../images/logo-5-KVGE.png', 'This short sleeve tee features a large back logo with small chest logo offset to the left chest.', 24.99, 25),
    ('L/S T-Shirt White', '../images/logo-6-KVGE.png', 'This long sleeve tee features Killer Vibes going down the left arm and Good Energy going down the left arm with a small logo on the back and positioned just under the collar.', 29.99, 25),
    ('L/S T-Shirt Black', '../images/logo-6-KVGE.png', 'This long sleeve tee features Killer Vibes going down the left arm and Good Energy going down the left arm with a small logo on the back and positioned just under the collar.', 29.99, 25);
select * from products;


-- User init
drop table if exists users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth0_id VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  name TEXT NOT NULL
);