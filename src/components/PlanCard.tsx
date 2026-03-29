'use client';

import styled from '@emotion/styled';
import { InfinityIcon } from '@phosphor-icons/react';
import Button from './Button';
import { Img } from './Img';
import { Text } from './Text';
import { BadgePartner } from './BadgePartner';
import { theme } from '@/styles/theme';
import { partners as partnersData } from '@/data/partners';
import type { Plan, PlanAvailability } from '@/data/plans';
import { HAS_ACTIVE_PARTNERS, PARTNERS_SOON_MESSAGE, WHATSAPP } from '@/data/business';

interface PlanCardProps extends Partial<Plan> {
    className?: string;
}

const availabilityLabels: Record<PlanAvailability, string> = {
    mondayToWednesday: 'Segunda a Quarta',
    everyDay: 'Todos os dias',
};

const PlanCardContainer = styled.article`
    @keyframes goldShineFlow {
        0% {
            background-position: 0% 50%;
        }

        100% {
            background-position: 200% 50%;
        }
    }

    width: 100%;
    height: 100%;
    background: ${theme.colors.black500};
    border-radius: 28px;
    overflow: hidden;
    padding: 6px;
    display: flex;
    flex-direction: column;

    & .plan-card__hero {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        min-height: 380px;
        padding: 14px;
        display: flex;
        align-items: flex-end;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(5, 5, 5, 0.06) 35%, rgba(5, 5, 5, 0.9) 100%);
            z-index: 1;
        }

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 140px;
            background: linear-gradient(to top, rgba(5, 5, 5, 0.94), rgba(5, 5, 5, 0));
            z-index: 1;
        }

        &-image {
            position: absolute;
            inset: 0;

            &-content {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &-availability {
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 3;

            &-badge {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 10px 16px;
                border-radius: ${theme.radius.full};
                font-size: 1rem;
                line-height: 1;
                letter-spacing: -0.02em;
                font-weight: 600;
                color: ${theme.colors.black};
                background: ${theme.colors.white};

                & svg {
                    width: 18px;
                    height: 18px;
                }

                &.is-solid {
                    background: linear-gradient(92deg, #FFCB0C -0.99%, #FFEFB4 50.48%, #FFCB0C 97.09%);
                    background-size: 220% 100%;
                    animation: goldShineFlow 4.2s linear infinite;
                    will-change: background-position;
                }

                &.is-shiny {
                    background: rgba(5, 5, 5, 0.88);
                    color: ${theme.colors.white};
                    border: 1px solid rgba(220, 217, 201, 0.2);
                }
            }
        }

        &-overlay {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;

            &-price {
                display: flex;
                flex-direction: column;
                gap: 2px;
                color: ${theme.colors.textPrimary};
                margin-bottom: 12px;

                &-label {
                    font-size: 1rem;
                    color: ${theme.colors.white300};
                }

                &-value {
                    font-size: 3.2rem;
                    line-height: 0.95;
                    letter-spacing: -0.035em;
                    color: ${theme.colors.textPrimary};
                    font-weight: 700;
                }
            }

            &-announcement {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                width: max-content;
                max-width: 100%;
                padding: 6px 10px 6px 7px;
                border-radius: ${theme.radius.full};
                background: rgba(26, 26, 26, 0.82);
                border: 1px solid rgba(220, 217, 201, 0.16);
                color: ${theme.colors.white300};

                &-logo {
                    width: 20px;
                    height: 20px;
                    border-radius: ${theme.radius.full};
                    background: ${theme.colors.white};
                    color: ${theme.colors.black};
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    & img {
                        width: 14px;
                        height: 14px;
                        object-fit: contain;
                    }
                }

                &-label {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: ${theme.colors.yellow};
                    text-transform: uppercase;
                }

                &-text {
                    font-size: 0.82rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    & .plan-card__content {
        padding: 12px 22px 0;
        display: flex;
        flex-direction: column;
        gap: 18px;

        &-title {
            color: ${theme.colors.textPrimary};
            font-size: 1.95rem;
            line-height: 0.95;
            letter-spacing: -0.035em;

            & .plan-card__plus {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 3px 10px;
                margin-left: 6px;
                border-radius: ${theme.radius.full};
                background: linear-gradient(92deg, #FFCB0C -0.99%, #FFEFB4 50.48%, #FFCB0C 97.09%);
                background-size: 220% 100%;
                animation: goldShineFlow 4.2s linear infinite;
                color: ${theme.colors.black};
                font-size: 0.72rem;
                font-weight: 800;
                letter-spacing: 0.04em;
                line-height: 1.4;
                vertical-align: middle;
                text-transform: uppercase;
            }
        }

        &-description {
            color: ${theme.colors.textSecondary};
            font-size: 1.15rem;
            line-height: 1.08;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    & .plan-card__benefits {
        padding: 22px 22px 0 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-title {
            color: ${theme.colors.textPrimary};
            font-size: 1.3rem;
            line-height: 1;
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 0;
            padding: 0;
            align-content: flex-start;
        }

        &-placeholder {
            list-style: none;
            font-size: 0.9rem;
            color: ${theme.colors.textSecondary};
            border: 1px dashed rgba(220, 217, 201, 0.35);
            border-radius: ${theme.radius.full};
            padding: 8px 12px;
            line-height: 1.2;
        }
    }

    & .plan-card__action {
        padding: 16px 22px 22px;
        margin-top: auto;

        & > a,
        & > button {
            width: 100%;
            justify-content: center;
            padding: 14px 18px;
            font-size: 0.94rem;
            border-radius: 20px;
        }
    }

    @media (max-width: ${theme.breakpoints.md}) {
        border-radius: 32px;
        height: 100%;

        & .plan-card__hero {
            min-height: 286px;
            padding: 12px;

            &-availability {
                top: 12px;
                right: 12px;

                &-badge {
                    font-size: 0.75rem;
                    padding: 7px 10px;
                }
            }

            &-overlay {
                gap: 8px;

                &-price {
                    &-label {
                        font-size: 0.78rem;
                    }

                    &-value {
                        font-size: 2.1rem;
                    }
                }

                &-announcement {
                    width: 100%;
                    padding: 6px 10px 6px 7px;
                    gap: 6px;

                    &-label,
                    &-text {
                        font-size: 0.72rem;
                    }
                }
            }
        }

        & .plan-card__content {
            padding: 10px 18px 0;

            &-title {
                font-size: 1.65rem;
            }

            &-description {
                font-size: 0.88rem;
            }
        }

        & .plan-card__benefits {
            padding: 12px 18px 0;

            &-title {
                font-size: 1.3rem;
            }

            &-list {
                gap: 5px;
            }
        }

        & .plan-card__action {
            padding: 18px;

            & > a,
            & > button {
                font-size: 0.92rem;
            }
        }
    }

    @media (prefers-reduced-motion: reduce) {
        & .plan-card__hero-availability-badge.is-solid {
            animation: none;
            background-position: 50% 50%;
        }
    }
`;

