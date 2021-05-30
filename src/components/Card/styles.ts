import styled from 'styled-components';

//Assets
import colors from '../../assets/css/colors';

export const Container = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;

    background-color: ${colors.white};
    -webkit-box-shadow: -1px 15px 55px -21px ${colors.primary};
    -moz-box-shadow: -1px 15px 55px -21px ${colors.primary};
    box-shadow: -1px 15px 55px -21px ${colors.primary};

    border-radius: 2rem;

    @media (max-width: 700px){
        width: 90%;
    }

    @media (max-width: 500px){
        width: 95%;
    }
`;