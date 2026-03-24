import type { PartnerId } from './partners';

export type PlanAvailability = 'mondayToWednesday' | 'everyDay';
export type PlanBadgeType = 'solid' | 'shiny';

export interface Plan {
    availability: PlanAvailability;
    badgeType: PlanBadgeType;
    price: number;
    name: string;
    description: string;
    image: string;
    partners: PartnerId[];
}

export const plans: Plan[] = [
    {
        availability: 'mondayToWednesday',
        badgeType: 'shiny',
        price: 99.9,
        name: 'Clube Duarte Barba',
        description: 'Faça um trato no visual da sua barba quantas vezes quiser, de segunda à quarta',
        image: '/plans/plan-1.png',
        partners: ['sol-neve', 'academia-fit', 'cafe-central', 'farmacia-saude'],
    },
    {
        availability: 'mondayToWednesday',
        badgeType: 'shiny',
        price: 109.9,
        name: 'Clube Duarte Corte',
        description: 'Faça um trato no visual do seu cabelo quantas vezes quiser, de segunda à quarta',
        image: '/plans/plan-2.png',
        partners: ['sol-neve', 'academia-fit', 'lavanderia-express'],
    },
    {
        availability: 'mondayToWednesday',
        badgeType: 'shiny',
        price: 169.9,
        name: 'Clube Duarte Corte + Barba',
        description: 'Corte e barba com agendamento flexível de segunda a quarta.',
        image: '/plans/plan-3.png',
        partners: ['sol-neve', 'academia-fit', 'cafe-central', 'farmacia-saude', 'lavanderia-express'],
    },
    {
        availability: 'everyDay',
        badgeType: 'solid',
        price: 119.9,
        name: 'Clube Duarte Barba Plus',
        description: 'Barba ilimitada todos os dias, com novidades exclusivas para assinantes em breve.',
        image: '/plans/plan-4.png',
        partners: ['sol-neve', 'cafe-central', 'lavanderia-express'],
    },
    {
        availability: 'everyDay',
        badgeType: 'solid',
        price: 129.9,
        name: 'Clube Duarte Corte Plus',
        description: 'Corte ilimitado todos os dias, com benefícios especiais para assinantes em breve.',
        image: '/plans/plan-5.png',
        partners: ['academia-fit', 'farmacia-saude', 'lavanderia-express'],
    },
    {
        availability: 'everyDay',
        badgeType: 'solid',
        price: 199.9,
        name: 'Clube Duarte Corte + Barba Plus',
        description: 'Corte e barba ilimitados todos os dias, com novas vantagens em preparação para assinantes.',
        image: '/plans/plan-6.png',
        partners: ['sol-neve', 'academia-fit', 'cafe-central', 'farmacia-saude', 'lavanderia-express'],
    },
];
