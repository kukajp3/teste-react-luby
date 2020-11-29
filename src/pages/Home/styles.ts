import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

export const GithubIcon = styled(FaGithub)`
  height: 100px;
  width: 100px;
  color: #ffce00;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 40px 0;
    width: 350px;
  }

  button {
    font-size: 20px;
    font-weight: bold;

    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }
`;
