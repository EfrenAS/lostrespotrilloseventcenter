import { number, string } from "astro/zod";
import { z, defineCollection } from "astro:content";

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        heroImage: z.string(),
        imageAttr: z.object({
            alt: z.string(),
            width: z.number(),
            height: z.number()
        })
    })
});

export const collections = {
    events: eventsCollection,
};