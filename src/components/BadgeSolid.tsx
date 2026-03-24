'use client';

import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';

interface BadgeSolidProps {
    icon?: ReactNode;
    text?: ReactNode;
    className?: string;
}

const BadgeSolidContainer = styled.div`
	display: flex;
	align-items: center;

	& .badge-solid__icon {
		display: inline-flex;
		align-items: center;
	}

	& .badge-solid__text {
		display: inline-flex;
		align-items: center;
	}
`;

export function BadgeSolid({ icon, text, className }: BadgeSolidProps) {
    return (
        <BadgeSolidContainer className={className}>
            {icon ? <span className="badge-solid__icon">{icon}</span> : null}
            {text ? (
                <Text as="span" className="badge-solid__text">
                    {text}
                </Text>
            ) : null}
        </BadgeSolidContainer>
    );
}
