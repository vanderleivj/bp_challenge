import styled from "styled-components";

interface MobileButtonContainerProps {
  isSelected?: boolean,
  lastOne?: boolean
}

export const MenuContainer = styled.div`
  display:flex;
  align-items: center;
  width:100%;
  height:79px;
  background: #000000;
  padding:0px 15px;
  position: fixed;
  bottom: 0;
  z-index:99;

  div{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-items:center;
    align-items: center;
  }

  p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.2s;
    margin-top:8px;
  }
`;

export const MobileButtonContainer = styled.div<MobileButtonContainerProps>`
  transition: 0.2s; 
  cursor: pointer;
  margin-right:${props => props.lastOne ? '0px' : '16px'};

  p{
    color: ${props => props.isSelected ? '#FFFFFF' : '#696C7B'}
  }
  
  :hover{
    p{
      color: #FFFFFF
    }
  }
`;