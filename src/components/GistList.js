import React from 'react';
import Gist from "./Gist";

const GistList = ({gistList}) => (
  <>
    {gistList.length > 0 ?
      <>
        {gistList.map(gist => <Gist key={gist.id} gist={gist} />)}
      </>
    : <h1>Loading</h1>}
  </>
);

export default GistList;
