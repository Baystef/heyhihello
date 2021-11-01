import { FC } from "react";
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoint } from "../../../../theme";
import { StyledImage } from "..";

export interface RangeItemProps {
  imageUrl: string | StaticImageData;
  title: string;
  subtitle: string;
  btnText: string;
  index?: number;
  secondary?: boolean;
}

const RangeItem: FC<RangeItemProps> = ({ imageUrl, title, subtitle, btnText, index, secondary }) => (
  <Wrapper index={index} data-aos="fade-up">
    <ImageWrapper secondary={secondary}>
      <StyledImage src={imageUrl} layout="fill" alt={title} $borderRadius="8px" />
    </ImageWrapper>
    <Title>{title}</Title>
    <p>{subtitle}</p>
    <button>{btnText}</button>
  </Wrapper>
);

const Wrapper = styled.div<{ index?: number; }>`
  p {
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 0.875rem;
    line-height: 22.4px;
    @media (min-width: ${breakpoint.screenSMmin}) {
      width: 75%;
    }
  }

  button {
    background: ${({ theme, index }) => index === 3 ? 'none' : theme.primaryColor};
    border: 1px solid ${({ theme, index }) => index === 3 ? theme.primaryColor : 'transparent'};
    color: ${({ theme, index }) => index === 3 ? theme.primaryColor : theme.tertiaryColor};

    font-family: ${({ theme }) => theme.secondaryFontMedium};
    font-size: 0.875rem;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div<{ secondary?: boolean; }>`
  background: ${({ theme, secondary }) => secondary ? theme.secondaryColor : theme.tertiaryColor};
  /* width: 160px; */
  height: 183.65px;
  position: relative;
  border-radius: ${({ theme }) => theme.primaryRadius};

  @media (min-width: ${breakpoint.screenSMmin}) {
    /* width: 305px; */
    height: 350px;
  }
`;

const Title = styled.h6`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default RangeItem;
