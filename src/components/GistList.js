import React from 'react';
import Gist from "./Gist";

const GistList = ({gistList}) => {
  if (gistList === null) {
    return <h1>Loading.</h1>;
  }

  return (
    <>
      {gistList.length > 0 ?
        <>
          {gistList.map(gist => <Gist key={gist.id} gist={gist} />)}
        </>
      : <h1>No results.</h1>}
    </>
  );
};

export default GistList;
