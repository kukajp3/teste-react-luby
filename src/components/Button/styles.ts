import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #ffce00;
  height: 41px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #292929;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, '#ffce00')};
  }
`;
