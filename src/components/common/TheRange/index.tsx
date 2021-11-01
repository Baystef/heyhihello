import { FC } from "react";
import styled from 'styled-components';
import RangeItem, { RangeItemProps } from "./RangeItem";
import { breakpoint } from "../../../../theme";

interface TheRangeProps {
  title: string;
  RangeData: RangeItemProps[];
  secondary?: boolean;
}

const TheRange: FC<TheRangeProps> = ({ title, RangeData, secondary }) => {
  return (
    <Wrapper secondary={secondary}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Link>Shop all</Link>
      </TitleWrapper>
      <RangeWrapper>
        {RangeData.map((range, i) => <RangeItem key={`${i + 1}`} {...range} index={i} secondary={secondary} />)}
      </RangeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ secondary?: boolean; }>`
  padding: 1rem 1rem 6rem;
  background: ${({ theme, secondary }) => secondary ? theme.tertiaryColor : 'transparent'};
  @media (min-width: ${breakpoint.screenSMmin}) {
    padding: 2rem 2rem 6rem;
  }
`;

const RangeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0.5rem;
  @media (min-width: ${breakpoint.screenSMmin}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const TitleWrapper = styled.div`
  display: block;
  text-align: center;
  @media (min-width: ${breakpoint.screenSMmin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.75rem;
  font-weight: 500;
  @media (min-width: ${breakpoint.screenSMmin}) {
   font-size: 3.125rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.secondaryFontMedium};
  text-decoration: underline;
  display: none;
  @media (min-width: ${breakpoint.screenSMmin}) {
   display: inline-block;
  }
`;

export default TheRange;
