update products set (image1, image2, name, price, description, stock) = ($2, $3, $4, $5, $6, $7) where product_id = $1
returning *;