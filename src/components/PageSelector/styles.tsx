import styled from 'styled-components';

import colors from '../../assets/css/colors';

import { PageNumberInterface, CircleInterface } from './interfaces';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    @media (max-width: 500px){
        display: block;
    }
`;

export const PageNumberContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 500px){
        justify-content: space-around;
    }
`;

export const PageNumber = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    background: transparent 0% 0% no-repeat padding-box;
    border: 1px solid ${(p: PageNumberInterface) => p.active ? colors.primary : colors.gray};
    border-radius: 5px;
    font: normal normal normal 1.1rem Circular Std Book;
    color: ${(p: PageNumberInterface) => p.active ? colors.primary : colors.gray};
    cursor: pointer;

    &:focus{
        outline: none;
    }

    @media (max-width: 500px){
        margin: 0;
    }
`;

export const PageAction = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    background: transparent 0% 0% no-repeat padding-box;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    font: normal normal normal 1.1rem Circular Std Book;
    color: ${colors.gray};
    cursor: pointer;

    @media (max-width: 500px){
        margin: 0;
    }
`;

export const InvertedImage = styled.img`
    transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
`;

export const PageButtonGroup = styled.div`
  width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 500px) {
        justify-content: center;
    }
`

export const CircleOption = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 13px;
  background-color: ${colors.primary};
  border-width: 0px;
`;

export const CirclePage = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 13px;
  background-color: ${(p: CircleInterface) =>
    p.active ? colors.primary : colors.white};
  border-width: 1px;
  border-color: ${(p: CircleInterface) => (p.active ? colors.primary : colors.gray)};
  color: ${(p: CircleInterface) => (p.active ? colors.white : colors.gray)};
  margin: 8px;
  font-size: 8px;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:focus{
    outline: none;
  }
`;

export const CirclePageRight = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 13px;
  background-color: ${(p: CircleInterface) =>
    p.active ? colors.primary : colors.white};
  border-width: 1px;
  border-color: ${(p: CircleInterface) => (p.active ? colors.primary : colors.gray)};
  color: ${(p: CircleInterface) => (p.active ? colors.white : colors.gray)};
  margin: 8px;
  margin-right: 28px;
  font-size: 8px;

    @media (max-width: 500px){
      margin-right: 8px
    }

  &:hover {
    cursor: pointer;
  }
`;