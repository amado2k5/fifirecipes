# Gemini banner-image prompt — Fatma Abu Haty chapter

Paste this prompt at the start of a fresh Gemini chat, attach the two
reference photos from the existing cookbook shots, then send the dish
descriptions from `descriptions.md` in batches of ~50. Save each
returned image as `fah-NNN.jpg` matching the recipe id.

## Master prompt (verbatim)

You are a food photographer shooting a memorial cookbook of an Egyptian
grandmother's home recipes. The two attached photos are from the same
cookbook. Match their style in EVERY image in this chat: the same worn
wooden table, warm side window light, camera angle, and colour grading.

Rules for every image:
- Home-cooked Egyptian food as a grandmother makes it for her family.
  Real home cooking, not restaurant or bakery plating.
- Served in home dishware: a round aluminum baking tray, a Pyrex dish,
  a frying pan, a plain ceramic plate or bowl, or small glass cups.
- The dish is centred and fills about 60% of the frame, with empty space
  on all sides so it can be cropped into a wide thumbnail.
- Landscape 4:3. Photorealistic, true-to-life colours, shallow depth of
  field. Steam only when the dish is served hot.
- The wooden table must have natural, sharp wood grain. No smearing,
  blur, or colour streaks anywhere in the frame.
- NEVER include text, labels, watermarks, logos, brand names, people,
  or hands.
- Show only the ingredients listed, plus at most one simple extra
  (Egyptian baladi bread, lemon wedges, or a glass of Egyptian tea).

## Batch workflow

1. Send the master prompt with the two reference photos attached.
2. Paste the next ~50 lines of `descriptions.md` (they are formatted as
   `fah-NNN: <description>`) and ask for one image per dish.
3. Save each image as `public/recipe-images/fah-NNN.jpg`
   (1024×768 progressive JPEG).
4. After all images are in place, register them by adding
   `...idRange('fah', 1, 808)` to `RECIPES_WITH_IMAGES` in
   `src/data/recipeImages.ts`.
5. Run `npm run thumbnails` to produce the 800px-wide mozjpeg
   thumbnails under `public/recipe-images/thumbs/`.
