import styled from "styled-components";

interface ContainerProps {
  marginLeft?: string,
  marginRight?: string
}

export const Container = styled.div<ContainerProps>`
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0px'}
`;