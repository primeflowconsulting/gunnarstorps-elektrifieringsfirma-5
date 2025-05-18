import type { Collection } from 'tinacms';

const Global: Collection = {
  label: 'Global',
  name: 'global',
  path: 'content/global',
  format: 'json',
  ui: {
    global: true,
  },
  fields: [
    {
      type: 'object' as const,
      name: 'header',
      label: 'Header',
      fields: [
        {
          type: 'string' as const,
          name: 'homeLabel',
          label: 'Home Link Label',
        },
        {
          type: 'string' as const,
          name: 'servicesLabel',
          label: 'Services Dropdown Label',
        },
        {
          type: 'string' as const,
          name: 'aboutLabel',
          label: 'About Link Label',
        },
        {
          type: 'string' as const,
          name: 'contactButtonLabel',
          label: 'Contact Button Label',
        },
        {
          type: 'image' as const,
          name: 'logo',
          label: 'Logo Image',
        },
        {
          type: 'number' as const,
          name: 'logoWidth',
          label: 'Logo Width (px)',
          description: 'Width of the logo in pixels',
        },
        {
          type: 'number' as const,
          name: 'logoHeight',
          label: 'Logo Height (px)',
          description: 'Height of the logo in pixels',
        },
        {
          type: 'object' as const,
          name: 'services',
          label: 'Services Menu Items',
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
              name: 'id',
              label: 'Service ID',
              description: 'Used for the URL (e.g., "solenergi" for /solenergi)',
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
          ],
        },
      ],
    },
    {
      type: 'object' as const,
      name: 'footer',
      label: 'Footer',
      fields: [
        {
          type: 'string' as const,
          name: 'companyName',
          label: 'Company Name',
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
          type: 'object' as const,
          name: 'socialMedia',
          label: 'Social Media',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.platform || 'Social Media' };
            },
          },
          fields: [
            {
              type: 'string' as const,
              name: 'platform',
              label: 'Platform',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
              ],
            },
            {
              type: 'string' as const,
              name: 'url',
              label: 'URL',
            },
          ],
        },
        {
          type: 'string' as const,
          name: 'servicesTitle',
          label: 'Services Section Title',
        },
        {
          type: 'object' as const,
          name: 'services',
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
              name: 'id',
              label: 'Service ID',
              description: 'Used for the URL (e.g., "solenergi" for /solenergi)',
            },
          ],
        },
        {
          type: 'string' as const,
          name: 'contactTitle',
          label: 'Contact Section Title',
        },
        {
          type: 'object' as const,
          name: 'contact',
          label: 'Contact Information',
          fields: [
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
          ],
        },
        {
          type: 'string' as const,
          name: 'hoursTitle',
          label: 'Opening Hours Section Title',
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
          type: 'object' as const,
          name: 'legalLinks',
          label: 'Legal Links',
          list: true,
          fields: [
            {
              type: 'string' as const,
              name: 'label',
              label: 'Label',
            },
            {
              type: 'string' as const,
              name: 'href',
              label: 'URL',
            },
          ],
        },
        {
          type: 'string' as const,
          name: 'copyright',
          label: 'Copyright Text',
        },
      ],
    },
  ],
};

export default Global;
