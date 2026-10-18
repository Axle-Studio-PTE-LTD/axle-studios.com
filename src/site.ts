/** Site-wide details. Edit these; the page reads everything from here. */
export const site = {
  name: 'Axle Studios',
  legalName: 'Axle Studios Pte Ltd',
  /** ACRA UEN, shown in the footer once set. */
  uen: '',
  location: 'Singapore',
  description:
    'Axle Studios Pte Ltd is a Singapore software company. Our first product, Abang SG, compares repair and home service companies so you can find the right one for the job.',
  /** Contact address. Leave empty to hide the email button. */
  email: 'admin@axle-studios.com',
  /** WhatsApp number in international format without "+", e.g. '6591234567'. Leave empty to hide. */
  whatsapp: '',
  year: new Date().getFullYear(),
};

export const abang = {
  name: 'Abang SG',
  url: 'https://abang.sg',
  /** Flip to true when abang.sg is live; the button then links to it. */
  live: true,
};

/** Social links shown as icon buttons on each founder card. */
export type Social = { type: 'website' | 'linkedin' | 'telegram' | 'instagram' | 'email'; url: string };

export const founders: { name: string; role: string; focus: string; socials: Social[] }[] = [
  {
    name: 'David',
    role: 'Founder',
    focus: 'Business direction, finance, growth and sales.',
    socials: [
      { type: 'website', url: 'https://tandavid.com' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/tandavid8765876' },
      { type: 'telegram', url: 'https://t.me/riceandegg' },
    ],
  },
  {
    name: 'Long Ju',
    role: 'Co-founder',
    focus: 'Engineering, product and search.',
    socials: [
      { type: 'website', url: 'https://babasama.com' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/ju-long/' },
      { type: 'instagram', url: 'https://instagram.com/babasama._' },
    ],
  },
  {
    name: 'Andy',
    role: 'Co-founder',
    focus: 'Marketing, brand awareness and customer growth.',
    socials: [{ type: 'email', url: 'mailto:andychong.official@gmail.com' }],
  },
];
