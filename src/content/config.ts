import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image(),
      imageAttr: z.object({
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    }),
});

export const collections = {
  events: eventsCollection,
};
