drop table if exists products;

create table if not exists products (
    product_id serial primary key,
    image1 text,
    image2 text,
    name text,
    description text,
    price decimal,
    stock integer
);
insert into products
    (name, image1, image2, description, price, stock)
values
    ('S/S T-Shirt Black', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Small-Logo-Front-Mock-Up-Black.png', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285957/Large-Logo-Back-Black.png', 'This short sleeve tee features a large back logo with small chest logo offset to the left chest.', 24.99, 25),
    ('S/S T-Shirt White', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285957/Small-Logo-Front-Mock-Up.png', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285958/Large-Logo-Back.png', 'This short sleeve tee features a large back logo with small chest logo offset to the left chest.', 24.99, 25),
    ('F&F S/S T-Shirt Black', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285983/F_F-Tiff-On-Black-Front.png', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285984/F_F-Tiff-On-Black-Back.png', 'This friends and family only design is in a cyan and black colorway', 24.99, 5),
    ('F&F S/S T-Shirt White', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285985/F_F-Mint-On-White-Front.png', 'http://res.cloudinary.com/kvge/image/upload/c_scale,w_800/v1525285983/F_F-Mint-On-White-Back.png', 'This friends and family only design is in a mint and white colorway.', 24.99, 5);
select * from products;


-- User init
drop table if exists users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth0_id VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  name TEXT NOT NULL
);