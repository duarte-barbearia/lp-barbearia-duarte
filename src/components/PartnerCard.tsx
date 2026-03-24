'use client';

import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import Image from 'next/image';

interface PartnerCardProps {
  logo: string;
  offer: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 240px;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${theme.colors.white};
  width: fit-content;
`;

const LogoCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${theme.radius.full};
  background-color: #ffffff;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Offer = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 22px;
  letter-spacing: -0.04rem;
  font-weight: ${theme.fontWeights.extrabold};
  color: ${theme.colors.textDark};
  line-height: 1;
`;

const Subtitle = styled.span`
  font-family: ${theme.fonts.body};
  line-height: 120%;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.black50};
`;

export function PartnerCard({ logo, offer }: PartnerCardProps) {
  return (
    <CardContainer>
      <LogoCircle>
        <Image src={logo} alt="logo parceiro" width={64} height={64} style={{ objectFit: 'cover' }} />
      </LogoCircle>
      <Info>
        <Offer>{offer}</Offer>
        <Subtitle>Consulte todas as condições!</Subtitle>
      </Info>
    </CardContainer>
  );
}
