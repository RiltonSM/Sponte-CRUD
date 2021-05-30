import styled from "styled-components";

//Assets
import colors from '../../assets/css/colors';

//Interfaces
import { ColorButton } from './interfaces';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  font-weight: 600;
  border-radius: 12px;
  background: ${(p: ColorButton) => p.color};
  color: ${colors.white};
  transition: all.5s ease;
  cursor: pointer;

  -webkit-box-shadow: -4px 17px 50px -26px ${(p: ColorButton) => p.color};
  -moz-box-shadow: -4px 17px 50px -26px ${(p: ColorButton) => p.color};
  box-shadow: -4px 14px 50px -15px ${(p: ColorButton) => p.color};

  
  &:hover {
    background: ${(p: ColorButton) => p.hoverColor};
  }
`;