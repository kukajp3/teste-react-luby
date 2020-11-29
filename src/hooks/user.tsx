/* eslint-disable camelcase */
import React, { createContext, useCallback, useState, useContext } from 'react';

interface UserProps {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  repos_url: string;
  public_repos: string;
  public_gists: string;
  followers: string;
  following: string;
}

interface UserReposProps {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
}

interface UserFollowProps {
  id: number;
  login: string;
  avatar_url: string;
}

interface UserContextProps {
  user: UserProps;
  userRepos: UserReposProps[];
  userFollowers: UserFollowProps[];
  userFollowings: UserFollowProps[];
  addUser(user: UserProps): void;
  addUserRepos(userRepos: UserReposProps[]): void;
  addUserFollowers(userFollowersAdded: UserFollowProps[]): void;
  addUserFollowings(userFollowingsAdded: UserFollowProps[]): void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>(() => {
    const userLocal = localStorage.getItem('user');

    if (userLocal) return JSON.parse(userLocal);

    return {} as UserProps;
  });

  const [userRepos, setUserRepos] = useState<UserReposProps[]>(() => {
    const userReposLocal = localStorage.getItem('userRepos');

    if (userReposLocal) return JSON.parse(userReposLocal);

    return [];
  });

  const [userFollowers, setUserFollowers] = useState<UserFollowProps[]>(() => {
    const userFollowersLocal = localStorage.getItem('userFollowers');

    if (userFollowersLocal) return JSON.parse(userFollowersLocal);

    return [];
  });

  const [userFollowings, setUserFollowings] = useState<UserFollowProps[]>(
    () => {
      const userFollowingsLocal = localStorage.getItem('userFollowings');

      if (userFollowingsLocal) return JSON.parse(userFollowingsLocal);

      return [];
    },
  );

  const addUser = useCallback(
    (userAdded: UserProps) => {
      setUser(userAdded);

      localStorage.setItem('user', JSON.stringify(userAdded));
    },
    [setUser],
  );

  const addUserRepos = useCallback(
    (userReposAdded: UserReposProps[]) => {
      setUserRepos(userReposAdded);

      localStorage.setItem('userRepos', JSON.stringify(userReposAdded));
    },
    [setUserRepos],
  );

  const addUserFollowers = useCallback(
    (userFollowersAdded: UserFollowProps[]) => {
      setUserFollowers(userFollowersAdded);

      localStorage.setItem('userFollowers', JSON.stringify(userFollowersAdded));
    },
    [setUserFollowers],
  );

  const addUserFollowings = useCallback(
    (userFollowingsAdded: UserFollowProps[]) => {
      setUserFollowings(userFollowingsAdded);

      localStorage.setItem(
        'userFollowings',
        JSON.stringify(userFollowingsAdded),
      );
    },
    [setUserFollowings],
  );

  return (
    <UserContext.Provider
      value={{
        user,
        userRepos,
        userFollowers,
        userFollowings,
        addUser,
        addUserRepos,
        addUserFollowers,
        addUserFollowings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextProps {
  const context = useContext(UserContext);

  return context;
}
