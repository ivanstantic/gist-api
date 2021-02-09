import React, { useEffect, useState } from 'react';
import Gist from "./Gist";
import { getPublicGists } from "../services/gistService";

const GistList = () => {
  const [gistList, updateGistList] = useState([]);

  useEffect(() => {
    fetchGistList();
  }, []);

  const fetchGistList = async () => {
    try {
      const { data: gistList } = await getPublicGists();
      updateGistList(gistList);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <>
      {gistList.length > 0 ?
        <>
          {gistList.map(gist => <Gist key={gist.id} gist={gist} />)}
        </>
      : <h1>Loading</h1>}
    </>
  );
}

export default GistList;
