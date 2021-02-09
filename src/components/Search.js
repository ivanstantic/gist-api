import React from 'react';
import styled from 'styled-components';
import Octicon from 'react-octicon';
import { getGistForUser } from "../services/gistService";

const Search = ({updateGistList}) => {
  const fetchGistListForUser = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    try {
      const { data: gistListForUser } = await getGistForUser(username);
      updateGistList(gistListForUser);
    } catch(error) {
      updateGistList(null);
    }
  };

  return (
    <Wrapper>
      <InputBox>
      <Octicon name="search" />
      <Form onSubmit={fetchGistListForUser}>
        <Input name="username" placeholder="Search Gists for the username" />
      </Form>
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search;
