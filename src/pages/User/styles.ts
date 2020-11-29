import styled from 'styled-components';

interface ImageProps {
  avatar_url: string;
}

export const Container = styled.div`
  width: 500px;
`;

export const Header = styled.div`
  height: 130px;
  display: flex;
  justify-content: flex-end;
  background: #1f1f1f;

  span {
    margin-top: 10px;
    font-weight: 200;
    cursor: pointer;
  }

  svg {
    margin-left: 5px;
    margin-top: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const Image = styled.img<ImageProps>`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: url(${(props) => props.avatar_url});
  background-size: 120px;
  transform: translateY(-50%);
  left: 40%;
`;

export const UserInfo = styled.div`
  position: relative;
  height: 130px;
  display: flex;
  flex-direction: column;

  margin-left: 10px;
`;

export const Name = styled.span`
  font-size: 26px;
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 18px;
  font-weight: 200;
`;

export const Location = styled.span`
  font-size: 18px;
  font-weight: 200;
`;

export const TabsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #5252525d;
  padding: 15px;
`;

export const TabInfo = styled.div`
  margin: 0 10px;
  justify-content: center;
  text-align: center;

  cursor: pointer;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  span {
    font-weight: 200;
  }
`;

export const BioInfo = styled.div`
  margin-top: 40px;
  margin-left: 10px;

  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  span {
    font-weight: 200;
  }
`;
