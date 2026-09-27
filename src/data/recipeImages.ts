/**
 * Recipe photos live in public/recipe-images/<recipe id>.jpg.
 * Add a recipe's id range here once its photos are in that folder.
 */

// Ids are sequential within each prefix, so photos are listed as ranges.
const idRange = (prefix: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}-${String(from + i).padStart(2, '0')}`);

const RECIPES_WITH_IMAGES = [
  ...idRange('meat', 1, 60),
  ...idRange('sea', 1, 12),
  ...idRange('soup', 1, 5),
  ...idRange('salad', 1, 11),
  ...idRange('veg', 1, 35),
  ...idRange('veg', 37, 52),
  ...idRange('leg', 1, 5),
  ...idRange('pasta', 1, 26),
  ...idRange('stuff', 1, 11),
  ...idRange('bake', 1, 15),
  ...idRange('savory', 1, 12),
  ...idRange('quick', 1, 8),
  ...idRange('des', 1, 113),
  ...idRange('bev', 1, 5),
  // Generated banners (scripts/recipe-images/ship.py)
  'add-001', 'add-002', 'add-003', 'add-004', 'add-005', 'add-006', 'add-007', 'add-008',
  'add-009', 'add-010', 'add-011', 'add-012', 'add-013', 'add-014', 'add-015', 'add-016',
  'add-017', 'add-018', 'add-019', 'add-020', 'add-021', 'add-022', 'add-023', 'add-024',
  'add-025', 'add-026', 'add-027', 'add-028', 'add-029', 'add-030', 'add-031', 'add-032',
  'add-033', 'add-034', 'add-035', 'add-036', 'add-037', 'add-038', 'add-039', 'add-040',
  'add-041', 'add-042', 'add-043', 'add-044', 'add-045', 'add-046', 'add-047', 'add-048',
  'add-049', 'add-050', 'add-051', 'add-052', 'add-053', 'add-054', 'add-055', 'add-056',
  'add-057', 'add-058', 'add-059', 'add-060', 'add-061', 'add-062', 'add-063', 'add-064',
  'add-065', 'add-066', 'add-067', 'add-068', 'add-069', 'add-070', 'add-071', 'add-072',
  'add-073', 'add-074', 'add-075', 'add-076', 'add-077', 'add-078', 'add-079', 'add-080',
  'add-081', 'add-082', 'add-083', 'add-084', 'add-085', 'add-086', 'add-087', 'add-088',
  'add-089', 'add-090', 'add-091', 'add-092', 'add-093', 'add-094', 'add-095', 'add-096',
  'add-097', 'add-098', 'add-099', 'add-100', 'add-101', 'add-102', 'add-103', 'add-104',
  'add-105', 'add-106', 'add-107', 'add-108', 'add-109', 'add-110', 'add-111', 'add-112',
  'add-113', 'add-114', 'add-115', 'add-116', 'add-117', 'add-118', 'add-119', 'add-120',
  'add-121', 'add-122', 'add-123', 'add-124', 'add-125', 'add-126', 'add-127', 'add-128',
  'add-129', 'add-130', 'add-131', 'add-132', 'add-133', 'add-134', 'add-135', 'add-136',
  'add-137', 'add-138', 'add-139', 'add-140', 'add-141', 'add-142', 'add-143', 'add-144',
  'add-145', 'add-146', 'add-147', 'add-148', 'add-149', 'add-150', 'add-151', 'add-152',
  'add-153', 'add-154', 'add-155', 'add-156', 'add-157', 'add-158', 'add-159', 'add-160',
  'add-161', 'add-162', 'add-163', 'add-164', 'add-165', 'add-166', 'add-167', 'add-168',
  'add-169', 'add-170', 'add-171', 'add-172', 'add-173', 'add-174', 'add-175', 'add-176',
  'add-177', 'add-178', 'add-179', 'add-180', 'add-181', 'add-182', 'add-183', 'add-184',
  'add-185', 'add-186', 'add-187', 'add-188', 'add-189', 'add-190', 'add-191', 'add-192',
  'add-193', 'add-194', 'add-195', 'add-196', 'add-197', 'add-198', 'add-199', 'add-200',
  'add-201', 'add-202', 'add-203', 'add-204', 'add-205', 'add-206', 'add-207', 'add-208',
  'add-209', 'add-210', 'add-211', 'add-212', 'add-213', 'add-214', 'add-215', 'add-216',
  'add-217', 'add-218', 'add-219', 'add-220', 'add-221', 'add-222', 'add-223', 'add-224',
  'add-225', 'add-226', 'add-227', 'add-228', 'add-229', 'add-230', 'add-231', 'add-232',
  'add-233', 'add-234', 'add-235', 'add-236', 'add-237', 'add-238', 'add-239', 'add-240',
  'add-241', 'add-242', 'add-243', 'add-244', 'add-245', 'add-246', 'add-247', 'add-248',
  'add-249', 'add-250', 'add-251', 'add-252', 'add-253', 'add-254', 'add-255', 'add-256',
  'add-257', 'ec-003', 'ec-005', 'ec-007', 'ec-008', 'ec-010', 'ec-012', 'ec-014',
  'ec-042', 'ec-043', 'ec-048', 'ec-052', 'ec-059', 'ec-060', 'ec-061', 'ec-062',
  'ec-064', 'ec-065', 'ec-066', 'ec-067', 'ec-068', 'ec-069', 'ec-070', 'ec-071',
  'ec-072', 'ec-076', 'ec-081', 'ec-085', 'ec-086', 'ec-089', 'ec-098', 'ec-105',
  'ec-109', 'ec-115', 'ec-116', 'ec-117', 'ec-118', 'ec-120', 'ec-121', 'ec-122',
  'ec-123', 'ec-124', 'ec-125', 'ec-135', 'ec-136', 'ec-138', 'ec-147', 'ec-153',
  'ec-154', 'ec-155', 'ec-158', 'ec-161', 'ec-164', 'ec-167', 'ec-177', 'ec-178',
  'ec-179', 'ec-180', 'ec-181', 'ec-183', 'ec-184', 'ec-185', 'ec-186', 'ec-189',
  'ec-191', 'ec-192', 'ec-194', 'ec-196', 'ec-201', 'ec-208', 'ec-213', 'ec-214',
  'ec-216', 'ec-218', 'ec-219', 'ec-221', 'ec-227', 'ec-228', 'ec-229', 'ec-236',
  'ec-238', 'ec-243', 'ec-244', 'ec-245', 'ec-246', 'ec-247', 'ec-248', 'ec-249',
  'ec-261', 'ec-265', 'ec-266', 'ec-267', 'ec-271', 'ec-273', 'ec-275', 'ec-281',
  'ec-283', 'ec-308', 'ec-310', 'ec-311', 'ec-313', 'ec-315', 'ec-317', 'ec-318',
  'ec-320', 'ec-323', 'ec-329', 'ec-331', 'ec-332', 'ec-333', 'ec-336', 'ec-337',
  'ec-338', 'ec-342', 'ec-344', 'ec-353', 'ec-354', 'ec-355', 'ec-356', 'ec-361',
  'ec-364', 'ec-366', 'ec-373', 'ec-374', 'ec-376', 'ec-377', 'ec-380', 'ec-381',
  'ec-383', 'ec-384', 'ec-388', 'ec-389', 'ec-390', 'ec-398', 'ec-399', 'ec-402',
  'ec-404', 'ec-414', 'ec-415', 'ec-424', 'ec-430', 'ec-432', 'ec-437', 'ec-438',
  'ec-446', 'ec-447', 'ec-448', 'ec-453', 'ec-460', 'ec-472', 'ec-473', 'ec-474',
  'ec-475', 'ec-477', 'ec-478', 'ec-480', 'ec-481', 'ec-483', 'ec-485', 'osool-001',
  'osool-002', 'osool-003', 'osool-004', 'osool-005', 'osool-006', 'osool-007', 'osool-008', 'osool-009',
  'osool-010', 'osool-011', 'osool-012', 'osool-013', 'osool-014', 'osool-015', 'osool-016', 'osool-017',
  'osool-018', 'osool-019', 'osool-020', 'osool-021', 'osool-022', 'osool-023', 'osool-024', 'osool-025',
  'osool-026', 'osool-101', 'osool-102', 'osool-103', 'osool-104', 'osool-105', 'osool-106', 'osool-107',
  'osool-108', 'osool-109', 'osool-110', 'osool-111', 'osool-112', 'osool-113', 'osool-114', 'osool-115',
  'osool-116', 'osool-117', 'osool-118', 'osool-119', 'osool-120', 'osool-121', 'osool-122', 'osool-123',
  'osool-124', 'osool-125', 'osool-126', 'osool-127', 'osool-128', 'osool-129', 'osool-130', 'osool-131',
  'osool-132', 'osool-133', 'osool-134', 'osool-135', 'osool-136', 'osool-137', 'osool-138', 'osool-139',
  'osool-140', 'osool-141', 'osool-142', 'osool-143', 'osool-144', 'osool-145', 'osool-146', 'osool-147',
  'osool-148', 'osool-149', 'osool-150', 'osool-151', 'osool-152', 'osool-153', 'osool-154', 'osool-155',
  'osool-156', 'osool-157', 'osool-158', 'osool-159', 'osool-160', 'osool-161', 'osool-162', 'osool-163',
  'osool-164', 'osool-165', 'osool-166', 'osool-167', 'osool-168', 'osool-169', 'osool-170', 'osool-171',
  'osool-201', 'osool-202', 'osool-203', 'osool-204', 'osool-205', 'osool-206', 'osool-207', 'osool-208',
  'osool-209', 'osool-210', 'osool-211', 'osool-212', 'osool-213', 'osool-214', 'osool-215', 'osool-216',
  'osool-217', 'osool-218', 'osool-219', 'osool-220', 'osool-221', 'osool-222', 'osool-223', 'osool-224',
  'osool-225', 'osool-226', 'osool-227', 'osool-228', 'osool-301', 'osool-302', 'osool-303', 'osool-304',
  'osool-305', 'osool-401', 'osool-402', 'osool-403', 'osool-404', 'osool-405', 'osool-406', 'osool-407',
  'osool-408', 'osool-409', 'osool-410', 'osool-411', 'osool-412', 'osool-413', 'osool-414', 'osool-415',
  'osool-416', 'osool-417', 'osool-418', 'osool-419', 'osool-420', 'osool-421', 'osool-422', 'osool-423',
  'osool-424', 'osool-425', 'osool-426', 'osool-427', 'osool-428', 'osool-429', 'osool-430', 'osool-431',
  'osool-432', 'osool-433', 'osool-434', 'osool-435', 'osool-436', 'osool-437', 'osool-438', 'osool-439',
  'osool-440', 'osool-441', 'osool-442', 'osool-443', 'osool-444', 'osool-445', 'osool-446', 'osool-501',
  'osool-502', 'osool-503', 'osool-504', 'osool-505', 'osool-506', 'osool-507', 'osool-508', 'osool-509',
  'osool-510', 'osool-511', 'osool-512', 'osool-513', 'osool-514', 'osool-515', 'osool-516', 'osool-517',
  'osool-518', 'osool-519', 'osool-520', 'osool-521', 'osool-522', 'osool-523', 'osool-524', 'osool-525',
  'osool-526', 'osool-527', 'osool-528', 'osool-529', 'osool-530', 'osool-531', 'osool-532', 'osool-533',
  'osool-534', 'osool-535', 'osool-536', 'osool-537', 'osool-538', 'osool-539', 'osool-540', 'osool-541',
  'osool-813',
  // End of generated banners
];

const RECIPES_WITH_IMAGES_SET = new Set(RECIPES_WITH_IMAGES);

// The build scripts import this module under Node, where import.meta.env is not defined.
const BASE_URL = import.meta.env?.BASE_URL ?? '/';

/** Path of the recipe's own photo (relative to the site root), if it has one. */
export function getRecipeImagePath(id: string): string | undefined {
  return RECIPES_WITH_IMAGES_SET.has(id) ? `recipe-images/${id}.jpg` : undefined;
}

export const DEFAULT_RECIPE_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=75';

export function getRecipeImage(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  const path = getRecipeImagePath(id);
  return path ? `${BASE_URL}${path}` : DEFAULT_RECIPE_IMAGE;
}

/** Card-sized copy of the recipe's photo (see scripts/generate-thumbnails.ts). */
export function getRecipeThumbnail(id: string, customImage?: string): string {
  if (customImage && customImage.trim().length > 0) return customImage;
  return RECIPES_WITH_IMAGES_SET.has(id) ? `${BASE_URL}recipe-images/thumbs/${id}.jpg` : DEFAULT_RECIPE_IMAGE;
}
