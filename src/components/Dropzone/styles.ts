import styled from 'styled-components';

//Assets
import colors from '../../assets/css/colors';

export const DropzoneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 73px;
    border: 1px dashed #B8B4CC;
    outline: none;

    &:focus{
        outline: none;
    }
`

export const GrayText = styled.p`
    margin-bottom: 7px;
    font: normal normal 600 10px/12px Roboto;
    letter-spacing: 0.5px;
    color: #B8B4CC;
    text-align: center;
`

export const BlueText = styled.p`
    margin-bottom: 0px;
    font: normal normal 600 10px/12px Roboto;
    letter-spacing: 0.5px;
    color: ${colors.primary};
    text-align: center;
`