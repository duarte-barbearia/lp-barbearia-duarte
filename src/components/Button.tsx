'use client';

import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { WHATSAPP } from '@/data/business';

const WA_LINK = `https://wa.me/55${WHATSAPP}`;

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  href?: string;
  onClick?: () => void;
}

const variants = {
  light: {
    bg: theme.colors.white,
    color: theme.colors.black,
  },
  dark: {
    bg: theme.colors.black,
    color: theme.colors.white,
  },
};

const StyledButton = styled.a<{ $variant: 'light' | 'dark' }>`
  display: inline-flex;
  width: max-content;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  overflow: hidden;
  background-color: ${({ $variant }) => variants[$variant].bg};
  color: ${({ $variant }) => variants[$variant].color};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  line-height: 1.2;
  border-radius: ${theme.radius.lg};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.yellow};
    outline-offset: 3px;
  }

  & .button__slot {
    display: inline-flex;
    align-items: flex-start;
    overflow: hidden;
  }

  & .button__slot--text {
    height: 1.2em;
  }

  & .button__slot--icon {
    width: 18px;
    height: 18px;
  }

  & .button__slide {
    display: flex;
    flex-direction: column;
    transform: translateY(0);
    transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  & .button__line {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.2em;
  }

  & .button__line--icon {
    width: 18px;
    height: 18px;
  }

  &:hover .button__slot--text .button__slide,
  &:focus-visible .button__slot--text .button__slide {
    transform: translateY(-1.2em);
  }

  &:hover .button__slot--icon .button__slide,
  &:focus-visible .button__slot--icon .button__slide {
    transform: translateY(-18px);
  }

  & svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

export default function Button({
  children = 'Virar um assinante',
  variant = 'light',
  href = WA_LINK,
  onClick,
}: ButtonProps) {
  const isLink = !!href;
  const isExternal = isLink && (href.startsWith('http') || href.startsWith('mailto:'));

  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      as={isLink ? 'a' : 'button'}
      href={isLink ? href : undefined}
      type={isLink ? undefined : 'button'}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
    >
      <span className="button__slot button__slot--text">
        <span className="button__slide">
          <span className="button__line">{children}</span>
          <span className="button__line" aria-hidden="true">
            {children}
          </span>
        </span>
      </span>

      <span className="button__slot button__slot--icon" aria-hidden="true">
        <span className="button__slide">
          <span className="button__line button__line--icon">
            <ArrowUpRightIcon weight="bold" />
          </span>
          <span className="button__line button__line--icon">
            <ArrowUpRightIcon weight="bold" />
          </span>
        </span>
      </span>
    </StyledButton>
  );
}
