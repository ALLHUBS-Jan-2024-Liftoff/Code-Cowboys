USE ranchsupply;

-- Sample data for products

-- Farming Equipment
INSERT INTO Products (product_name, description, price, category_id, stock, size) VALUES
('Tractor', 'A powerful farming tractor.', 12000.00, 1, 5, NULL),
('Plow', 'Heavy-duty plow for soil preparation.', 3000.00, 1, 10, NULL),
('Harvester', 'Efficient crop harvester.', 15000.00, 1, 3, NULL),
('Seed Drill', 'Precision seed drill for planting.', 2000.00, 1, 15, NULL),
('Cultivator', 'Versatile soil cultivator.', 2500.00, 1, 8, NULL),
('Sprayer', 'High-capacity sprayer for pesticides.', 1800.00, 1, 12, NULL),
('Baler', 'Reliable hay baler.', 5000.00, 1, 6, NULL),
('Manure Spreader', 'Efficient manure spreader.', 4000.00, 1, 7, NULL),
('Irrigation System', 'Advanced irrigation system.', 7500.00, 1, 4, NULL),
('Livestock Trailer', 'Sturdy trailer for livestock transport.', 6000.00, 1, 5, NULL);

-- Clothing
INSERT INTO Products (product_name, description, price, category_id, stock, size) VALUES
('Farmer Jacket', 'Durable and comfortable jacket for farmers.', 75.00, 2, 20, 'L'),
('Work Boots', 'Waterproof and durable work boots.', 120.00, 2, 30, '10'),
('Overalls', 'Durable work overalls.', 45.00, 2, 30, 'M'),
('Sun Hat', 'Protective sun hat.', 25.00, 2, 25, 'One Size'),
('Flannel Shirt', 'Warm flannel shirt.', 40.00, 2, 50, 'L'),
('Jeans', 'Sturdy denim jeans.', 50.00, 2, 40, '32'),
('Gloves', 'Protective work gloves.', 15.00, 2, 60, 'L'),
('Raincoat', 'Waterproof raincoat.', 70.00, 2, 20, 'XL'),
('Sweatshirt', 'Comfortable sweatshirt.', 35.00, 2, 30, 'M'),
('Thermal Socks', 'Warm thermal socks.', 10.00, 2, 80, 'One Size');

-- Hunting
INSERT INTO Products (product_name, description, price, category_id, stock, size) VALUES
('Hunting Rifle', 'High precision hunting rifle.', 950.00, 3, 10, NULL),
('Binoculars', 'High-quality binoculars for spotting.', 150.00, 3, 20, NULL),
('Camouflage Jacket', 'Camouflage jacket for hunting.', 85.00, 3, 25, 'L'),
('Hunting Boots', 'Sturdy and waterproof hunting boots.', 130.00, 3, 15, '11'),
('Compound Bow', 'Advanced compound bow.', 700.00, 3, 8, NULL),
('Hunting Knife', 'Sharp and durable hunting knife.', 50.00, 3, 30, NULL),
('Range Finder', 'Accurate range finder.', 200.00, 3, 12, NULL),
('Game Camera', 'Motion-activated game camera.', 120.00, 3, 18, NULL),
('Hunting Backpack', 'Spacious hunting backpack.', 90.00, 3, 20, NULL),
('Decoy Set', 'Realistic hunting decoy set.', 60.00, 3, 25, NULL);

-- Summertime Fun
INSERT INTO Products (product_name, description, price, category_id, stock, size) VALUES
('Inflatable Kayak', 'Perfect for lakes and pools.', 200.00, 4, 15, NULL),
('Fishing Rod', 'Lightweight fishing rod.', 50.00, 4, 40, NULL),
('Camping Tent', 'Waterproof camping tent.', 150.00, 4, 10, NULL),
('Cooler', 'Portable cooler for outdoor activities.', 60.00, 4, 20, NULL),
('Life Jacket', 'Safety life jacket.', 35.00, 4, 25, 'M'),
('Grill Set', 'Complete grill set for barbecues.', 80.00, 4, 18, NULL),
('Beach Umbrella', 'Large beach umbrella.', 30.00, 4, 22, NULL),
('Swim Goggles', 'Comfortable swim goggles.', 15.00, 4, 50, 'One Size'),
('Pool Float', 'Fun inflatable pool float.', 20.00, 4, 30, NULL),
('Hammock', 'Comfortable outdoor hammock.', 50.00, 4, 12, NULL);
