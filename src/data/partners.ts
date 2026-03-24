export const partnerIds = [
  'sol-neve',
  'academia-fit',
  'cafe-central',
  'farmacia-saude',
  'lavanderia-express',
] as const;

export type PartnerId = (typeof partnerIds)[number];

export interface Partner {
  id: PartnerId;
  logo: string;
  offer: string;
}

export const partners: Partner[] = [
  {
    id: 'sol-neve',
    logo: '/logos/partners/sol-neve.png',
    offer: '5% OFF',
  },
  {
    id: 'academia-fit',
    logo: '/logos/partners/academia-fit.png',
    offer: '10% OFF',
  },
  {
    id: 'cafe-central',
    logo: '/logos/partners/cafe-central.png',
    offer: '10% OFF',
  },
  {
    id: 'farmacia-saude',
    logo: '/logos/partners/farmacia-saude.png',
    offer: '8% OFF',
  },
  {
    id: 'lavanderia-express',
    logo: '/logos/partners/lavanderia-express.png',
    offer: '10% OFF',
  },
];
