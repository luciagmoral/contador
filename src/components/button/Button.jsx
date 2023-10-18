import { StyledButton } from './styles';

const Button = ({ text, action }) => {
	return <StyledButton onClick={action}>{text}</StyledButton>;
};
export default Button;
