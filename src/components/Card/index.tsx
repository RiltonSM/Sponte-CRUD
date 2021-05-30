//Styles
import { Container } from './styles';

//Interfaces
import { CardPropsInterface } from './interfaces'

const Card = ({ children }: CardPropsInterface) => {
    return(
        <Container>
            { children }
        </Container>
    )
}

export default Card;