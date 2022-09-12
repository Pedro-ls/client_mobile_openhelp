import styled from 'styled-components/native';

import { colors } from '../colors';

export const Circle = styled.View`
  border-radius: 50px;
  background-color: ${colors.dark.black_04};
  padding: 7px;
  margin-left: 2px;
`;

export const NewMessageButton = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: 60px;
  height: 60px;
  background-color: ${colors.dark.Azul_01};
  border-radius: 50px;
  margin-bottom: 35px;
`;
