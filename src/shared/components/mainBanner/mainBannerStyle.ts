import styled from "styled-components";

interface ContainerProps {
    backgroundImage: string,
    isMobile?: boolean,
    height?: string,
    backgroundPosition?: string
  }

export const Container = styled.div<ContainerProps>`
  background: url(${props => props.backgroundImage});
  height: ${props => props.height};
  background-repeat:no-repeat;
  background-size: cover;
  background-position: ${props => props.backgroundPosition};
`;