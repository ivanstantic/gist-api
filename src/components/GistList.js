import React, { useEffect, useState } from 'react'
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
        <ul>
          {gistList.map(gist => <li key={gist.id}>{gist.id}</li>)}
        </ul>
      : <h1>Loading</h1>}
    </>
  );
}

export default GistList
