'use client';

import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';

interface BadgeShinyProps {
    icon?: ReactNode;
    text?: ReactNode;
    className?: string;
}

const BadgeShinyContainer = styled.div`
	display: flex;
	align-items: center;

	& .badge-shiny__icon {
		display: inline-flex;
		align-items: center;
	}

	& .badge-shiny__text {
		display: inline-flex;
		align-items: center;
	}
`;

export function BadgeShiny({ icon, text, className }: BadgeShinyProps) {
    return (
        <BadgeShinyContainer className={className}>
            {icon ? <span className="badge-shiny__icon">{icon}</span> : null}
            {text ? (
                <Text as="span" className="badge-shiny__text">
                    {text}
                </Text>
            ) : null}
        </BadgeShinyContainer>
    );
}
