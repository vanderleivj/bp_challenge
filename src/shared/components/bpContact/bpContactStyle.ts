import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 65px;
  height: 65px;
  left: 90%;
  bottom: 5%;  
  background: #FFFFFF;
  border-radius:50%;
  display:flex;
  justify-content: center;
  z-index:99999;

  img{
    width:60%
  }
`;