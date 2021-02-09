import React from 'react';
import styled from 'styled-components';
import Gist from "./Gist";

const GistList = ({gistList}) => {
  if (gistList === null) {
    return (
      <Wrapper>
        <h1>Loading.</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {gistList.length > 0 ?
        <>
          {gistList.map(gist => <Gist key={gist.id} gist={gist} />)}
        </>
      : <h1>No results.</h1>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 680px;
  margin: 0 auto;
  padding: 16px;
`;

export default GistList;
