'use client';

import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import { FacebookLogoIcon, InstagramLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import { theme } from '@/styles/theme';
import { EMAIL, INSTAGRAM, WHATSAPP } from '@/data/business';

const FooterContainer = styled.section`
  background: ${theme.colors.black500};
  color: ${theme.colors.textSecondary};
  padding: 48px 48px 96px 48px;

  & .footer__title {
    &-absolute {
      display: none;
    }
  }

  & .footer__content {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 56px;

    &-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 32px;

      &-item {
        display: flex;
        flex-direction: column;
        gap: 14px;

        &-title {
          color: ${theme.colors.textPrimary};
          font-size: 18px;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        &-list {
          display: flex;
          flex-direction: column;
          gap: 2px;

          &-item {
            list-style: none;
          }
        }
      }
    }

    &-infos {
      border-top: 1px solid ${theme.colors.border};
      padding-top: 48px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 40px;

      &-policies {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        &-title {
          color: ${theme.colors.textPrimary};
          font-size: 28px;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        &-list {
          display: flex;
          align-items: center;
          gap: 40px;

          &-item {
            list-style: none;
          }
        }

        &-socials {
          display: flex;
          align-items: center;
          gap: 8px;

          &-item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${theme.colors.border};
            color: ${theme.colors.white};
            list-style: none;

            & svg {
              font-size: 20px;
            }

            & .footer__icon-link {
              width: 100%;
              height: 100%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: inherit;
              text-decoration: none;
              transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), color 280ms ease;

              &:hover,
              &:focus-visible {
                transform: translateY(-1px);
                color: ${theme.colors.yellow};
              }

              &:focus-visible {
                outline: 2px solid ${theme.colors.yellow};
                outline-offset: 3px;
              }
            }
          }
        }
      }

      & > .footer__content-grid-item {
        width: 100%;
        max-width: 360px;
        align-items: flex-start;

        & .footer__content-grid-item-title {
          font-size: 24px;
          color: ${theme.colors.textPrimary};
        }

        & .footer__content-grid-item-list-item {
          color: ${theme.colors.white400};
        }
      }
    }

    & .footer__link {
      display: inline-flex;
      align-items: center;
      color: ${theme.colors.white400};
      font-size: 15px;
      line-height: 1;
      letter-spacing: -0.01em;
      text-decoration: none;
      transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms ease;

      &:hover,
      &:focus-visible {
        transform: translateY(-1px);
        color: ${theme.colors.textPrimary};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.yellow};
        outline-offset: 3px;
      }
    }

    & .footer__link-slot {
      display: inline-flex;
      overflow: hidden;
      height: 1.05em;
    }

    & .footer__link-slide {
      display: flex;
      flex-direction: column;
      transform: translateY(0);
      transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
      will-change: transform;
    }

    & .footer__link-line {
      display: inline-flex;
      align-items: center;
      height: 1.05em;
    }

    & .footer__link:hover .footer__link-slide,
    & .footer__link:focus-visible .footer__link-slide {
      transform: translateY(-1.05em);
    }

    & .footer__link--static {
      &:hover,
      &:focus-visible {
        transform: none;
      }
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      &-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      &-infos {
        align-items: flex-start;
        flex-direction: column;

        & > .footer__content-grid-item {
          max-width: 100%;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      gap: 40px;

      &-grid {
        grid-template-columns: 1fr;
        gap: 24px;

        &-item {
          gap: 12px;

          &-title {
            font-size: 17px;
          }

          &-list {
            gap: 2px;

            &-item {
              font-size: 14px;
            }
          }
        }
      }

      &-infos {
        padding-top: 32px;

        &-policies {
          align-items: flex-start;
          gap: 12px;

          &-title {
            font-size: 22px;
          }

          &-list {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 12px 20px;

            &-item {
              font-size: 13px;
            }
          }

          &-socials {
            margin-top: 4px;
          }
        }

        & > .footer__content-grid-item {
          & .footer__content-grid-item-title {
            font-size: 17px;
          }

          & .footer__content-grid-item-list-item {
            font-size: 13px;
          }
        }
      }

      & .footer__link {
        font-size: 14px;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 24px 72px 24px;
  }
`;

type FooterLinkProps = {
  href: string;
  label: string;
  animated?: boolean;
};

function FooterLink({ href, label, animated = true }: FooterLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const className = animated ? 'footer__link' : 'footer__link footer__link--static';

  return (
    <a
      href={href}
      className={className}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
    >
      {animated ? (
        <span className='footer__link-slot'>
          <span className='footer__link-slide'>
            <span className='footer__link-line'>{label}</span>
            <span className='footer__link-line' aria-hidden='true'>
              {label}
            </span>
          </span>
        </span>
      ) : (
        <span>{label}</span>
      )}
    </a>
  );
}

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP}`;
  const emailLink = `mailto:${EMAIL}`;
  const mapsLink = 'https://maps.google.com/?q=Avenida+Presidente+John+Kennedy+75,+Miguel+Pereira,+RJ';

  return <FooterContainer id="footer">
    <Text as='h1' className='footer__title-absolute'>
      Duarte Barbearia
    </Text>
    <main className='footer__content'>
      <div className='footer__content-grid'>
        <div className='footer__content-grid-item'>
          <Text as='h4' className='footer__content-grid-item-title'>
            Planos
          </Text>
          <ul className='footer__content-grid-item-list'>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Barba - Seg a Qua' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Corte - Seg a Qua' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Corte + Barba - Seg a Qua' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Barba - Todos os Dias' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Corte - Todos os Dias' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Clube Duarte Corte + Barba - Todos os Dias' /></li>
          </ul>
        </div>
        <div className='footer__content-grid-item'>
          <Text as='h4' className='footer__content-grid-item-title'>
            Mapa do site
          </Text>
          <ul className='footer__content-grid-item-list'>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#inicio' label='Início' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#processo' label='Por que assinar o plano Duarte?' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#sobre' label='Sobre nós' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#planos' label='Planos' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href='#curso' label='Curso Barbeiro Imersivo' /></li>
          </ul>
        </div>
        <div className='footer__content-grid-item'>
          <Text as='h4' className='footer__content-grid-item-title'>
            Contato
          </Text>
          <ul className='footer__content-grid-item-list'>
            <li className='footer__content-grid-item-list-item'><FooterLink href={whatsappLink} label='+55 (24) 98114-0482' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href={whatsappLink} label='Whatsapp' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href={INSTAGRAM} label='Instagram' /></li>
            <li className='footer__content-grid-item-list-item'><FooterLink href={emailLink} label='E-mail' /></li>
          </ul>
        </div>
        <div className='footer__content-grid-item'>
          <Text as='h4' className='footer__content-grid-item-title'>
            Localização
          </Text>
          <ul className='footer__content-grid-item-list'>
            <li className='footer__content-grid-item-list-item'><FooterLink href={mapsLink} animated={false} label='Avenida Presidente John Kennedy n°75 - Centro, Miguel Pereira - RJ, 26900-000' /></li>
          </ul>
        </div>
      </div>
      <article className='footer__content-infos'>
        <div className='footer__content-infos-policies'>
          <Text as='span' className='footer__content-infos-policies-title'>
            &copy; Barbearia Duarte AT.2026
          </Text>
          <ul className='footer__content-infos-policies-list'>
            <li className='footer__content-infos-policies-list-item'><FooterLink href='#' label='Política de Privacidade' /></li>
            <li className='footer__content-infos-policies-list-item'><FooterLink href='#' label='Política de Cookies' /></li>
          </ul>
          <ul className='footer__content-infos-policies-socials'>
            <li className='footer__content-infos-policies-socials-item'>
              <a className='footer__icon-link' href={INSTAGRAM} target='_blank' rel='noreferrer noopener' aria-label='Instagram'>
                <InstagramLogoIcon />
              </a>
            </li>
            <li className='footer__content-infos-policies-socials-item'>
              <a className='footer__icon-link' href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener' aria-label='Facebook'>
                <FacebookLogoIcon />
              </a>
            </li>
            <li className='footer__content-infos-policies-socials-item'>
              <a className='footer__icon-link' href={whatsappLink} target='_blank' rel='noreferrer noopener' aria-label='Whatsapp'>
                <WhatsappLogoIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__content-grid-item'>
          <Text as='h4' className='footer__content-grid-item-title'>
            Desenvolvedor
          </Text>
          <ul className='footer__content-grid-item-list'>
            <li className='footer__content-grid-item-list-item'><FooterLink href='https://www.instagram.com/alephram0s/' label='Aleph Ramos UI/UX & Web Dev' /></li>
          </ul>
        </div>
      </article>
    </main>
  </FooterContainer>;
}
