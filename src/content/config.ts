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

const amenities = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      quantity: z.number(),
      measurement: z.string(),
      icon: image(),
      width: z.number(),
      height: z.number(),
      formats: z.string().array(),
      altImage: z.string(),
    }),
});

export const collections = {
  events: eventsCollection,
  amenities: amenities,
};
