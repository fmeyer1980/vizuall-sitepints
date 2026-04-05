import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

const employees = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heading: z.string(),
    subheading: z.string().optional(),
    template: z.enum(['index', 'default']).default('default'),
  }),
});

export const collections = { cases, employees, pages };
