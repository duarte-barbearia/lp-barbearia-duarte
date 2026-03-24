'use client';

import styled from '@emotion/styled';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { theme } from '@/styles/theme';
import { WHATSAPP } from '@/data/business';

const FloatButton = styled.a`
  @keyframes waPulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45);
    }
    70% {
      box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: ${theme.zIndex.overlay};
  width: 56px;
  height: 56px;
  border-radius: ${theme.radius.full};
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  animation: waPulse 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  transition: transform ${theme.transitions.base}, background ${theme.transitions.base};

  &:hover {
    transform: scale(1.08);
    background: #1ebe5c;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.yellow};
    outline-offset: 3px;
  }

  & svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default function WhatsAppFloat() {
  return (
    <FloatButton
      href={`https://wa.me/55${WHATSAPP}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsappLogoIcon weight="regular" />
    </FloatButton>
  );
}
