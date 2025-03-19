import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    type: z.enum(['project', 'article']), 
	tags: z.array(z.string()).optional(),  
  }),
});

export const collections = { posts };

