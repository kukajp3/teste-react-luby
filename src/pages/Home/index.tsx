import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { HiArrowRight } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import ValidationErrors from '../../utils/ValidationErrors';

import { useUser } from '../../hooks/user';

import { Container, GithubIcon } from './styles';

const Home: React.FC = () => {
  const {
    user,
    addUser,
    addUserRepos,
    addUserFollowers,
    addUserFollowings,
  } = useUser();

  const history = useHistory();

  if (user.login !== undefined) {
    history.push('/dashboard');
  }

  const [inputText, setInputText] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        const responseUser = await api.get(inputText);

        addUser(responseUser.data);

        const responseUserRepos = await api.get(`${inputText}/repos`);

        addUserRepos(responseUserRepos.data);

        const responseUserFollowers = await api.get(`${inputText}/followers`);

        addUserFollowers(responseUserFollowers.data);

        const responseUserFollowings = await api.get(`${inputText}/following`);

        addUserFollowings(responseUserFollowings.data);

        history.push('/dashboard');
      } catch (err) {
        if (err.response.status === 404) return;

        const errors = ValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [
      addUser,
      addUserFollowers,
      addUserFollowings,
      addUserRepos,
      history,
      inputText,
    ],
  );

  const handleChange = useCallback((data) => {
    setInputText(data.target.value);
  }, []);

  return (
    <Container>
      <GithubIcon />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="user"
          value={inputText}
          onChange={handleChange}
          placeholder="Usuário"
        />
        <Button type="submit">
          Entrar
          <HiArrowRight color="292929" />
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
