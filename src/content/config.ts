import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Grundlagen', 'Broker', 'Strategien', 'Steuern', 'News', 'Krypto']),
    subcategory: z.string().optional(),
    author: z.string().default('Redaktion'),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    // Optionale FAQ fürs FAQPage-Schema (überschreibt die automatische
    // Extraktion aus Frage-Überschriften)
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

export const collections = { blog };
