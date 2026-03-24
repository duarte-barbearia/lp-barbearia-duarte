'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import { Img } from '@/components/Img';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import {
  CertificateIcon,
  ClockIcon,
  ScissorsIcon,
  UsersIcon,
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   Styles
   ═══════════════════════════════════════════════════ */

/* ─── Hero ─── */

const CourseHero = styled.section`
  @keyframes goldShineFlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  position: relative;
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  min-height: 700px;
  display: flex;
  align-items: flex-end;
  padding: 0 48px 96px;
  overflow: hidden;

  & .course-hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 520px;
      background: linear-gradient(to top, ${theme.colors.bgPrimary}, transparent);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 340px;
      background: linear-gradient(to top, ${theme.colors.bgPrimary}, transparent);
      z-index: 1;
    }

    & img,
    & video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }

  & .course-hero__container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  & .course-hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    border-radius: ${theme.radius.full};
    background: linear-gradient(92deg, #FFCB0C -0.99%, #FFEFB4 50.48%, #FFCB0C 97.09%);
    background-size: 220% 100%;
    animation: goldShineFlow 4.2s linear infinite;
    will-change: background-position;
    color: ${theme.colors.black};
    padding: 8px 16px 8px 10px;
    font-size: 0.82rem;
    line-height: 1;
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: 0.02em;

    &-dot {
      width: 22px;
      height: 22px;
      border-radius: ${theme.radius.full};
      background: rgba(5, 5, 5, 0.12);
      display: inline-flex;
      align-items: center;
      justify-content: center;

      & img {
        width: 14px;
        height: 14px;
        object-fit: contain;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    & .course-hero__badge {
      animation: none;
      background-position: 50% 50%;
    }
  }

  & .course-hero__texts {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 700px;

    &-title {
      color: ${theme.colors.textPrimary};
      font-size: clamp(2.6rem, 4.5vw, 4.5rem);
      line-height: 0.93;
      letter-spacing: -0.04em;
    }

    &-description {
      color: ${theme.colors.white400};
      max-width: 520px;
      font-size: 1.1rem;
      line-height: 1.1;
      letter-spacing: -0.01em;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 520px;
    padding: 0 24px 48px 24px;

    & .course-hero__container {
      gap: 24px;
    }

    & .course-hero__badge {
      font-size: 0.72rem;
      padding: 6px 12px 6px 8px;
    }

    & .course-hero__texts {
      gap: 24px;

      &-title {
        font-size: 2.2rem;
      }

      &-description {
        font-size: 0.95rem;
        max-width: 100%;
      }
    }
  }
`;

/* ─── Details ─── */

const CourseDetails = styled.section`
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  padding: 48px 48px 96px;

  & .course-details__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .course-details__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  & .course-details__item {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 28px 24px;
    border-radius: ${theme.radius.xl};
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.bgSecondary};
    transition: border-color ${theme.transitions.base};

    &:hover {
      border-color: ${theme.colors.borderYellow};
    }

    &-icon {
      width: 44px;
      height: 44px;
      border-radius: ${theme.radius.lg};
      background: ${theme.colors.bgAccent};
      border: 1px solid ${theme.colors.border};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.yellow};

      & svg {
        width: 22px;
        height: 22px;
      }
    }

    &-title {
      color: ${theme.colors.textPrimary};
      font-size: 1.35rem;
      line-height: 1;
      letter-spacing: -0.03em;
      font-weight: ${theme.fontWeights.bold};
    }

    &-description {
      color: ${theme.colors.textSecondary};
      font-size: 0.95rem;
      line-height: 1.12;
      letter-spacing: -0.01em;
      font-weight: 300;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    & .course-details__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 24px 24px 48px;

    & .course-details__grid {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    & .course-details__item {
      padding: 20px 16px;
      gap: 10px;

      &-icon {
        width: 36px;
        height: 36px;

        & svg {
          width: 18px;
          height: 18px;
        }
      }

      &-title {
        font-size: 1.1rem;
      }

      &-description {
        font-size: 0.85rem;
      }
    }
  }
`;

