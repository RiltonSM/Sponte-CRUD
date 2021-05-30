import styled from 'styled-components';


//Assets
import colors from '../../assets/css/colors';

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 70%;
    max-height: 95%;


    border-radius: 2rem;

    background-color: ${colors.white};

    @media (max-width: 768px){
        width: 85%;
    }

    @media (max-width: 650px){
        overflow-y: auto;
    }

    @media (max-width: 500px){
        width: 95%;
    }
`;

export const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-top: 1rem;
    margin-right: 1rem;
`


export const Close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    border: none;

    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    flex-grow: 2;

    padding: 2rem;
    padding-top: 1rem;
`;

export const ViewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 45%;

    display: flex;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        margin-bottom: 2rem;
    }
`;

export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    object-fit: contain;
`;

export const TextContainer = styled.div`
    width: 45%;
    max-height: 100%;

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const TextTitle = styled.h2`
    font-size: 1rem;
    margin: 0;
    margin-bottom: 5px;
`;

export const Text = styled.p`
    font-size: 0.85rem;
    margin: 0;
    margin-bottom: 12px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CategotyTextContainer = styled.div`
    margin-bottom: 12px;
`
export const CategotyText = styled.span`
    font-size: 0.85rem;
    margin-right: 5px;
`;

export const AddAndEditContainer = styled.div`
    width: 100%;

    display: flex;

`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    width: 40%;

    @media (max-width: 1024px){
        width: 45%;
    }

    @media (max-width: 650px){
        width: 100%;
    }
`;

export const CategoryColumn = styled.div`
    display: flex;
    /* align-items: center; */

    flex-direction: column;

    @media (max-width: 600px){
        align-items: center;
    }
`;

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 650px){
        flex-direction: column;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;

    margin-top: 2rem;
`;

export const Legend = styled.legend`
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #454546;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
`;

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 600px){
        margin-bottom: 0.4rem;
    }
`;

export const TextArea = styled.textarea`
    width: calc(100% - 2em);
    height: 85px;

    color: #000000;

    border-radius: 7px;
    border: 1px solid rgba(194, 194, 194, 0.2);

    font-family: Roboto;
    font-size: 0.8em;
    font-weight: 300;
    line-height: 1.45;

    outline: none;

    padding: 0.4em 1em 0.4em;

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
        border: 1px solid rgba(194, 194, 194, 0.2);
        -webkit-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        -moz-box-shadow: 0px 3px 33px -4px ${colors.tertiary};
        box-shadow: 0px 3px 33px -4px ${colors.tertiary};
    }

    &::-webkit-input-placeholder {
        /* WebKit browsers */
        text-transform: none;
    }
    &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        text-transform: none;
    }
    &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        text-transform: none;
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        text-transform: none;
    }
    &::placeholder {
        /* Recent browsers */
        text-transform: none;
        font-family: Roboto;
    }

    @media (max-width: 650px){
        margin-bottom: 1rem;
    }
`;

export const InputLegend = styled.h6`
    text-align: right;
    font: normal normal normal 9px Roboto;
    color: #B8B4CC;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 1rem;
    
    @media (max-width: 650px){
        margin-bottom: 1rem;
    }
`;

export const ErrorMessage = styled.p`
    width: 100%;

    color: ${colors.secondary};
    text-align: center;

    margin-bottom: 0px;
`