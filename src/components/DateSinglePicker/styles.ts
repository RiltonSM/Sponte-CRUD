import styled from 'styled-components';

//Assets
import colors from '../../assets/css/colors';

export const DateSinglePickerContainer = styled.div`
    width: calc(100% - 2em);

    border-radius: 7px;
    border: 1px solid rgba(194, 194, 194, 0.2);
    font-size: 0.8em;
    font-weight: 300;
    line-height: 1.45;
    outline: none;
    padding: 0.4em 1em 0.4em;

    margin-bottom: 1rem;
    
    -webkit-transition: 0.18s ease-out;
    -moz-transition: 0.18s ease-out;
    -o-transition: 0.18s ease-out;
    transition: 0.18s ease-out;

    -webkit-box-shadow:  -4px 3px 19px -8px ${colors.primary};
    -moz-box-shadow:  -4px 3px 19px -8px ${colors.primary};
    box-shadow:  -4px 3px 19px -8px ${colors.primary};

    &:hover {
        border: 1px solid rgba(255, 169, 89, 0.2);
        -webkit-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        -moz-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        box-shadow: 0px 3px 33px -4px ${colors.tertiary};
    }

    &:focus {
        color: var(--gray);
        border: 1px solid ${colors.tertiary};
        -webkit-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        -moz-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        box-shadow: 0px 3px 33px -4px ${colors.tertiary};
    }
`