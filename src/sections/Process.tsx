'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { ListBulletsIcon, ScissorsIcon, UserCircleCheckIcon } from '@phosphor-icons/react';
import { theme } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const ProcessContainer = styled.section`
  background: ${theme.colors.bgLight};
  color: ${theme.colors.textDark};
  padding: 124px 48px 148px 48px;
  position: relative;

  & .process__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .process__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 124px;

    &-texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;

      &-title {
        max-width: 760px;
      }

      &-description {
        color: ${theme.colors.black50};
        max-width: 620px;
        font-size: 1.1rem;
      }

      &-button {
        margin-top: 2px;
      }
    }

    &-steps {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0;

      &-item {
        width: min(100%, 360px);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;

        &-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          &-number {
            width: 22px;
            height: 22px;
            border-radius: ${theme.radius.full};
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            display: grid;
            place-items: center;
            font-size: 0.72rem;
            font-weight: ${theme.fontWeights.bold};
            position: absolute;
            top: -6px;
            left: -10px;
            z-index: 2;
          }

          &-icon {
            color: ${theme.colors.black};
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 124px;
            height: 124px;
            border-radius: ${theme.radius.full};
            font-size: 44px;

            & svg {
              width: 62px;
              height: 62px;
            }

            &.is-primary {
              background: ${theme.colors.black};
              color: ${theme.colors.white};
            }

            &.is-secondary {
              border: 2px dashed rgba(5, 5, 5, 0.74);
              background: transparent;
            }
          }
        }

        &-texts {
          display: flex;
          flex-direction: column;
          gap: 8px;

          &-title {
            color: ${theme.colors.textDark};
          }

          &-description {
            color: ${theme.colors.black50};
            font-size: 1rem;
            line-height: 1.05;
            max-width: 320px;
          }
        }
      }

      &-connector {
        width: clamp(180px, 22vw, 304px);
        flex-shrink: 0;
        margin-top: 34px;

        & svg {
          width: 100%;
          height: auto;
          display: block;
        }

        &.is-first {
          margin-top: 96px;
        }

        &.is-second {
          margin-top: -24px;
        }
      }
    }

    /* ── Mobile connector overlays (inside step items) ── */
    & .process__mobile-connector {
      display: none;
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      gap: 96px !important;

      &-steps {
        position: relative;
        overflow: visible;
        flex-direction: column;
        align-items: center;
        gap: 72px;

        & > .process__content-steps-item {
          width: min(100%, 260px);
          position: relative;
          z-index: 1;
        }

        & > .process__content-steps-item > * {
          position: relative;
          z-index: 1;
        }

        &-connector {
          display: none;
        }
      }

      & .process__mobile-connector {
        display: block;
        position: absolute;
        z-index: 0;
        pointer-events: none;

        & svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        &--first {
          width: 60px;
          height: 210px;
          right: -48px;
          top: 96px;
        }

        &--second {
          width: 64px;
          height: 190px;
          left: -48px;
          top: -172px;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      &-texts {
        &-description {
          font-size: 1rem;
        }
      }

      &-steps {
        &-item {
          &-header {
            &-icon {
              width: 82px;
              height: 82px;
            }
          }

          &-texts {
            &-description {
              font-size: 0.92rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px 96px 24px;
  }
`;

/* ── Desktop connectors (path direction: left → right) ── */

function Connector1Desktop() {
  const d = 'M0.542825 0.839909L6.48802 4.68233C97.0928 63.2408 213.985 61.7263 303.043 0.839912';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="304" height="49" viewBox="0 0 304 49" fill="none">
      <defs>
        <mask id="c1d-mask">
          <path className="process-connector-mask process-connector-mask--desktop" d={d} stroke="white" strokeWidth="20" fill="none" />
        </mask>
      </defs>
      <path d={d} stroke="#050505" strokeWidth="2" strokeDasharray="8 8" mask="url(#c1d-mask)" />
    </svg>
  );
}

function Connector2Desktop() {
  const d = 'M0.542825 47.7355L6.48802 43.8931C97.0928 -14.6654 213.985 -13.1508 303.043 47.7355';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="304" height="49" viewBox="0 0 304 49" fill="none">
      <defs>
        <mask id="c2d-mask">
          <path className="process-connector-mask process-connector-mask--desktop" d={d} stroke="white" strokeWidth="20" fill="none" />
        </mask>
      </defs>
      <path d={d} stroke="#050505" strokeWidth="2" strokeDasharray="8 8" mask="url(#c2d-mask)" />
    </svg>
  );
}

/* ── Mobile connectors (same direction, positioned via CSS) ── */

function Connector1Mobile() {
  const d = 'M3.57925 0.810427C87.757 61.6736 87.2415 187.228 2.56687 247.398L0.579257 248.81';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="250" viewBox="0 0 68 250" fill="none">
      <defs>
        <mask id="c1m-mask">
          <path className="process-connector-mask process-connector-mask--mobile" d={d} stroke="white" strokeWidth="20" fill="none" />
        </mask>
      </defs>
      <path d={d} stroke="#050505" strokeWidth="2" strokeDasharray="8 8" mask="url(#c1m-mask)" />
    </svg>
  );
}

