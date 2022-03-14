import styled from "styled-components";

interface AvatarProps {
  backgroundImage: string
}

export const MenuContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width:100%;
  height:68px;
  background: #0E0E0E;
  padding:15px 60px;
  position: fixed;
  z-index:99;
`;

export const MenuBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  img{
    margin-right: 41px;
  }

  p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-right:60px;
    cursor: pointer;
    transition: 0.2s;

    :hover{
      opacity:0.8;
    }
  }
`

export const Avatar = styled.div<AvatarProps>`
  border-radius:50%;
  width:44px;
  height:44px;
  background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
