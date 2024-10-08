import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroImageScroll: z.string().optional(),
		heroThumb: z.string().optional(),
		imgalt: z.string().optional(),
		status: z.string().optional(),
		author: z.string().optional(),
		customclass: z.string().optional(),
	}),
});

const project = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		heroImage: z.string().optional(),
		heroThumb: z.string().optional(),
		heroImageScroll: z.string().optional(),
		siteUrl: z.string().optional(),
		role: z.string().optional(),
		platform: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.string().optional(),
	}),
});


export const collections = {
	'blog': blog,
	'project': project,
  };