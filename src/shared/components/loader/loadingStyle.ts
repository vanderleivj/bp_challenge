import styled from 'styled-components';

interface ContainerProps {
  visibility: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  visibility: ${props => props.visibility ? '' : 'hidden'}
`;