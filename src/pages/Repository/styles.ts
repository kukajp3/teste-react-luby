import styled from 'styled-components';

export const Container = styled.div`
  height: 91vh;
  width: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  height: auto;
  margin: 20px 0;
  border-bottom: 1px solid #7070705a;

  span {
    margin-bottom: 30px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;

  span {
    margin-left: 5px;
    font-size: 15px;
    font-weight: 200;
  }

  .unlock {
    margin-left: auto;
    margin-right: 0;
  }

  .lock {
    margin-left: 10px;
    margin-right: 0;
  }
`;
