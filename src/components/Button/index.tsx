//Styles
import { Button as ButtonComponent } from './styles';

//Interfaces
import { Props } from './interfaces'

const Button = (props: Props) => {
  return (
  <ButtonComponent {...props}>
      {props.children}
  </ButtonComponent>
  );
}

export default Button;