import styled from 'styled-components';

interface CardsContainerProps {
  backgroundImage: string
}

export const Container = styled.div`
  flex-wrap: nowrap;
  overflow-x: scroll;
  display: -webkit-box;
`;

export const CardsContainer = styled.div<CardsContainerProps>`
  width: 251px;
  background: #131313;
  border-radius: 5px;
  margin-right: 10px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor:pointer;
  transition: 0.3s;

  :hover{
    opacity: 0.55;
  }

  p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-left:9px;
    margin-bottom:29px;
    margin-top:9px;
  }

  span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #B4B8CE;
    margin-left:9px;
  }

  div{
    height: 141px;
    background: url(${props => props.backgroundImage});
    border-radius: 5px 5px 0px 0px;
  }
`;