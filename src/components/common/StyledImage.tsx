import Image from "next/image";
import styled from 'styled-components';

export const StyledImage = styled(Image) <{ $borderRadius: string }>`
  border-radius: ${(p) => p.$borderRadius};
`;