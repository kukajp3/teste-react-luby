import React from 'react';

import { FiStar, FiLock, FiUnlock } from 'react-icons/fi';
import { Container, Content, ContentInfo } from './styles';

import { useUser } from '../../hooks/user';

const Repository: React.FC = () => {
  const { userRepos } = useUser();

  return (
    <Container>
      {userRepos.map((repo) => {
        return (
          <Content key={repo.full_name}>
            <h2>{repo.name}</h2>
            <span>{repo.description}</span>
            <ContentInfo>
              <FiStar size={18} color="FFCE00" />
              <span>{repo.stargazers_count}</span>
              <FiUnlock className="unlock" size={18} color="63BF1F" />
              <FiLock className="lock" size={18} color="CC042A" />
            </ContentInfo>
          </Content>
        );
      })}
    </Container>
  );
};

export default Repository;