function Connector2Mobile() {
  const d = 'M63.8148 0.810427C-20.363 61.6736 -19.8475 187.228 64.8272 247.398L66.8148 248.81';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="250" viewBox="0 0 68 250" fill="none">
      <defs>
        <mask id="c2m-mask">
          <path className="process-connector-mask process-connector-mask--mobile" d={d} stroke="white" strokeWidth="20" fill="none" />
        </mask>
      </defs>
      <path d={d} stroke="#050505" strokeWidth="2" strokeDasharray="8 8" mask="url(#c2m-mask)" />
    </svg>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      /* ── Header reveal ── */
      gsap.set('.process__content-texts-title', { opacity: 0, y: 24 });
      gsap.set('.process__content-texts-description', { opacity: 0, y: 18 });
      gsap.set('.process__content-texts > a, .process__content-texts > button', { opacity: 0, y: 14 });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.process__content-texts',
          start: 'top 82%',
          once: true,
        },
      });

      headerTl
        .to('.process__content-texts-title', {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        })
        .to('.process__content-texts-description', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.3')
        .to('.process__content-texts > a, .process__content-texts > button', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        }, '-=0.2');

      /* ── Progressive dash-by-dash fill ── */
      const icons = gsap.utils.toArray<HTMLElement>('.process__content-steps-item-header-icon');

      const isMobile = window.matchMedia(`(max-width: 1024px)`).matches;
      const maskSelector = isMobile
        ? '.process-connector-mask--mobile'
        : '.process-connector-mask--desktop';
      const masks = gsap.utils.toArray<SVGPathElement>(maskSelector);

      masks.forEach((mask) => {
        const len = mask.getTotalLength();
        gsap.set(mask, { strokeDasharray: len, strokeDashoffset: len });
      });

      const stepsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.process__content-steps',
          start: 'top 72%',
          once: true,
        },
      });

      /* ─ Connector 1: reveal dashes one by one ─ */
      if (masks[0]) {
        const len = masks[0].getTotalLength();
        const numDashes = Math.max(1, Math.round(len / 16));
        stepsTl.to(masks[0], {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: `steps(${numDashes})`,
          delay: 0.4,
        });

        if (icons[1]) {
          stepsTl.to(icons[1], {
            background: theme.colors.black,
            color: theme.colors.white,
            borderColor: 'transparent',
            duration: 0.5,
            ease: 'power2.out',
          }, '-=0.15');
        }
      }

      /* ─ Connector 2: reveal dashes one by one ─ */
      if (masks[1]) {
        const len = masks[1].getTotalLength();
        const numDashes = Math.max(1, Math.round(len / 16));
        stepsTl.to(masks[1], {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: `steps(${numDashes})`,
          delay: 0.1,
        });

        if (icons[2]) {
          stepsTl.to(icons[2], {
            background: theme.colors.black,
            color: theme.colors.white,
            borderColor: 'transparent',
            duration: 0.5,
            ease: 'power2.out',
          }, '-=0.15');
        }
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return <ProcessContainer id="processo" ref={sectionRef}>
    <div className='process__container'>
      <section className='process__content'>
        <article className='process__content-texts'>
          <Text as='h1' className='process__content-texts-title'>
            O <strong>processo</strong> é simples, feito justamente para você!
          </Text>
          <Text as='p' className='process__content-texts-description'>
            Temos uma equipe para te atender e te direcionar, para que você corte seu cabelo sem burocracia!
          </Text>
          <Button variant='dark' id='processo-wpp' href='https://api.whatsapp.com/send?phone=5524981140482&text=Ol%C3%A1!%20Quero%20saber%20como%20funcionam%20os%20planos%20de%20assinatura.'>
            Virar um assinante
          </Button>
        </article>

        <main className='process__content-steps'>
          <div className='process__content-steps-item'>
            <div className='process__content-steps-item-header'>
              <Text as='span' className='process__content-steps-item-header-number'>1</Text>
              <div className='process__content-steps-item-header-icon is-primary'>
                <UserCircleCheckIcon weight='duotone' />
              </div>
            </div>
            <article className='process__content-steps-item-texts'>
              <Text as='h2' className='process__content-steps-item-texts-title'>Entrar em contato</Text>
              <Text as='p' className='process__content-steps-item-texts-description'>
                Conversar com um dos nossos atendentes e ele te direcionará para o serviço que melhor se encaixa com você
              </Text>
            </article>
            <span className="process__mobile-connector process__mobile-connector--first" aria-hidden="true">
              <Connector1Mobile />
            </span>
          </div>

          <div className='process__content-steps-connector is-first' aria-hidden='true'>
            <Connector1Desktop />
          </div>

          <div className='process__content-steps-item'>
            <div className='process__content-steps-item-header'>
              <Text as='span' className='process__content-steps-item-header-number'>2</Text>
              <div className='process__content-steps-item-header-icon is-secondary'>
                <ListBulletsIcon weight='bold' />
              </div>
            </div>
            <article className='process__content-steps-item-texts'>
              <Text as='h2' className='process__content-steps-item-texts-title'>Aprovação do plano</Text>
              <Text as='p' className='process__content-steps-item-texts-description'>
                Iremos apresentar os planos para que você opte pelo que faz mais sentido para você.
              </Text>
            </article>
          </div>

          <div className='process__content-steps-connector is-second' aria-hidden='true'>
            <Connector2Desktop />
          </div>

          <div className='process__content-steps-item'>
            <div className='process__content-steps-item-header'>
              <Text as='span' className='process__content-steps-item-header-number'>3</Text>
              <div className='process__content-steps-item-header-icon is-secondary'>
                <ScissorsIcon weight='bold' />
              </div>
            </div>
            <article className='process__content-steps-item-texts'>
              <Text as='h2' className='process__content-steps-item-texts-title'>Corte seu cabelo</Text>
              <Text as='p' className='process__content-steps-item-texts-description'>
                Após a aprovação, você poderá vir cortar seu cabelo quando quiser <strong>(com base nas condições do plano escolhido)</strong>
              </Text>
            </article>
            <span className="process__mobile-connector process__mobile-connector--second" aria-hidden="true">
              <Connector2Mobile />
            </span>
          </div>
        </main>
      </section>
    </div>
  </ProcessContainer>;
}