/* ─── Modules ─── */

const CourseModules = styled.section`
  background: ${theme.colors.bgLight};
  color: ${theme.colors.textDark};
  padding: 96px 48px;

  & .course-modules__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .course-modules__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
    margin-bottom: 56px;

    &-logo {
      width: 34px;
      height: auto;
    }

    &-title {
      max-width: 680px;
    }

    &-description {
      color: #818181;
      max-width: 600px;
      font-size: 1.1rem;
      line-height: 1.08;
    }
  }

  & .course-modules__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  & .course-modules__card {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 30px 26px;
    border-radius: ${theme.radius.xl};
    background: rgba(5, 5, 5, 0.05);
    transition: background ${theme.transitions.base};
    will-change: transform, opacity;

    &:hover {
      background: rgba(5, 5, 5, 0.08);
    }

    &-number {
      width: 30px;
      height: 30px;
      border-radius: ${theme.radius.full};
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      display: grid;
      place-items: center;
      font-size: 0.78rem;
      font-weight: ${theme.fontWeights.bold};
      line-height: 1;
    }

    &-title {
      color: ${theme.colors.textDark};
    }

    &-description {
      color: #818181;
      font-size: 0.95rem;
      line-height: 1.12;
      letter-spacing: -0.01em;
      font-weight: 300;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    & .course-modules__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px;

    & .course-modules__header {
      margin-bottom: 32px;
      gap: 24px;

      &-description {
        font-size: 1rem;
      }
    }

    & .course-modules__grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    & .course-modules__card {
      padding: 22px 18px;
      gap: 16px;
    }
  }
`;

/* ─── CTA ─── */

const CourseCta = styled.section`
  background: ${theme.colors.bgLight};
  color: ${theme.colors.textDark};
  padding: 0 48px 96px;

  & .course-cta__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  & .course-cta__content {
    position: relative;
    overflow: hidden;
    border-radius: ${theme.radius['2xl']};
    min-height: 320px;
    padding: 56px 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(5, 5, 5, 0.88), rgba(5, 5, 5, 0.6));
      z-index: 1;
    }

    &-bg {
      position: absolute;
      inset: 0;
      z-index: 0;

      & img {
        object-fit: cover;
        object-position: center;
      }
    }

    &-inner {
      position: relative;
      z-index: 2;
      width: min(100%, 660px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
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
      font-size: 1.1rem;
      line-height: 1.08;
    }

    & a,
    & button {
      margin-top: 4px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 24px 48px;

    & .course-cta__content {
      min-height: 280px;
      padding: 36px 24px;

      &-inner {
        width: 100%;
        gap: 16px;
      }

      &-description {
        font-size: 1rem;
      }
    }
  }
`;

/* ═══════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════ */

const details = [
  {
    icon: <ClockIcon weight="duotone" />,
    title: '3 meses',
    description: 'Formação estruturada com prática real, evolução técnica e acompanhamento contínuo',
  },
  {
    icon: <ScissorsIcon weight="duotone" />,
    title: '100% prático',
    description: 'Você vai pegar na máquina e na tesoura desde o primeiro dia',
  },
  {
    icon: <UsersIcon weight="duotone" />,
    title: 'Turmas reduzidas',
    description: 'No máximo 5 alunos por turma para acompanhamento individual',
  },
  {
    icon: <CertificateIcon weight="duotone" />,
    title: 'Certificado FEP-CSSP',
    description: 'Certificado de conclusão ao final do intensivo em parceria com a FEP-CSSP',
  },
];

