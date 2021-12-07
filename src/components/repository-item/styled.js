import Styled from "styled-components";

export const Wrapper = Styled.div `
    border: 1px solid blue;
    padding : 8px;
    margin: 16px 16px;
    width: 400px;
    height : 200px;
    border-radius: 22px;
    &:hover{
      background-color: #2c5282;
      box-shadow: 3px 2px 10px  rgba(0, 0, 0, 0.5); 
     }
  `;
  
export const WrapperTitle = Styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = Styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
`;

export const WrapperLink = Styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;