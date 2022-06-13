import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OedmjukUiProps {}

const StyledOedmjukUi = styled.div`
  color: pink;
`;

export function OedmjukUi(props: OedmjukUiProps) {
  return (
    <StyledOedmjukUi>
      <h1>Welcome to OedmjukUi!</h1>
    </StyledOedmjukUi>
  );
}

export default OedmjukUi;
