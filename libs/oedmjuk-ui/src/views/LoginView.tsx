import { Button } from "../components/Button";
import { InputField } from "../components/InputField";
import styled from 'styled-components';
import "@fontsource/clear-sans"
import { Colors, Fonts } from '../constants';
//import Logo from '../static/oedmjuk_big_logo.svg'
import { ReactComponent as Logo } from '../static/oedmjuk_big_logo.svg';


const LoginHeader = styled.h1`
  color: ${Colors.white};
  font-family: ${Fonts.default};
  font-weight: 700;
  font-size: 24px;
`

const ViewWrapper = styled.div`
  background-color: ${Colors.primary};
  width: 100%;
  height: 80vh;
  padding-top: 20vh;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    padding-top: 0;
  }
`

const FormWrapper = styled.div`
  background-color: ${Colors.neutralDark};
  width: 400px;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
    overflow: hidden;
  }
`

const FormFrame = styled.div`
  margin: 64px;
  @media (max-width: 768px) {
    margin: 32px;
    margin-bottom: 64px;
  }
`

const LogoWrapper = styled.div`
  max-width: 500px;
  padding-right: 100px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
    overflow: hidden;
    padding-right: 0;
    text-align: center;
    padding-bottom: 32px
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
`

export const LoginView = () => {
  return (
    <ViewWrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <FormWrapper>
          <FormFrame>
          <LoginHeader>Login</LoginHeader>
          <form>
            <InputField placeholder="It is your e-mail" label="Username" />
            <InputField placeholder="Password goes here" label="Password" />
            <Button>login</Button>
          </form>
          </FormFrame>
        </FormWrapper>
      </ContentWrapper>
    </ViewWrapper>
  );
}
