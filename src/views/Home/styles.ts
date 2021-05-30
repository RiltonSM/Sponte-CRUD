import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors.white};
`;

export const Header = styled.header`
    width: calc(100% - 4rem);

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 20px 2rem;

    margin-bottom: 2rem;

    background-color: ${colors.primary};

    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    @media (max-width: 700px){
        flex-direction: column;

        width: calc(100% - 2rem);
        padding: 10px 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${colors.white};

    margin: 0;

    @media (max-width: 700px){
        margin-bottom: 0.5rem;
    }
`;

export const SearchInputContainer = styled.div`
    width: 170px;
    margin-right: 32px;
`;

export const Content = styled.div`
    /* width: calc(100% - 4rem);
    height: calc(100% - 2rem); */
    display: flex;
    flex-direction: column;

    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
`;

export const TableContainer = styled.div`
    display: flex;

    height: 420px;

    overflow-x: auto;

    ::-webkit-scrollbar-track {
        background-color: ${colors.scrollBarBackground};
    }
    ::-webkit-scrollbar {
        height: 6px;
        background: ${colors.scrollBarBackground};
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.scrollBarThumb};
    }
`;

export const Table = styled.table`
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;
`;

export const Tr = styled.tr`
    height: 2.5rem;
    cursor: pointer;
`;

export const Td = styled.td`
    text-align: center;
`;

export const TitleTour = styled.h1`
    color: ${colors.primary};
    font-size: 26px;
    margin-bottom: 10px;
`;

export const ContentText = styled.p`
    font-size: 14px;
`;