const modules = [
  {
    title: 'Fundamentos da barbearia',
    description:
      'Postura profissional, organização do ambiente, higienização de equipamentos e ética no atendimento',
  },
  {
    title: 'Cortes com máquina',
    description:
      'Degradê baixo, médio e alto, pezinho, navalhado e técnicas de acabamento com máquina',
  },
  {
    title: 'Cortes com tesoura',
    description:
      'Técnicas de texturização, repicado, camadas e cortes clássicos executados somente com tesoura',
  },
  {
    title: 'Barba e alinhamento',
    description:
      'Modelagem de barba, uso de navalha, alinhamento e cuidados com a pele do cliente',
  },
  {
    title: 'Atendimento e fidelização',
    description:
      'Como se comunicar com o cliente, entender o que ele quer e criar uma experiência que fideliza',
  },
  {
    title: 'Visão de negócio',
    description:
      'Precificação, divulgação, redes sociais e como montar sua carteira de clientes do zero',
  },
];

/* ═══════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════ */

export default function Course() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    /* ── Video autoplay via IntersectionObserver ── */
    const videoObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    videoObs.observe(video);

    /* ── Prefer reduced motion — skip all GSAP ── */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return () => videoObs.disconnect();
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ════════════════════════════════════
         Hero — badge, title, description, button
         ════════════════════════════════════ */
      gsap.set('.course-hero__badge', { opacity: 0, y: 12 });
      gsap.set('.course-hero__texts-title', { opacity: 0, y: 24 });
      gsap.set('.course-hero__texts-description', { opacity: 0, y: 18 });
      gsap.set('.course-hero__texts > a, .course-hero__texts > button', { opacity: 0, y: 14 });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#curso',
          start: 'top 75%',
          once: true,
        },
      });

      heroTl
        .to('.course-hero__badge', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        })
        .to('.course-hero__texts-title', {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        }, '-=0.35')
        .to('.course-hero__texts-description', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.35')
        .to('.course-hero__texts > a, .course-hero__texts > button', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        }, '-=0.25');

      /* ════════════════════════════════════
         Details — staggered cards
         ════════════════════════════════════ */
      gsap.set('.course-details__item', { opacity: 0, y: 32 });

      ScrollTrigger.batch('.course-details__item', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.1,
          });
        },
        start: 'top 88%',
        once: true,
      });

      /* ════════════════════════════════════
         Modules header
         ════════════════════════════════════ */
      gsap.set('.course-modules__header-logo', { opacity: 0, scale: 0.7 });
      gsap.set('.course-modules__header-title', { opacity: 0, y: 20 });
      gsap.set('.course-modules__header-description', { opacity: 0, y: 16 });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.course-modules__header',
          start: 'top 82%',
          once: true,
        },
      });

      headerTl
        .to('.course-modules__header-logo', {
          opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)',
        })
        .to('.course-modules__header-title', {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        }, '-=0.2')
        .to('.course-modules__header-description', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        }, '-=0.2');

      /* ════════════════════════════════════
         Modules cards — desktop stagger
         ════════════════════════════════════ */
      mm.add(`(min-width: ${theme.breakpoints.md})`, () => {
        gsap.set('.course-modules__card', { opacity: 0, y: 40 });

        ScrollTrigger.batch('.course-modules__card', {
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.08,
            });
          },
          start: 'top 88%',
          once: true,
        });
      });

      /* ════════════════════════════════════
         Modules cards — mobile stack effect
         Cards start spread out and stack together
         ════════════════════════════════════ */
      mm.add(`(max-width: ${theme.breakpoints.md})`, () => {
        const cards = gsap.utils.toArray<HTMLElement>('.course-modules__card');

        cards.forEach((card, i) => {
          gsap.set(card, {
            opacity: 0,
            y: 48 + i * 8,
            scale: 1 - i * 0.015,
          });

          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true,
            },
          });
        });
      });

      /* ════════════════════════════════════
         CTA — scale reveal
         ════════════════════════════════════ */
      gsap.set('.course-cta__content', { opacity: 0, scale: 0.96 });
      gsap.set('.course-cta__content-inner > *', { opacity: 0, y: 16 });

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.course-cta__content',
          start: 'top 85%',
          once: true,
        },
      });

      ctaTl
        .to('.course-cta__content', {
          opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
        })
        .to('.course-cta__content-inner > *', {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08,
        }, '-=0.3');

    }, section);

    return () => {
      videoObs.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} id="curso">
      {/* Hero */}
      <CourseHero>
        <div className="course-hero__bg">
          <video
            ref={videoRef}
            src="/duarte-barbearia-video.mp4"
            poster="/backgrounds/about.png"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        </div>
        <div className="course-hero__container">
          <Text as="span" className="course-hero__badge">
            <span className="course-hero__badge-dot">
              <Img
                src="/logos/logo-barbearia-duarte-black.svg"
                alt="Logo Barbearia Duarte"
                width={14}
                height={14}
              />
            </span>
            VAGAS ABERTAS — BARBEIRO INTENSIVO
          </Text>

          <div className="course-hero__texts">
            <Text as="h1" className="course-hero__texts-title">
              Formação de <strong>barbeiro profissional</strong> intensiva
            </Text>
            <Text as="p" className="course-hero__texts-description">
              Aprenda com prática real, desenvolvimento completo e suporte adequado
              durante toda a jornada para sair pronto para atender com segurança.
            </Text>
            <Button variant="light">
              Quero garantir minha vaga
            </Button>
          </div>
        </div>
      </CourseHero>

      {/* Qualidades */}
      <CourseDetails>
        <div className="course-details__container">
          <div className="course-details__grid">
            {details.map((d) => (
              <article className="course-details__item" key={d.title}>
                <span className="course-details__item-icon">{d.icon}</span>
                <span className="course-details__item-title">{d.title}</span>
                <span className="course-details__item-description">
                  {d.description}
                </span>
              </article>
            ))}
          </div>
        </div>
      </CourseDetails>

      {/* O que vai aprender */}
      <CourseModules>
        <div className="course-modules__container">
          <header className="course-modules__header">
            <Img
              src="/logos/logo-barbearia-duarte-black.svg"
              alt="Logo Barbearia Duarte"
              width={34}
              height={34}
              className="course-modules__header-logo"
            />
            <Text as="h1" className="course-modules__header-title">
              O que você vai <strong>aprender</strong>
            </Text>
            <Text as="p" className="course-modules__header-description">
              Conteúdo 100% prático, desenvolvido com base em 8 anos de
              experiência atendendo clientes reais todos os dias
            </Text>
          </header>
          <div className="course-modules__grid">
            {modules.map((m, i) => (
              <article className="course-modules__card" key={m.title}>
                <span className="course-modules__card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Text as="h3" className="course-modules__card-title">
                  {m.title}
                </Text>
                <span className="course-modules__card-description">
                  {m.description}
                </span>
              </article>
            ))}
          </div>
        </div>
      </CourseModules>

      {/* CTA */}
      <CourseCta>
        <div className="course-cta__container">
          <section className="course-cta__content">
            <div className="course-cta__content-bg">
              <Img
                src="/backgrounds/about.png"
                alt=""
                fill
              />
            </div>
            <article className="course-cta__content-inner">
              <Img
                src="/logos/logo-barbearia-duarte-white.svg"
                alt="Logo Barbearia Duarte"
                width={34}
                height={34}
                className="course-cta__content-logo"
              />
              <Text as="h1" className="course-cta__content-title">
                As vagas são <strong>limitadas</strong>. Garanta a sua agora.
              </Text>
              <Text as="p" className="course-cta__content-description">
                Turmas reduzidas para garantir acompanhamento individual. Não
                fique de fora da próxima turma.
              </Text>
              <Button variant="light">Quero garantir minha vaga</Button>
            </article>
          </section>
        </div>
      </CourseCta>
    </div>
  );
}
