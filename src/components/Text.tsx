"use client";

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { theme } from '@/styles/theme';

type TextProps<T extends ElementType = "p"> = {
  as?: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

const headingBaseStyles = css`
  font-family: ${theme.fonts.body};
  font-weight: ${theme.typography.title.weight};
  line-height: 100%;
  letter-spacing: ${theme.typography.title.letterSpacing};

  & strong {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.typography.title.weight};
    letter-spacing: ${theme.typography.title.strongLetterSpacing};
    font-style: italic;
    margin-right: 6px;
  }
`;

const StyledText = styled.span<{ $tagName: string }>`
  margin: 0;

  ${({ $tagName }) =>
    $tagName === 'p' &&
    css`
      font-family: ${theme.fonts.body};
      font-size: ${theme.typography.paragraph.size};
      font-weight: 300;
      line-height: ${theme.typography.paragraph.lineHeight};
      letter-spacing: ${theme.typography.paragraph.letterSpacing};

      @media (max-width: ${theme.breakpoints.md}) {
        font-size: ${theme.typography.paragraph.mobileSize};
      }

      & strong {
        font-weight: 500;
      }
    `}

  ${({ $tagName }) =>
    $tagName === 'h1' &&
    css`
      ${headingBaseStyles};
      font-size: ${theme.typography.title.h1.desktop};

      @media (max-width: ${theme.breakpoints.md}) {
        font-size: ${theme.typography.title.h1.mobile};
      }
    `}

  ${({ $tagName }) =>
    $tagName === 'h2' &&
    css`
      ${headingBaseStyles};
      font-size: ${theme.typography.title.h2.desktop};

      @media (max-width: ${theme.breakpoints.md}) {
        font-size: ${theme.typography.title.h2.mobile};
      }
    `}

  ${({ $tagName }) =>
    $tagName === 'h3' &&
    css`
      ${headingBaseStyles};
      font-size: ${theme.typography.title.h3.desktop};

      @media (max-width: ${theme.breakpoints.md}) {
        font-size: ${theme.typography.title.h3.mobile};
      }
    `}

  ${({ $tagName }) =>
    $tagName === 'h4' &&
    css`
      ${headingBaseStyles};
      font-size: ${theme.typography.title.h4.desktop};

      @media (max-width: ${theme.breakpoints.md}) {
        font-size: ${theme.typography.title.h4.mobile};
      }
    `}
`;

export function Text<T extends ElementType = "p">({
  as,
  children,
  ...props
}: TextProps<T>) {
  const Tag = (as ?? 'p') as ElementType;
  const tagName = typeof Tag === 'string' ? Tag : 'p';

  return (
    <StyledText as={Tag} $tagName={tagName} {...props}>
      {children}
    </StyledText>
  );
}
