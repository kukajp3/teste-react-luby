import styled from 'styled-components';

interface ImageProps {
  avatar_url: string;
}

export const Container = styled.div`
  height: 91vh;
  width: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  padding-bottom: 15px;
  margin: 20px 0;
  border-bottom: 1px solid #7070705a;

  display: flex;
  align-items: center;

  span {
    margin-left: 20px;
  }

  svg {
    margin-left: auto;
    margin-right: 0;

    cursor: pointer;
  }
`;

export const Image = styled.img<ImageProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: url(${(props) => props.avatar_url});
  background-size: 80px;
`;
