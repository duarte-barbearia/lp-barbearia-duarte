'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from '@emotion/styled';
import { FireSimpleIcon } from '@phosphor-icons/react';
import { theme } from '@/styles/theme';
import { WHATSAPP } from '@/data/business';

gsap.registerPlugin(ScrollTrigger);

const WA_LINK = `https://wa.me/55${WHATSAPP}`;

const BannerContainer = styled.div`
  @keyframes bannerShine {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.overlay};
  background: rgba(5, 5, 5, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid ${theme.colors.border};
  padding: 12px 48px;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  & .banner__badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: ${theme.radius.full};
    background: linear-gradient(92deg, #FFCB0C -0.99%, #FFEFB4 50.48%, #FFCB0C 97.09%);
    background-size: 220% 100%;
    animation: bannerShine 4.2s linear infinite;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.body};
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.4;
    white-space: nowrap;
    flex-shrink: 0;

    & svg {
      width: 12px;
      height: 12px;
    }
  }

  & .banner__text {
    color: ${theme.colors.white300};
    font-family: ${theme.fonts.body};
    font-size: 0.88rem;
    line-height: 1;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    & strong {
      color: ${theme.colors.textPrimary};
      font-weight: ${theme.fontWeights.semibold};
    }
  }

  & .banner__cta {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: ${theme.radius.lg};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.body};
    font-size: 0.82rem;
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.yellow};
      outline-offset: 3px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 10px 16px;
    gap: 10px;

    & .banner__badge {
      padding: 3px 8px;
      font-size: 0.62rem;

      & svg {
        width: 10px;
        height: 10px;
      }
    }

    & .banner__text {
      font-size: 0.76rem;
    }

    & .banner__cta {
      padding: 7px 12px;
      font-size: 0.76rem;
    }
  }

  @media (max-width: 420px) {
    & .banner__text {
      display: none;
    }

    & .banner__badge {
      font-size: 0.7rem;
      padding: 4px 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    & .banner__badge {
      animation: none;
      background-position: 50% 50%;
    }
  }
`;

export default function PlansBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Hide if URL targets course section (for campaign redirects) */
    const url = (window.location.hash + window.location.search).toLowerCase();
    if (url.includes('curso')) return;

    const trigger = ScrollTrigger.create({
      trigger: '#planos',
      start: 'bottom 80%',
      onEnter: () => {
        gsap.to(bannerRef.current, {
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(bannerRef.current, {
          y: '100%',
          duration: 0.4,
          ease: 'power3.in',
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <BannerContainer ref={bannerRef}>
      <span className="banner__badge">
        <FireSimpleIcon weight="fill" />
        Últimas vagas
      </span>
      <span className="banner__text">
        <strong>Clube Duarte Corte + Barba Plus</strong> — assine agora
      </span>
      <a
        className="banner__cta"
        href={WA_LINK}
        target="_blank"
        rel="noreferrer noopener"
      >
        Assinar agora
      </a>
    </BannerContainer>
  );
}
