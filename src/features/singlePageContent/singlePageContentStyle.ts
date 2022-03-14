import styled from "styled-components";

interface ContainerImgProps {
  backgroundImage:string
}

export const MainBannerEffect = styled.div`
  background: linear-gradient(
    180deg, #151515 0%, rgba(0, 0, 0, 0.755068) 26.68%, rgba(0, 0, 0, 0) 80.51%
  );
  transform: rotate(-180deg);
  height: 272px;
  margin-top: -272px;
`;

export const ContainerInfos = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 26px;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 10px;
    border: 1px solid #E1E4EF;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #E1E4EF;
    margin-top:26px;
    margin-right:10px;
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #FFFFFF;
  margin-top: 47px;
  margin-bottom: 35px;
`;