'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from '@emotion/styled';
import { Img } from '../components/Img';
import { Text } from '@/components/Text';
import Button from '@/components/Button';
import { theme } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const HeroContainer = styled.section`
  background: ${theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
  padding: 48px 24px;
  color: ${theme.colors.textPrimary};

  & .hero__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 520px;
      background: linear-gradient(to top, ${theme.colors.overlay}, transparent);
      z-index: 1;

      @media (max-width: 768px) {
        height: 600px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 400px;
      background: linear-gradient(to top, ${theme.colors.overlay}, transparent);
      z-index: 1;
    }

    & img {
      object-fit: cover;
      object-position: top;
    }
  }

  & .hero__content {
    width: min(100%, ${theme.container.xl});
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    z-index: 2;
    gap: ${theme.spacing.lg};

    &-image {
      width: 54px;
      height: auto;
      object-fit: contain;

      @media (max-width: 768px) {
        width: 48px;
      }
    }

    &-title {
      max-width: 820px;
      text-align: center;
      color: ${theme.colors.textPrimary};

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &-description {
      max-width: 580px;
      text-align: center;
      color: ${theme.colors.white400};

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.set('.hero__content-image', { opacity: 0, scale: 0.85 });
      gsap.set('.hero__content-title', { opacity: 0, y: 28 });
      gsap.set('.hero__content-description', { opacity: 0, y: 20 });
      gsap.set('.hero__content > a, .hero__content > button', { opacity: 0, y: 14 });

      const tl = gsap.timeline({ delay: 1.8 });

      tl.to('.hero__content-image', {
        opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.8)',
      })
        .to('.hero__content-title', {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        }, '-=0.3')
        .to('.hero__content-description', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.3')
        .to('.hero__content > a, .hero__content > button', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        }, '-=0.2');

      gsap.to('.hero__background img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return <HeroContainer id="inicio" ref={sectionRef}>
    <div className="hero__background">
      {
        !isMobile ? (
          <Img
            src="/backgrounds/hero2.png"
            alt="Hero background"
            fill
            priority
          />
        ) : (
          <Img
            src="/backgrounds/hero-mobile.png"
            alt="Hero background mobile"
            fill
            priority
          />
        )
      }
    </div>
    <div className="hero__content">
      <Img
        src="/logos/logo-barbearia-duarte-white.svg"
        alt="Logo Barbearia Duarte"
        width={280}
        height={84}
        className='hero__content-image'
      />
      <Text as='h1' className="hero__content-title">
        Assinatura mensal para manter o visual em dia, a partir de <strong>R$99,90</strong>
      </Text>
      <Text as='p' className="hero__content-description">
        Plano de fidelidade da Barbearia Duarte com agenda flexível e valor fixo todo mês. Assine e cuide do seu estilo.
      </Text>
      <Button variant='light'>
        Virar um assinante
      </Button>
    </div>
  </HeroContainer>;
}
