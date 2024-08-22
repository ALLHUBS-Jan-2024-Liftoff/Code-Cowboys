INSERT INTO categories (category_id, category_image, category_title, created_at, description, updated_at) VALUES
(1, 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/equipment.jpg?itok=0cNH4SQc', 'Farming Equipment', NOW(), 'Equipment used in farming operations.', NOW()),
(2, 'https://media.istockphoto.com/id/1166954334/photo/portrait-of-happy-senior-farmer.jpg?s=612x612&w=0&k=20&c=dn2yLIXXkXSWTsv2HdEiJHqSyQhbNT77SHc0dxetUrI=', 'Farm Clothing', NOW(), 'Clothing designed for farming activities.', NOW()),
(3, 'https://images.ctfassets.net/pujs1b1v0165/383DyxbU80gLNsOdstVd30/947c5de30d7fa27aa3262b98b5429474/best_hunting_gear_purchases.jpg?w=1800&fit=fill&fm=webp', 'Hunting Gear', NOW(), 'Gear used for hunting purposes.', NOW()),
(4, 'https://centsationalstyle.com/wp-content/uploads/2018/06/pool-floats-kids-swimming.jpg', 'Outdoor Recreational Items', NOW(), 'Items used for outdoor recreation.', NOW());


-- Insert products without sizes
INSERT INTO products (product_id, brand, created_at, description, discounted_price, price, product_image, quantity, size, title, updated_at, category_id) VALUES
(1, 'John Deere', NOW(), 'High-performance tractor suitable for various farming tasks.', 10800.00, 12000.00, 'https://www.deere.com/assets/images/region-4/products/tractors/row-crop-tractors/6r-row-crop-tractors/6r-165/6r_165_studio_image_r4x001130_R2_1024x576_1_large_72a915acec82f011ccd37ce9f507c7bb2008f559.jpg', 10, NULL, 'Tractor', NOW(), 1),
(2, 'John Deere', NOW(), 'Reliable plow for efficient soil cultivation.', 2700.00, 3000.00, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBrP0GP7eU1BAAcoVHHyEbEWYrDje8BZ1UG6T31HbBoffGvj5PUl7Aesk4w0-iryUWkhfVBhTyt3OgPZNHO04MmsJ_SqTTpUcG8vA8Mei1ZhdB61em0suvkoc0pVJkVK0JNS9qyQ&usqp=CAc', 15, NULL, 'Plow', NOW(), 1),
(3, 'Case IH', NOW(), 'Advanced harvester designed for maximum yield.', 13500.00, 15000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nZr2UAFggsjXrGodbMWrAh6AZSzMJSDy8A&s', 8, NULL, 'Harvester', NOW(), 1),
(4, 'John Deere', NOW(), 'Efficient seed drill for precise planting.', 1800.00, 2000.00, 'https://5.imimg.com/data5/CM/PH/AD/SELLER-37917144/seed-drill-machine-500x500.jpg', 12, NULL, 'Seed Drill', NOW(), 1),
(5, 'Kubota', NOW(), 'Durable cultivator ideal for small to medium farms.', 2250.00, 2500.00, 'https://cdnmedia.endeavorsuite.com/images/catalogs/22739/products/detail/f70a79b2-4afd-41a6-935b-d080a9311efb.jpg', 7, NULL, 'Cultivator', NOW(), 1),
(6, 'John Deere', NOW(), 'Versatile sprayer for pest and weed control.', 1620.00, 1800.00, 'https://images.thdstatic.com/productImages/06a1dd47-ab18-4dd8-bbf2-777769432638/svn/john-deere-battery-sprayers-lp19479-64_600.jpg', 20, NULL, 'Sprayer', NOW(), 1),
(7, 'John Deere', NOW(), 'Efficient round baler for hay and forage.', 4500.00, 5000.00, 'https://www.deere.com/assets/images/region-4/products/hay-and-forage/hay-and-forage-baling-equipment/v461r-round-baler/v461r_round_baler_studio_r2c008280_1366x768_large_a051272bb4817f9c91bcbc789b67d720bdef9f3f.jpg', 6, NULL, 'Baler', NOW(), 1),
(8, 'Millcreek', NOW(), 'Heavy-duty manure spreader for large farms.', 3600.00, 4000.00, 'https://millcreekspreaders.com/wp-content/uploads/2019/10/127DX-RRQ-1024x685.jpg', 9, NULL, 'Manure Spreader', NOW(), 1),
(9, 'Rain Bird', NOW(), 'Comprehensive irrigation system for optimal water distribution.', 6750.00, 7500.00, 'https://www.gvsprinklers.com.au/wp-content/uploads/2017/10/sprinklerirrigation.jpg', 14, NULL, 'Irrigation System', NOW(), 1),
(10, 'CM Trailers', NOW(), 'Robust livestock trailer for safe animal transport.', 5400.00, 6000.00, 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/1092416?wid=456&hei=456&fmt=jpeg&qlt=100,0&resMode=sharp2&op_usm=0.9,1.0,8,0', 5, NULL, 'Livestock Trailer', NOW(), 1),
(11, 'Remington', NOW(), 'Reliable hunting rifle with precision accuracy.', 630.00, 700.00, 'https://huntingdepot.com.au/product_image/ts1713495459/r_319x/00ZROV-HCP/sabatti-rover-hunter-classic-pro.jpg', 25, NULL, 'Hunting Rifle', NOW(), 3),
(12, 'Barnett', NOW(), 'Powerful and accurate crossbow for hunting.', 405.00, 450.00, 'https://content.osgnetworks.tv/petersenshunting/content/photos/crossbow-shootout-twin-strike.jpg', 30, NULL, 'Crossbow', NOW(), 3),
(13, 'Bear Archery', NOW(), 'High-performance compound bow for archery enthusiasts.', 450.00, 500.00, 'https://www.pyramydair.com/images/PY-4300_Bear-Species-EV-Ready_1679594530.jpg', 20, NULL, 'Compound Bow', NOW(), 3),
(14, 'Buck Knives', NOW(), 'Durable and sharp hunting knife for outdoor use.', 72.00, 80.00, 'https://cdn11.bigcommerce.com/s-725cx91vwz/images/stencil/450w/products/935/17722/cks119__74334.1683909762.386.513.jpg?c=2', 50, NULL, 'Hunting Knife', NOW(), 3),
(15, 'Shimano', NOW(), 'Lightweight fishing rod with superior casting range.', 135.00, 150.00, 'https://media.cnn.com/api/v1/images/stellar/prod/daiwa-samurai-spinning-combo-x.jpg?c=16x9&q=h_720,w_1280,c_fill', 20, NULL, 'Fishing Rod', NOW(), 4),
(16, 'Plano', NOW(), 'Spacious tackle box with multiple compartments.', 54.00, 60.00, 'https://www.planooutdoors.com/cdn/shop/files/Plano_861600_alt2.jpg?v=1716383770', 35, NULL, 'Tackle Box', NOW(), 4),
(17, 'Coleman', NOW(), 'Durable camping tent with weather resistance.', 180.00, 200.00, 'https://images.thdstatic.com/productImages/a9f0b49c-ef50-403c-8ced-41f879691807/svn/karl-home-camping-tents-327770562997-c3_600.jpg', 15, NULL, 'Camping Tent', NOW(), 4),
(18, 'Coleman', NOW(), 'Comfortable sleeping bag with insulation for cold weather.', 72.00, 80.00, 'https://www.canisathlete.com/cdn/shop/products/AlaskaDown_mummy_open_birdview_e49c2501-9702-4465-b89d-f5ae1f4819d1.jpg?v=1660141173', 40, NULL, 'Sleeping Bag', NOW(), 4),
(19, 'Yeti', NOW(), 'High-capacity cooler with excellent ice retention.', 315.00, 350.00, 'https://www.berings.com/wp-content/uploads/2023/07/Yeti-Hopper-Flip-8-Soft-Cooler-Cosmic-Lilac4-1024x1024.jpg', 25, NULL, 'Cooler', NOW(), 4),
(20, 'Intex', NOW(), 'Inflatable kayak with durable construction.', 225.00, 250.00, 'https://academy.scene7.com/is/image/academy/20482046?$pdp-mobile-gallery-ng$', 10, NULL, 'Inflatable Kayak', NOW(), 4);

-- Insert products with sizes (for clothing)
INSERT INTO products (product_id, brand, created_at, description, discounted_price, price, product_image, quantity, size, title, updated_at, category_id) VALUES
(21, 'Carhartt', NOW(), 'Durable and comfortable jacket for farmers.', 60.75, 67.50, 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg', 10, 'S', 'Farmer Jacket', NOW(), 2),
(22, 'Carhartt', NOW(), 'Durable and comfortable jacket for farmers.', 60.75, 67.50, 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg', 10, 'M', 'Farmer Jacket', NOW(), 2),
(23, 'Carhartt', NOW(), 'Durable and comfortable jacket for farmers.', 60.75, 67.50, 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg', 10, 'L', 'Farmer Jacket', NOW(), 2),
(24, 'Carhartt', NOW(), 'Durable and comfortable jacket for farmers.', 60.75, 67.50, 'https://www.augustacoop.com/wp-content/uploads/J14120Moss.jpg', 10, 'XL', 'Farmer Jacket', NOW(), 2),
(25, 'Wrangler', NOW(), 'Sturdy jeans made for outdoor work.', 40.50, 45.00, 'https://www.davidmorgan.com/shop/images/1131_a_lg8.jpg', 15, 'S', 'Work Jeans', NOW(), 2),
(26, 'Wrangler', NOW(), 'Sturdy jeans made for outdoor work.', 40.50, 45.00, 'https://www.davidmorgan.com/shop/images/1131_a_lg8.jpg', 15, 'M', 'Work Jeans', NOW(), 2),
(27, 'Wrangler', NOW(), 'Sturdy jeans made for outdoor work.', 40.50, 45.00, 'https://www.davidmorgan.com/shop/images/1131_a_lg8.jpg', 15, 'L', 'Work Jeans', NOW(), 2),
(28, 'Wrangler', NOW(), 'Sturdy jeans made for outdoor work.', 40.50, 45.00, 'https://www.davidmorgan.com/shop/images/1131_a_lg8.jpg', 15, 'XL', 'Work Jeans', NOW(), 2),
(29, 'Ariat', NOW(), 'High-quality boots designed for farm work.', 90.00, 100.00, 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dwb3d3aa5a/images/warm/10011939_3-4_front_warm.jpg?sw=800&sh=800, 10, 'S', 'Work Boots', NOW(), 2),
(30, 'Ariat', NOW(), 'High-quality boots designed for farm work.', 90.00, 100.00, 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dwb3d3aa5a/images/warm/10011939_3-4_front_warm.jpg?sw=800&sh=800', 10, 'M', 'Work Boots', NOW(), 2),
(31, 'Ariat', NOW(), 'High-quality boots designed for farm work.', 90.00, 100.00, 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dwb3d3aa5a/images/warm/10011939_3-4_front_warm.jpg?sw=800&sh=800', 10, 'L', 'Work Boots', NOW(), 2),
(32, 'Ariat', NOW(), 'High-quality boots designed for farm work.', 90.00, 100.00, 'https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dwb3d3aa5a/images/warm/10011939_3-4_front_warm.jpg?sw=800&sh=800', 10, 'XL', 'Work Boots', NOW(), 2);

