-- Insert categories
INSERT INTO categories (category_id, category_name) VALUES
(1, 'Farming Equipment'),
(2, 'Farm Clothing'),
(3, 'Hunting Gear'),
(4, 'Outdoor Recreational Items');

-- Insert products without sizes
INSERT INTO products (id, name, description, price, category_id, image_url) Values

(1, 'Tractor', 'A powerful farming tractor.', 12000.00, 1, 'https://www.deere.com/assets/images/region-4/products/tractors/row-crop-tractors/6r-row-crop-tractors/6r-165/6r_165_studio_image_r4x001130_R2_1024x576_1_large_72a915acec82f011ccd37ce9f507c7bb2008f559.jpg'),
(2, 'Plow', 'Heavy-duty plow for soil preparation.', 3000.00, 1, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBrP0GP7eU1BAAcoVHHyEbEWYrDje8BZ1UG6T31HbBoffGvj5PUl7Aesk4w0-iryUWkhfVBhTyt3OgPZNHO04MmsJ_SqTTpUcG8vA8Mei1ZhdB61em0suvkoc0pVJkVK0JNS9qyQ&usqp=CAc'),
(3, 'Harvester', 'Efficient crop harvester.', 15000.00, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nZr2UAFggsjXrGodbMWrAh6AZSzMJSDy8A&s'),
(4, 'Seed Drill', 'Precision seed drill for planting.', 2000.00, 1, 'https://5.imimg.com/data5/CM/PH/AD/SELLER-37917144/seed-drill-machine-500x500.jpg'),
(5, 'Cultivator', 'Versatile soil cultivator.', 2500.00, 1, 'https://cdnmedia.endeavorsuite.com/images/catalogs/22739/products/detail/f70a79b2-4afd-41a6-935b-d080a9311efb.jpg'),
(6, 'Sprayer', 'High-capacity sprayer for pesticides.', 1800.00, 1, 'https://images.thdstatic.com/productImages/06a1dd47-ab18-4dd8-bbf2-777769432638/svn/john-deere-battery-sprayers-lp19479-64_600.jpg'),
(7, 'Baler', 'Reliable hay baler.', 5000.00, 1, 'https://www.deere.com/assets/images/region-4/products/hay-and-forage/hay-and-forage-baling-equipment/v461r-round-baler/v461r_round_baler_studio_r2c008280_1366x768_large_a051272bb4817f9c91bcbc789b67d720bdef9f3f.jpg'),
(8, 'Manure Spreader', 'Efficient manure spreader.', 4000.00, 1, 'https://millcreekspreaders.com/wp-content/uploads/2019/10/127DX-RRQ-1024x685.jpg'),
(9, 'Irrigation System', 'Advanced irrigation system.', 7500.00, 1, 'https://www.gvsprinklers.com.au/wp-content/uploads/2017/10/sprinklerirrigation.jpg'),
(10, 'Livestock Trailer', 'Sturdy trailer for livestock transport.', 6000.00, 1, 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/1092416?wid=456&hei=456&fmt=jpeg&qlt=100,0&resMode=sharp2&op_usm=0.9,1.0,8,0'),
(11, 'Hunting Rifle', 'High-precision hunting rifle.', 700.00, 3, 'https://m.media-amazon.com/images/I/31SPp20H0FL._AC_UF894,1000_QL80_.jpg'),
(12, 'Crossbow', 'Powerful and accurate crossbow.', 450.00, 3, 'https://m.media-amazon.com/images/I/31wTn8SlEcL._AC_UF894,1000_QL80_.jpg'),
(13, 'Compound Bow', 'Advanced compound bow for hunting.', 500.00, 3, 'https://m.media-amazon.com/images/I/41M3DLsZwvL._AC_UF894,1000_QL80_.jpg'),
(14, 'Hunting Knife', 'Rugged hunting knife.', 80.00, 3, 'https://m.media-amazon.com/images/I/51yVGkhhtlL._AC_UF1000,1000_QL80_.jpg'),
(15, 'Fishing Rod', 'High-quality fishing rod.', 150.00, 4, 'https://m.media-amazon.com/images/I/41OpQeFAuGL._AC_UF1000,1000_QL80_.jpg'),
(16, 'Tackle Box', 'Spacious and organized tackle box.', 60.00, 4, 'https://m.media-amazon.com/images/I/71b4sHpAj7L._AC_UF1000,1000_QL80_.jpg'),
(17, 'Camping Tent', 'Durable and weather-resistant camping tent.', 200.00, 4, 'https://m.media-amazon.com/images/I/81dt7Sc2yOL._AC_UF1000,1000_QL80_.jpg'),
(18, 'Sleeping Bag', 'Warm and comfortable sleeping bag.', 80.00, 4, 'https://m.media-amazon.com/images/I/71iAGLBvI6L._AC_UF1000,1000_QL80_.jpg'),
(19, 'Camping Stove', 'Portable and efficient camping stove.', 90.00, 4, 'https://m.media-amazon.com/images/I/71a+IfFbDAL._AC_UF1000,1000_QL80_.jpg'),
(20, 'Hiking Backpack', 'Spacious and durable hiking backpack.', 110.00, 4, 'https://m.media-amazon.com/images/I/71oFrjHHTEL._AC_UF1000,1000_QL80_.jpg');

-- Insert products with sizes (for clothing)
INSERT INTO products (id, name, description, price, category_id, image_url) Values
(21, 'Farmer Jacket', 'Durable and comfortable jacket for farmers.', 75.00, 67.50, 10, 2, 5, 'S', 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg'),
(22, 'Farmer Jacket', 'Durable and comfortable jacket for farmers.', 75.00, 67.50, 10, 2, 5, 'M', 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg'),
(23, 'Farmer Jacket', 'Durable and comfortable jacket for farmers.', 75.00, 67.50, 10, 2, 5, 'L', 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg'),
(24, 'Farmer Jacket', 'Durable and comfortable jacket for farmers.', 75.00, 67.50, 10, 2, 5, 'XL', 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg'),
(25, 'Work Boots', 'Waterproof and durable work boots.', 120.00, 108.00, 10, 2, 6, '8', 'https://www.famousfootwear.com/blob/product-images/20000/72/86/2/72862_left_feed1000.jpg'),
(26, 'Work Boots', 'Waterproof and durable work boots.', 120.00, 108.00, 10, 2, 6, '9', 'https://www.famousfootwear.com/blob/product-images/20000/72/86/2/72862_left_feed1000.jpg'),
(27, 'Work Boots', 'Waterproof and durable work boots.', 120.00, 108.00, 10, 2, 6, '10', 'https://www.famousfootwear.com/blob/product-images/20000/72/86/2/72862_left_feed1000.jpg'),
(28, 'Work Boots', 'Waterproof and durable work boots.', 120.00, 108.00, 10, 2, 6, '11', 'https://www.famousfootwear.com/blob/product-images/20000/72/86/2/72862_left_feed1000.jpg'),
(29, 'Work Gloves', 'Heavy-duty gloves for farm work.', 20.00, 18.00, 10, 2, 50, 'S', 'https://m.media-amazon.com/images/I/91TfqRMkaPL._AC_UF1000,1000_QL80_.jpg'),
(30, 'Work Gloves', 'Heavy-duty gloves for farm work.', 20.00, 18.00, 10, 2, 50, 'M', 'https://m.media-amazon.com/images/I/91TfqRMkaPL._AC_UF1000,1000_QL80_.jpg'),
(31, 'Work Gloves', 'Heavy-duty gloves for farm work.', 20.00, 18.00, 10, 2, 50, 'L', 'https://m.media-amazon.com/images/I/91TfqRMkaPL._AC_UF1000,1000_QL80_.jpg'),
(32, 'Work Gloves', 'Heavy-duty gloves for farm work.', 20.00, 18.00, 10, 2, 50, 'XL', 'https://m.media-amazon.com/images/I/91TfqRMkaPL._AC_UF1000,1000_QL80_.jpg');
