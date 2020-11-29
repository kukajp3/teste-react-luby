import React from 'react';

import { HiArrowRight } from 'react-icons/hi';
import { Container, Image, Content } from './styles';

import { useUser } from '../../hooks/user';

interface FollowProps {
  isFollowers: boolean;
}

const Follow: React.FC<FollowProps> = ({ isFollowers }) => {
  const { userFollowers, userFollowings } = useUser();

  return (
    <Container>
      {isFollowers
        ? userFollowers.map((follower) => {
            return (
              <Content key={follower.id}>
                <Image avatar_url={follower.avatar_url} />
                <span>{follower.login}</span>
                <HiArrowRight size={18} />
              </Content>
            );
          })
        : userFollowings.map((following) => {
            return (
              <Content key={following.id}>
                <Image avatar_url={following.avatar_url} />
                <span>{following.login}</span>
                <HiArrowRight size={18} />
              </Content>
            );
          })}
    </Container>
  );
};

export default Follow;
