# CMF26 photos

The gallery is on `/cmf#photos`. Its images and captions are listed in
`src/content/cmf26-photos.ts`.

1. Put the finished JPEG or WebP photos in this folder. Use lowercase filenames
   with hyphens, such as `team-round-01.webp`. Export at about 2000 pixels on the
   longest edge and compress before adding; the site serves these files as-is.
2. Add each photo to the `photos` array of the relevant section in
   `src/content/cmf26-photos.ts`:

   ```ts
   {
     src: "/assets/cmf26/team-round-01.webp",
     alt: "Four students comparing their solutions at a table.",
     caption: "Working together during the team round.",
     width: 2000,
     height: 1333,
   },
   ```

   Use the actual exported image dimensions. Write alt text describing the image
   and a caption displayed below it. Include photographer credit in the caption
   if needed. Section and photo order determine display order; files without
   entries stay out of the gallery. Photos are displayed without full-size
   links.
3. Run `pnpm test src/test/cmf26-gallery.test.tsx` and `pnpm build`, then preview
   `/cmf#photos`. Publish through the site's normal deployment workflow.
