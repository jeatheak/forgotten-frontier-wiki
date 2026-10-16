import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: z.object({
      verification: z.enum(['scaffold', 'review-needed', 'verified']),
      sources: z.array(z.string()).min(1),
    }) }),
  }),
};
