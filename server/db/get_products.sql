SELECT *
FROM products
WHERE shingle = $1 OR low_slope = $1 OR standing_seam = $1;