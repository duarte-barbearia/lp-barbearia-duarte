'use client';

import styled from '@emotion/styled';
import { Text } from './Text';
import { theme } from '@/styles/theme';
import type { PartnerId } from '@/data/partners';

interface BadgePartnerProps {
    logo?: string;
    offer: string;
    partnerId: PartnerId;
}

type PartnerBadgeTheme = {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
    iconText: string;
    iconLabel: string;
};

const partnerBadgeThemeById: Record<PartnerId, PartnerBadgeTheme> = {
    'sol-neve': {
        bg: '#F4F3EC',
        border: 'rgba(5, 5, 5, 0.12)',
        text: '#050505',
        iconBg: '#0F60C8',
        iconText: '#F4F3EC',
        iconLabel: 'SN',
    },
    'academia-fit': {
        bg: '#F4F3EC',
        border: 'rgba(220, 217, 201, 0.18)',
        text: '#050505',
        iconBg: '#3A0C13',
        iconText: '#F4F3EC',
        iconLabel: 'AF',
    },
    'cafe-central': {
        bg: '#F4F3EC',
        border: 'rgba(5, 5, 5, 0.12)',
        text: '#050505',
        iconBg: '#2979CC',
        iconText: '#F4F3EC',
        iconLabel: 'CC',
    },
    'farmacia-saude': {
        bg: '#F4F3EC',
        border: 'rgba(5, 5, 5, 0.12)',
        text: '#050505',
        iconBg: '#1E5EA8',
        iconText: '#F4F3EC',
        iconLabel: 'FS',
    },
    'lavanderia-express': {
        bg: '#F4F3EC',
        border: 'rgba(5, 5, 5, 0.12)',
        text: '#050505',
        iconBg: '#244B7A',
        iconText: '#F4F3EC',
        iconLabel: 'LX',
    },
};

const BadgePartnerContainer = styled.li<{ $partnerId: PartnerId }>`
	${({ $partnerId }) => {
        const palette = partnerBadgeThemeById[$partnerId];

        return `
			display: inline-flex;
			align-items: center;
			gap: 8px;
			min-height: 30px;
			border-radius: ${theme.radius.full};
			padding: 5px 12px 5px 8px;
			border: 1px solid ${palette.border};
			background: ${palette.bg};
			color: ${palette.text};
		`;
    }}

	& .badge-partner__logo {
		width: 18px;
		height: 18px;
		border-radius: ${theme.radius.full};
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		font-weight: 700;
		line-height: 1;
		background: ${props => partnerBadgeThemeById[props.$partnerId].iconBg};
		color: ${props => partnerBadgeThemeById[props.$partnerId].iconText};
	}

	& .badge-partner__offer {
		font-size: 0.95rem;
		line-height: 1;
		letter-spacing: -0.02em;
		white-space: nowrap;
	}
`;

export function BadgePartner({ offer, partnerId }: BadgePartnerProps) {
    return (
        <BadgePartnerContainer $partnerId={partnerId}>
            <span className='badge-partner__logo'>
                {partnerBadgeThemeById[partnerId].iconLabel}
            </span>
            <Text as='span' className='badge-partner__offer'>
                {offer}
            </Text>
        </BadgePartnerContainer>
    );
}
