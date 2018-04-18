update products set (image, name, price, description, stock) = ($2, $3, $4, $5, $6) where product_id = $1
returning *;