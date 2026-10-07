# Vietnamese translation conventions — ALL agents MUST use these pinned values.

## Output rules
- Every fill entry: same recipe ID + same top-level keys as source.
- `ingredients`: same IDs, `{"name": "<Vietnamese>"}` ONLY — NEVER `standardAmount`.
- `instructions`: same step keys, never drop/merge/summarize steps.
- Genuinely empty source instruction steps → `—` (em dash).
- Keep numbers, °C/°F, units (g, kg, ml, l, cm, mm, tsp, tbsp, cup) verbatim.
- No Arabic script. No non-Vietnamese foreign words except units and proper
  nouns/brand/dish names (transliterate naturally, e.g. "phô mai feta").
- HALAL — never introduce: thịt lợn, thịt heo, giăm bông, ba rọi, mỡ lợn,
  rượu, cồn, bia (EXCEPT "men bia" = brewer's yeast), vodka, whisky, brandy,
  gin, rum, thịt gấu, thịt ngựa, thịt chó.
- `null`/`""`/absent source fields → keep identical.

## chapter (exact mapping; keep absent/null as source)
Chapter 10: Fatma Abu Haty Channel Recipes → Chương 10: Công thức kênh Fatma Abu Haty
Chapter 9: Egyptian Cooking → Chương 9: Ẩm thực Ai Cập
From Osool El Tahy (Principles of Cooking) → Từ Osool El Tahy (Nguyên tắc nấu ăn)
Chapter 1: Meats, Poultry & Seafood → Chương 1: Thịt, gia cầm & hải sản
Chapter 4: Desserts & Beverages → Chương 4: Món tráng miệng & đồ uống
Chapter 4: Pastries, Light Desserts & Beverages → Chương 4: Bánh nướng, tráng miệng nhẹ & đồ uống
Chapter 4: Beverages & Refreshments → Chương 4: Đồ uống & giải khát
Chapter 2: Soups, Salads, Vegetables & Pulses → Chương 2: Súp, salad, rau củ & các loại đậu
Chapter 2: Soups, Salads, Vegetables & Legumes → Chương 2: Súp, salad, rau củ & các loại đậu
Chapter 2: Soups, Salads & Vegetables → Chương 2: Súp, salad & rau củ
Chapter 3: Starches, Stuffed Foods & Pastries → Chương 3: Tinh bột, món nhồi & bánh nướng
Chapter 3: Starches → Chương 3: Tinh bột
Chapter 3: Pastas, Stuffed Dishes & Pastries → Chương 3: Mì ống, món nhồi & bánh nướng
Chapter 5: Traditional Eastern Desserts & Sweets → Chương 5: Tráng miệng & bánh kẹo phương Đông truyền thống
مطبخ الهند → Ẩm thực Ấn Độ
مطبخ المكسيك → Ẩm thực Mexico
مطبخ اليابان → Ẩm thực Nhật Bản
مطبخ إندونيسيا → Ẩm thực Indonesia
مطبخ لبنان → Ẩm thực Li-băng
مطبخ كوريا الجنوبية → Ẩm thực Hàn Quốc
مطبخ إيران → Ẩm thực Iran
مطبخ المغرب → Ẩm thực Ma-rốc
مطبخ إيطاليا → Ẩm thực Ý
مطبخ تركيا → Ẩm thực Thổ Nhĩ Kỳ
مطبخ ماليزيا → Ẩm thực Malaysia
مطبخ الصين → Ẩm thực Trung Quốc
مطبخ إسبانيا → Ẩm thực Tây Ban Nha
مطبخ تايلاند → Ẩm thực Thái Lan
مطبخ اليونان → Ẩm thực Hy Lạp
مطبخ فرنسا → Ẩm thực Pháp
مطبخ نيجيريا → Ẩm thực Nigeria
مطبخ بيرو → Ẩm thực Peru
مطبخ فيتنام → Ẩm thực Việt Nam
مطبخ إثيوبيا → Ẩm thực Ethiopia
مطبخ الفلبين → Ẩm thực Philippines

## category (exact mapping)
Meats & Poultry → Thịt & gia cầm
Meats → Thịt
Poultry → Gia cầm
Quick Meals → Món nhanh
Sweet Pastries → Bánh ngọt
Pastries → Bánh nướng
Light Desserts → Tráng miệng nhẹ
Eastern Desserts → Tráng miệng phương Đông
Western Desserts → Tráng miệng phương Tây
Starches → Tinh bột
Vegetables → Rau củ
Salads → Salad
Beverages → Đồ uống
Beverages & Refreshments → Đồ uống & giải khát
Savory Dishes → Món mặn
Savory Favorites → Món mặn ưa thích
Fish & Seafood → Cá & hải sản
Seafood → Hải sản
Soups → Súp
Soups & Broths → Súp & nước dùng
Salads & Dips → Salad & sốt chấm
Ice Cream → Kem
Stuffed Dishes → Món nhồi
Legumes → Các loại đậu
Legumes & Heritage Dishes → Các loại đậu & món truyền thống
Vegetables & Stews → Rau củ & món hầm
Rice, Pastas & Bakes → Cơm, mì ống & món nướng
Grains & Starches → Ngũ cốc & tinh bột
Baking & Pastries → Làm bánh & bánh nướng
Fruit Compote → Compot trái cây
Various → Tổng hợp

## cookingMethod (exact mapping)
Baking → Nướng
Oven Baking → Nướng lò
Slow Simmering → Hầm nhỏ lửa
Slow Simmering (Tasbeek) → Hầm nhỏ lửa (Tasbeek)
Cooking → Nấu
cooking → nấu
Pan-Frying → Chiên chảo
Pan-Frying & Crisping → Chiên chảo & làm giòn
Boiling → Đun sôi
Boiling & Broth → Đun sôi & nước dùng
Frying → Chiên
Grilling → Nướng vỉ
Charcoal & Oven Grilling → Nướng than & nướng lò
Salads & Beverages → Salad & đồ uống
Preserving & Freezing → Bảo quản & đông lạnh
Preserving → Bảo quản
No Cook → Không cần nấu
assembly → lắp ráp
Chilled / Cold Preparation → Để lạnh / chế biến nguội
Steaming → Hấp

## servings — translate naturally
"N servings" → "N phần"; "N pieces" → "N cái" (or miếng/chiếc as natural);
"N cups" → "N chén"; "N glasses" → "N ly"; "about N" → "khoảng N";
"as needed" → "theo nhu cầu"; "N sandwiches" → "N ổ bánh mì" or natural;
"enough for ..." → "đủ cho ..."; "N people" → "N người"; keep jar/kg/ml
quantities verbatim. Keep it faithful — never change the number.
