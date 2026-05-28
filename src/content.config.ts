import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notesCollection = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      subject: z.string(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
      hasFull: z.boolean().default(true),
      pdfUrl: z.string().url(),
      previewImage: image().optional(),
      chapters: z
        .array(
          z.object({
            title: z.string(),
            isChapter: z.boolean().optional(),
            url: z.string().url(),
          }),
        )
        .optional(),
    }),
});

export const collections = { notes: notesCollection };
