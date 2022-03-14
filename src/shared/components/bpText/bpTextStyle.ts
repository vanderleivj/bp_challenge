import styled from "styled-components";

interface TextProps {
  fontSize?: string
}

export const Text = styled.p<TextProps>`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.fontSize ? props.fontSize : '20px'};
  line-height: 27px;
  color: #FFFFFF;

  @media only screen and (max-width: 768px) {
    line-height: 37px;
  }
`;