import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image().refine((img) => img.width >= 600, {
        message: 'The cover image must have to width 600 pixels',
      }),
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

const albums = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      altImage: z.string(),
      pictures: image()
        .refine((img) => img.width >= 600, {
          message: 'The cover image must have to width 600 pixels',
        })
        .array(),
      formats: z.string().array(),
      width: z.number(),
      height: z.number(),
    }),
});

export const collections = {
  events: eventsCollection,
  amenities: amenities,
  albums: albums,
};