export function PlanCard({
    availability = 'mondayToWednesday',
    badgeType = 'shiny',
    price = 99.9,
    name = 'Duarte Club',
    description = 'Plan description',
    image = '/backgrounds/hero.png',
    partners = [],
    className,
}: PlanCardProps) {
    const planPartners = partnersData.filter((partner) => partners.includes(partner.id));
    const hasPartnerBenefits = HAS_ACTIVE_PARTNERS && planPartners.length > 0;

    const priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(price);

    const announcementLabel = 'Novidade!';
    const announcementText = 'Assinatura Mensal - Barbearia Duarte';
    const announcementLogo = '/logos/logo-barbearia-duarte-black.svg';
    const availabilityClassName = badgeType === 'solid' ? 'is-solid' : 'is-shiny';
    const availabilityPrefix = badgeType === 'solid' ? 'ILIMITADO!' : '';
    const whatsappLink = `https://wa.me/55${WHATSAPP}`;

    const isPlus = name.includes('Plus');
    const displayName = isPlus ? name.replace(' Plus', '') : name;

    return (
        <PlanCardContainer className={className}>
            <header className="plan-card__hero">
                <div className="plan-card__hero-image">
                    <Img
                        src={image}
                        alt={name}
                        width={720}
                        height={640}
                        className="plan-card__hero-image-content"
                    />
                </div>

                <div className="plan-card__hero-availability">
                    <span className={`plan-card__hero-availability-badge ${availabilityClassName}`}>
                        <InfinityIcon weight="bold" />
                        {availabilityPrefix ? `${availabilityPrefix} ${availabilityLabels[availability]}` : availabilityLabels[availability]}
                    </span>
                </div>

                <div className="plan-card__hero-overlay">
                    <div className="plan-card__hero-overlay-price">
                        <Text as="span" className="plan-card__hero-overlay-price-label">
                            Preço fixo de
                        </Text>
                        <Text as="strong" className="plan-card__hero-overlay-price-value">
                            {priceFormatted}
                        </Text>
                    </div>

                    <div className="plan-card__hero-overlay-announcement">
                        <span className="plan-card__hero-overlay-announcement-logo">
                            <Img src={announcementLogo} alt="Novidade em breve" width={14} height={14} />
                        </span>
                        <Text as="span" className="plan-card__hero-overlay-announcement-label">
                            {announcementLabel}
                        </Text>
                        <Text as="span" className="plan-card__hero-overlay-announcement-text">
                            {announcementText}
                        </Text>
                    </div>
                </div>
            </header>

            <main className="plan-card__content">
                <Text as="h2" className="plan-card__content-title">
                    {displayName}
                    {isPlus && <span className="plan-card__plus">Plus</span>}
                </Text>
                <Text as="p" className="plan-card__content-description">
                    {description}
                </Text>
            </main>

            <section className="plan-card__benefits">
                <Text as="h3" className="plan-card__benefits-title">
                    {hasPartnerBenefits ? 'Ganhe diversos benefícios' : 'Benefícios para assinantes'}
                </Text>
                <ul className="plan-card__benefits-list">
                    {hasPartnerBenefits ? (
                        planPartners.map((partner) => (
                            <BadgePartner key={partner.id} logo={partner.logo} offer={partner.offer} partnerId={partner.id} />
                        ))
                    ) : (
                        <li className="plan-card__benefits-placeholder">{PARTNERS_SOON_MESSAGE}</li>
                    )}
                </ul>
            </section>

            <footer className="plan-card__action">
                <Button variant="light" id='planos-wpp' href='https://api.whatsapp.com/send?phone=5524981140482&text=Ol%C3%A1!%20Quero%20saber%20como%20funcionam%20os%20planos%20de%20assinatura.'>Virar um assinante</Button>
            </footer>
        </PlanCardContainer>
    );
}
