import type { Collection, TinaTemplate } from 'tinacms';

// Hero Block Schema
const heroBlockSchema: TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string' as const,
      name: 'heroTitle',
      label: 'Title',
      required: true,
    },
    {
      type: 'string' as const,
      name: 'subtitle',
      label: 'Subtitle',
    },
    {
      type: 'image' as const,
      name: 'image',
      label: 'Background Image',
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
    {
      type: 'object' as const,
      name: 'secondaryCta',
      label: 'Secondary CTA',
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
};

// Services Block Schema
const servicesBlockSchema: TinaTemplate = {
  name: 'services',
  label: 'Services Section',
  fields: [
    {
      type: 'string' as const,
      name: 'sectionTitle',
      label: 'Title',
    },
    {
      type: 'string' as const,
      name: 'subtitle',
      label: 'Subtitle',
    },
    {
      type: 'string' as const,
      name: 'variant',
      label: 'Variant',
      options: [
        { label: 'Featured', value: 'featured' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
    {
      type: 'string' as const,
      name: 'background',
      label: 'Background',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Light', value: 'light' },
      ],
    },
    {
      type: 'string' as const,
      name: 'id',
      label: 'Section ID',
    },
    {
      type: 'object' as const,
      name: 'serviceItems',
      label: 'Services',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title || 'Service' };
        },
      },
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
          ui: {
            component: 'textarea',
          },
        },
        {
          type: 'image' as const,
          name: 'image',
          label: 'Image',
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
          name: 'id',
          label: 'Service ID',
          description: 'Used for the URL (e.g., "solenergi" for /solenergi)',
        },
      ],
    },
    {
      type: 'boolean' as const,
      name: 'showMoreLink',
      label: 'Show "See All Services" Link',
    },
  ],
};

// About Block Schema
const aboutBlockSchema: TinaTemplate = {
  name: 'about',
  label: 'About Section',
  fields: [
    {
      type: 'string' as const,
      name: 'title',
      label: 'Title',
      description: 'The title of the about section',
    },
    {
      type: 'string' as const,
      name: 'description',
      label: 'Description',
      description: 'The description text for the about section',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image' as const,
      name: 'image',
      label: 'Image',
      description: 'The image to display in the about section',
    },
    {
      type: 'string' as const,
      name: 'experience',
      label: 'Experience',
      description: 'Years of experience (e.g., "30+ år")',
    },
    {
      type: 'string' as const,
      name: 'founded',
      label: 'Founded Year',
      description: 'Year the company was founded',
    },
    {
      type: 'string' as const,
      name: 'employees',
      label: 'Number of Employees',
      description: 'Number of employees in the company',
    },
    {
      type: 'string' as const,
      name: 'satisfaction',
      label: 'Customer Satisfaction',
      description: 'Customer satisfaction rate (e.g., "98%+")',
    },
    {
      type: 'object' as const,
      name: 'cta',
      label: 'Call to Action',
      fields: [
        {
          type: 'string' as const,
          name: 'text',
          label: 'Button Text',
        },
        {
          type: 'string' as const,
          name: 'href',
          label: 'Button Link',
        },
      ],
    },
  ],
};

// CTA Block Schema
const ctaBlockSchema: TinaTemplate = {
  name: 'cta',
  label: 'CTA Section',
  fields: [
    {
      type: 'string' as const,
      name: 'ctaTitle',
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
    {
      type: 'object' as const,
      name: 'secondaryCta',
      label: 'Secondary CTA',
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
};

// Company Overview Block Schema
const companyOverviewBlockSchema: TinaTemplate = {
  name: 'companyOverview',
  label: 'Company Overview',
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
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image' as const,
      name: 'image',
      label: 'Image',
    },
    {
      type: 'object' as const,
      name: 'stats',
      label: 'Statistics',
      list: true,
      fields: [
        {
          type: 'string' as const,
          name: 'label',
          label: 'Label',
        },
        {
          type: 'string' as const,
          name: 'value',
          label: 'Value',
        },
      ],
    },
  ],
};

// Values Block Schema
const valuesBlockSchema: TinaTemplate = {
  name: 'values',
  label: 'Values',
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
      name: 'values',
      label: 'Values',
      list: true,
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
          type: 'string' as const,
          name: 'icon',
          label: 'Icon',
          options: [
            { label: 'Shield', value: 'shield' },
            { label: 'Users', value: 'users' },
            { label: 'Lightning', value: 'lightning' },
          ],
        },
      ],
    },
  ],
};

// Certifications Block Schema
const certificationsBlockSchema: TinaTemplate = {
  name: 'certifications',
  label: 'Certifications',
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
      type: 'string' as const,
      name: 'certifications',
      label: 'Certifications',
      list: true,
    },
    {
      type: 'string' as const,
      name: 'guarantees',
      label: 'Guarantees',
      list: true,
    },
  ],
};

// Contact Block Schema
const contactBlockSchema: TinaTemplate = {
  name: 'contact',
  label: 'Contact Section',
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
      type: 'string' as const,
      name: 'phone',
      label: 'Phone Number',
    },
    {
      type: 'string' as const,
      name: 'email',
      label: 'Email Address',
    },
    {
      type: 'string' as const,
      name: 'address',
      label: 'Address Lines',
      list: true,
    },
    {
      type: 'string' as const,
      name: 'postalCode',
      label: 'Postal Code',
    },
    {
      type: 'string' as const,
      name: 'city',
      label: 'City',
    },
    {
      type: 'object' as const,
      name: 'hours',
      label: 'Opening Hours',
      list: true,
      fields: [
        {
          type: 'string' as const,
          name: 'days',
          label: 'Days',
        },
        {
          type: 'string' as const,
          name: 'hours',
          label: 'Hours',
        },
      ],
    },
    {
      type: 'string' as const,
      name: 'mapUrl',
      label: 'Google Maps Embed URL',
      ui: {
        component: 'textarea',
      },
    },
  ],
};

// Testimonials Block Schema
const testimonialsBlockSchema: TinaTemplate = {
  name: 'testimonials',
  label: 'Testimonials',
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
      name: 'testimonials',
      label: 'Testimonials',
      list: true,
      fields: [
        {
          type: 'string' as const,
          name: 'quote',
          label: 'Quote',
        },
        {
          type: 'string' as const,
          name: 'author',
          label: 'Author',
        },
        {
          type: 'number' as const,
          name: 'rating',
          label: 'Rating (1-5)',
        },
      ],
    },
  ],
};

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
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
      type: 'object' as const,
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        servicesBlockSchema,
        aboutBlockSchema,
        ctaBlockSchema,
        companyOverviewBlockSchema,
        valuesBlockSchema,
        certificationsBlockSchema,
        testimonialsBlockSchema,
        contactBlockSchema,
      ],
    },
  ],
};

export default Page;
