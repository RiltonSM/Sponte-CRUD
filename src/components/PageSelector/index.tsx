import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

//Styles
import { Container, PageButtonGroup, CirclePage } from './styles';

//Interfaces
import { FooterPropsInterface } from './interfaces';
import colors from '../../assets/css/colors';

const Footer = (props: FooterPropsInterface) => {
    const pageNumberDefiner = () => {
        if(props.page === 1){
            return [
                1, 2, 3, 4
            ]
        } else if(props.page + 2 <= props.maxPage){
            return [
                props.page - 1,
                props.page,
                props.page + 1,
                props.page + 2
            ]
        } else if(props.page + 1 <= props.maxPage){
            return [
                props.page - 2,
                props.page - 1,
                props.page ,
                props.page + 1
            ]
        }
        else if(props.page === props.maxPage){
            return [
                props.page - 3,
                props.page - 2,
                props.page - 1,
                props.page
            ]
        } else {
            return [
                props.page - 1,
                props.page,
                props.page + 1,
                props.page + 2
            ]
        }
    }

    const pageNumberGenerator = () => {
        const pages = pageNumberDefiner();
        return pages.map(p => {
            if(p <= props.maxPage && p > 0){
                return <CirclePage key={p} onClick={() => props.setPage(p)} active={props.page === p} disabled={((p - 1)) >= props.maxPage}>{p}</CirclePage>
            }
        })
    }

    const pageAdvancer = () => {
        if((props.page) >= props.maxPage){
            return;
        } else {
            props.setPage(props.page + 1);
        }
    }

    const pageBack = () => {
        if(props.page === 1) {
            return
        } else {
            props.setPage(props.page - 1);
        }
    }

    return(
        <Container>
            <PageButtonGroup>
                <CirclePage onClick={() => pageBack()}><FiChevronLeft color={colors.gray} size={32}/></CirclePage>
                {pageNumberGenerator()}
                <CirclePage onClick={() => pageAdvancer()}><FiChevronRight color={colors.gray} size={32}/></CirclePage>
            </PageButtonGroup>
        </Container>
    )
}

export default Footer;