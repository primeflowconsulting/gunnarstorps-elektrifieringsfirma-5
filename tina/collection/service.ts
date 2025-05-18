import type { Collection } from 'tinacms';

const Service: Collection = {
  label: 'Services',
  name: 'service',
  path: 'content/services',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string' as const,
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string' as const,
      name: 'description',
      label: 'Short Description',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string' as const,
      name: 'longDescription',
      label: 'Long Description',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image' as const,
      name: 'image',
      label: 'Service Image',
    },
    {
      type: 'image' as const,
      name: 'heroImage',
      label: 'Hero Background Image',
    },
    {
      type: 'string' as const,
      name: 'icon',
      label: 'Icon',
      options: [
        { label: 'Sun', value: 'sun' },
        { label: 'Charging Station', value: 'charging-station' },
        { label: 'Home', value: 'home' },
        { label: 'Tools', value: 'tools' },
        { label: 'Bolt', value: 'bolt' },
        { label: 'Lightbulb', value: 'lightbulb' },
        { label: 'Leaf', value: 'leaf' },
      ],
    },
    {
      type: 'string' as const,
      name: 'benefits',
      label: 'Benefits',
      list: true,
    },
    {
      type: 'string' as const,
      name: 'features',
      label: 'Features',
      list: true,
    },
    {
      type: 'object' as const,
      name: 'cta',
      label: 'Call to Action',
      fields: [
        {
          type: 'string' as const,
          name: 'title',
          label: 'Title',
        },
        {
          type: 'string' as const,
          name: 'description',
          label: 'Description',
        },
        {
          type: 'object' as const,
          name: 'primaryCta',
          label: 'Primary CTA',
          fields: [
            {
              type: 'string' as const,
              name: 'text',
              label: 'Text',
            },
            {
              type: 'string' as const,
              name: 'href',
              label: 'Link',
            },
          ],
        },
      ],
    },
    {
      type: 'number' as const,
      name: 'relatedServicesLimit',
      label: 'Number of Related Services to Show',
      description: 'Maximum number of related services to display',
    },
  ],
};

export default Service;
