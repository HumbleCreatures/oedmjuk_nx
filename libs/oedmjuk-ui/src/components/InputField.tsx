import styled from 'styled-components';
import "@fontsource/clear-sans"
import { Colors, Fonts } from '../constants';

const InputTextField = styled.input`
  padding-top: 10px;
  padding-bottom: 7px;
  padding-left: 14px;
  border-radius: 3px;
  font-family: ${Fonts.default};
  font-size: 13px;
  border: none;
  width: 100%;
  border-bottom: 3px solid ${Colors.white};
  &:focus {
    border-bottom: 3px solid ${Colors.neutralLight};
    box-shadow: none;
    outline: none;
  }
  &::placeholder {
    color: ${Colors.neutralLight};
    opacity: 1;
  }
`;

const ErrorField = styled.div`
  padding:0;
  border-radius: 3px;
  background-color: ${Colors.danger};
  display: block;
  overflow:hidden;
`;

const ErrorMessage = styled.div`
  padding: 6px;
  font-family: 'Clear Sans', sans-serif;
  font-size: 13px;
  color: ${Colors.white};
`;

const Label = styled.label`
display: block;
`;

const LabelText = styled.div`
display: block;
font-size: 13px;
font-family: 'Clear Sans', sans-serif;
color: ${Colors.neutralLight};
margin-bottom: 4px;
`;

const Wrapper = styled.div`
margin-top: 10px;
margin-bottom: 10px;
display: block;
`;
type input = {
  errorMessage?: string;
  placeholder: string;
  label: string;
}
export const InputField = ({errorMessage, placeholder, label}:input) => (
<Wrapper>
  <Label>
  <LabelText>{label}</LabelText>
  <ErrorField>
    <InputTextField placeholder={placeholder}></InputTextField>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
  </ErrorField>
  </Label>
</Wrapper>);
