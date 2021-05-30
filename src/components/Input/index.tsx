import { Input as InputComponent } from './styles';

import { InputProps } from './interfaces';

const Input= (props: InputProps) => {

  return (
    <InputComponent {...props} />
  ); 
}

export default Input;