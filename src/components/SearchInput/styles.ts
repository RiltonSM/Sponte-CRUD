import styled from 'styled-components';

import colors from '../../assets/css/colors';

export const Input = styled.input`
  width:100%;
  background: transparent;
  color: ${colors.white};
  border: none;
  border-bottom: 0.1875rem solid ${colors.white};
  font-size: 0.8em;
  font-weight: 300;
  line-height: 1.45;
  outline: none;
  padding: 0.4em 0em 0.4em;
  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out; 

  &:hover {
    
  }

  &:focus {
    
  }

  &:disabled {
    background-color: ${colors.gray};
  }

  &::placeholder {
    /* Recent browsers */
    text-transform: none;
    color: ${colors.white};
  }
`;