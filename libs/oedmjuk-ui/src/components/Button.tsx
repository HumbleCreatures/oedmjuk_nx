import styled from 'styled-components';
import "@fontsource/clear-sans"
import { Colors, Fonts } from '../constants';

export const Button = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 3px;
  font-family: ${Fonts.default};
  font-size: 13px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border: none;
  display: block;
  width: 100%;
  &:disabled {
    background-color: ${Colors.neutralLight};
    color: ${Colors.white};
  }
`;
