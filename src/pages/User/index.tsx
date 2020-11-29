import React, { useCallback } from 'react';

import { MdExitToApp } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../hooks/user';

import {
  Container,
  Header,
  Image,
  UserInfo,
  Name,
  Email,
  Location,
  TabsInfo,
  TabInfo,
  BioInfo,
} from './styles';

const User: React.FC = () => {
  const history = useHistory();

  const {
    user,
    addUser,
    addUserRepos,
    addUserFollowers,
    addUserFollowings,
  } = useUser();

  if (user.login === undefined) history.push('/');

  const handleExit = useCallback(() => {
    addUser({} as any);

    addUserRepos([]);

    addUserFollowers([]);

    addUserFollowings([]);

    history.push('/');
  }, [addUser, addUserFollowers, addUserFollowings, addUserRepos, history]);

  return (
    <Container>
      <Header onClick={handleExit}>
        <span>Sair</span>
        <MdExitToApp size={20} color="D03434" />
      </Header>
      <Image avatar_url={user.avatar_url} />
      <UserInfo>
        <Name>{user.name?.toUpperCase()}</Name>
        <Email>{user.email}</Email>
        <Location>{user.location}</Location>
      </UserInfo>
      <TabsInfo>
        <TabInfo>
          <h1>{user.followers}</h1>
          <span>Seguidores</span>
        </TabInfo>
        <TabInfo>
          <h1>{user.following}</h1>
          <span>Seguindo</span>
        </TabInfo>
        <TabInfo>
          <h1>{user.public_repos}</h1>
          <span>Repos</span>
        </TabInfo>
      </TabsInfo>
      <BioInfo>
        <h1>BIO</h1>
        <span>{user.bio}</span>
      </BioInfo>
    </Container>
  );
};

export default User;
