'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { plans } from '@/data/plans';
import { PlanCard } from '@/components/PlanCard';

gsap.registerPlugin(ScrollTrigger);

const PlansContainer = styled.section`
  background: ${theme.colors.bgLight};
  color: ${theme.colors.textDark};
  padding: 96px 48px;

  & .plans__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .plans__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;

    &-texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      &-logo {
        width: 34px;
        height: auto;
      }

      &-title {
        max-width: 680px;
        text-align: center;
      }
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      align-items: stretch;
      grid-auto-rows: 1fr;

      &-item {
        display: flex;
      }

      @media (max-width: ${theme.breakpoints.xl}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (max-width: ${theme.breakpoints.md}) {
        display: flex;
        flex-direction: column;
        gap: 0;

        &-item {
          position: sticky;
          will-change: transform;

          &:nth-child(1) { top: 0; z-index: 1; }
          &:nth-child(2) { top: 8px; z-index: 2; }
          &:nth-child(3) { top: 16px; z-index: 3; }
          &:nth-child(4) { top: 24px; z-index: 4; }
          &:nth-child(5) { top: 32px; z-index: 5; }
          &:nth-child(6) { top: 40px ; z-index: 6; }
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px;

    & .plans__content {
      gap: 28px;

      &-texts {
        gap: 12px;

        &-title {
          max-width: 100%;
        }
      }
    }
  }
`;

export default function Plans() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.set('.plans__content-texts-logo', { opacity: 0, scale: 0.7 });
      gsap.set('.plans__content-texts-title', { opacity: 0, y: 20 });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.plans__content-texts',
          start: 'top 82%',
          once: true,
        },
      });

      headerTl
        .to('.plans__content-texts-logo', {
          opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)',
        })
        .to('.plans__content-texts-title', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.2');

      /* Plan cards stagger */
      gsap.set('.plans__content-grid-item', { opacity: 0, y: 40 });

      ScrollTrigger.batch('.plans__content-grid-item', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          });
        },
        start: 'top 88%',
        once: true,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return <PlansContainer id="planos" ref={sectionRef}>
    <div className='plans__container'>
      <section className='plans__content'>
        <article className='plans__content-texts'>
          <Img
            src="/logos/logo-barbearia-duarte-black.svg"
            alt="Logo da barbearia duarte"
            width={34}
            height={34}
            className='plans__content-texts-logo'
          />
          <Text as='h1' className='plans__content-texts-title'>
            Escolha o <strong>plano</strong> que melhor te representa
          </Text>
        </article>
        <div className='plans__content-grid'>
          {plans.map((plan) => (
            <div className='plans__content-grid-item' key={`${plan.name}-${plan.price}`}>
              <PlanCard
                name={plan.name}
                description={plan.description}
                price={plan.price}
                partners={plan.partners}
                availability={plan.availability}
                badgeType={plan.badgeType}
                image={plan.image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  </PlansContainer>;
}
