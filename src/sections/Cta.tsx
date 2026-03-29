'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const CtaContainer = styled.section`
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  padding: 96px 48px;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 36px 24px;
  }

  & .cta__container {
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  & .cta__content {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: ${theme.radius['2xl']};
    border: 1px solid ${theme.colors.borderLight};
    min-height: 300px;
    padding: 48px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(5, 5, 5, 0.86), rgba(5, 5, 5, 0.58));
      z-index: 1;
    }

    &-background {
      position: absolute;
      inset: 0;
      z-index: 0;

      & img {
        object-fit: cover;
        object-position: center;
      }
    }

    &-inner {
      width: min(100%, 660px);
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacing.lg};
    }

    &-logo {
      width: 34px;
      height: auto;
      object-fit: contain;
    }

    &-title {
      color: ${theme.colors.textPrimary};
      max-width: 640px;
    }

    &-description {
      color: ${theme.colors.textSecondary};
      max-width: 560px;
      font-size: 1.2rem;
      line-height: 1;
      letter-spacing: -0.03em;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      min-height: 280px;
      padding: 32px 18px;

      &-logo { width: 28px; }
      &-inner { width: 100%; gap: 24px; }
      &-description { font-size: 1rem; }
    }
  }
`;

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.set('.cta__content', { opacity: 0, scale: 0.96 });
      gsap.set('.cta__content-inner > *', { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta__content',
          start: 'top 85%',
          once: true,
        },
      });

      tl.to('.cta__content', {
        opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
      })
        .to('.cta__content-inner > *', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08,
        }, '-=0.3');
    }, el);

    return () => ctx.revert();
  }, []);

  return <CtaContainer id="contato" ref={sectionRef}>
    <div className='cta__container'>
      <section className='cta__content'>
        <div className='cta__content-background'>
          <Img
            src="/backgrounds/about.png"
            alt=""
            fill
          />
        </div>
        <article className='cta__content-inner'>
          <Img
            src="/logos/logo-barbearia-duarte-white.svg"
            alt="Logo da barbearia duarte"
            width={34}
            height={34}
            className='cta__content-logo'
          />
          <Text as='h1' className='cta__content-title'>
            Entre em <strong>contato</strong> agora mesmo e solicite o serviço que precisar!
          </Text>
          <Text as='p' className='cta__content-description'>
            Nossa equipe está pronta para te atender nesse exato momento, fale conosco clicando no botão abaixo
          </Text>
          <Button variant='light' id='contato-wpp' href='https://api.whatsapp.com/send?phone=5524981140482&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Barbearia%20Duarte.'>
            Entrar em contato
          </Button>
        </article>
      </section>
    </div>
  </CtaContainer>;
}
