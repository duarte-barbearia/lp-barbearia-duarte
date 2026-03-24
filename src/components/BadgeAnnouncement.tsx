'use client';

import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';
import { theme } from '@/styles/theme';

type BadgeAnnouncementVariant = 'light' | 'dark';

interface BadgeAnnouncementProps {
    children: ReactNode;
    variant?: BadgeAnnouncementVariant;
    icon?: ReactNode;
    className?: string;
}

const variants = {
    light: {
        bg: theme.colors.white300,
        text: theme.colors.black,
        strong: theme.colors.black,
        iconBg: theme.colors.black,
        iconColor: theme.colors.white,
    },
    dark: {
        bg: 'rgba(5, 5, 5, 0.62)',
        text: theme.colors.white,
        strong: theme.colors.yellow,
        iconBg: theme.colors.white,
        iconColor: theme.colors.black,
    },
} as const;

const BadgeAnnouncementContainer = styled.div<{ $variant: BadgeAnnouncementVariant }>`
	display: inline-flex;
	align-items: center;
	gap: ${theme.spacing.md};
	width: 100%;
	border-radius: ${theme.radius.full};
	padding: ${theme.spacing.sm} ${theme.spacing.lg};
	background: ${({ $variant }) => variants[$variant].bg};     

	& .badge-announcement__icon {
		width: 42px;
		height: 42px;
		flex-shrink: 0;
		border-radius: ${theme.radius.full};
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: ${({ $variant }) => variants[$variant].iconBg};
		color: ${({ $variant }) => variants[$variant].iconColor};
		font-weight: ${theme.fontWeights.bold};
		font-size: ${theme.fontSizes.lg};
		line-height: 1;
	}

	& .badge-announcement__text {
		color: ${({ $variant }) => variants[$variant].text};
		font-family: ${theme.fonts.body};
		font-size: ${theme.fontSizes['2xl']};
		font-weight: ${theme.fontWeights.regular};
		line-height: 1.1;
	}

	& .badge-announcement__text strong {
		color: ${({ $variant }) => variants[$variant].strong};
		font-weight: ${theme.fontWeights.extrabold};
	}
`;

export function BadgeAnnouncement({
    children,
    variant = 'light',
    icon,
    className,
}: BadgeAnnouncementProps) {
    return (
        <BadgeAnnouncementContainer className={className} $variant={variant}>
            <span className="badge-announcement__icon">{icon ?? 'd'}</span>
            <Text as="span" className="badge-announcement__text">
                {children}
            </Text>
        </BadgeAnnouncementContainer>
    );
}
