# Code-Cowboys
Project for LaunchCode's Liftoff Program

mock data to run

INSERT INTO Categories (category_id, category_title, description, created_at, updated_at)
VALUES 
(1, 'Feed', 'Animal feed products', '2024-08-01 09:00:00', '2024-08-01 09:00:00'),
(2, 'Apparel', 'Ranch work clothing and accessories', '2024-08-01 09:00:00', '2024-08-01 09:00:00'),
(3, 'Fencing', 'Fencing materials and tools', '2024-08-01 09:00:00', '2024-08-01 09:00:00'),
(4, 'Horse Gear', 'Equipment and accessories for horses', '2024-08-01 09:00:00', '2024-08-01 09:00:00'),
(5, 'Watering Equipment', 'Watering and irrigation supplies', '2024-08-01 09:00:00', '2024-08-01 09:00:00'),
(6, 'Tools & Equipment', 'General tools and equipment for ranch work', '2024-08-01 09:00:00', '2024-08-01 09:00:00');


INSERT INTO Products (category_id, brand, title, description, price, discounted_price, quantity, product_image, size, created_at, updated_at)
VALUES 
(1, 'Rancher’s Choice', 'Rancher’s Choice Hay Bale', 'High-quality hay for feeding livestock.', 19.99, 17.99, 150, 'hay_bale.jpg', 'Large', '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
(2, 'Cowboy Gear', 'Cowboy Boots', 'Durable leather boots for ranch work.', 129.99, 119.99, 50, 'cowboy_boots.jpg', '10', '2024-08-01 11:15:00', '2024-08-01 11:15:00'),
(3, 'FencePro', 'Steel Fence Post', 'Heavy-duty steel posts for fencing.', 8.75, 8.00, 300, 'steel_fence_post.jpg', '6ft', '2024-08-02 09:30:00', '2024-08-02 09:30:00'),
(4, 'EquiComfort', 'Saddle Blanket', 'Comfortable saddle blanket for horses.', 45.00, 40.00, 75, 'saddle_blanket.jpg', 'Medium', '2024-08-03 14:45:00', '2024-08-03 14:45:00'),
(5, 'WaterPro', 'Automatic Water Trough', 'Automatic water trough with float valve.', 225.50, 210.00, 20, 'water_trough.jpg', '50L', '2024-08-04 08:00:00', '2024-08-04 08:00:00'),
(2, 'Rancher’s Gear', 'Rancher’s Leather Gloves', 'Tough leather gloves for ranch work.', 29.99, 25.99, 200, 'leather_gloves.jpg', 'Large', '2024-08-04 12:00:00', '2024-08-04 12:00:00'),
(6, 'ToolMaster', 'Heavy-Duty Chainsaw', 'Powerful chainsaw for cutting trees and wood.', 299.99, 279.99, 35, 'chainsaw.jpg', '20in', '2024-08-05 15:30:00', '2024-08-05 15:30:00'),
(4, 'RideSafe', 'Riding Helmet', 'Protective helmet for horseback riding.', 75.00, 70.00, 60, 'riding_helmet.jpg', 'Medium', '2024-08-06 10:20:00', '2024-08-06 10:20:00'),
(3, 'FencePro', 'Electric Fence Charger', 'Charger for electric fencing.', 149.99, 139.99, 40, 'fence_charger.jpg', '12V', '2024-08-07 13:10:00', '2024-08-07 13:10:00'),
(2, 'Rancher’s Gear', 'Rancher’s Rain Jacket', 'Waterproof rain jacket for outdoor work.', 89.99, 79.99, 120, 'rain_jacket.jpg', 'XL', '2024-08-08 16:00:00', '2024-08-08 16:00:00');
