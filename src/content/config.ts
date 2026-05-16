import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Grundlagen', 'Broker', 'Strategien', 'Steuern', 'News']),
    author: z.string().default('Timon'),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
