import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

const Gist = ({ gist }) => {
  const numberOfFiles = Object.keys(gist.files).length;

  return (
    <Wrapper>
      <Header>
        <Owner>
          <Avatar src={gist.owner.avatar_url} alt="avatar" />
          <Username href={gist.owner.html_url}>{gist.owner.login}</Username>
        </Owner>
        <HeaderItems>
          <HeaderItem href={gist.html_url}><span className="fa fa-file-o" /> {numberOfFiles > 0 ? numberOfFiles : ""} Files</HeaderItem>
          <HeaderItem href={gist.forks_url}><span className="fa fa-code-fork" />Forks</HeaderItem>
          <HeaderItem href={gist.comments_url}><span className="fa fa-comment-o" /> Comments</HeaderItem>
        </HeaderItems>
      </Header>
      <Subheader>
        <SubheaderItem>Created at: {DateTime.fromISO(gist.created_at).toLocaleString(DateTime.DATE_SHORT)}</SubheaderItem>
        <SubheaderItem>Last updated: {DateTime.fromISO(gist.updated_at).toLocaleString(DateTime.DATE_SHORT)}</SubheaderItem>
      </Subheader>
      {gist.description !== "" ?
        <Description>{gist.description}</Description>
      : null}
      {numberOfFiles > 0 ?
        <Files>
          {Object.values(gist.files).map((file, index) => (
            <File key={index} src={file.raw_url}><FileIcon className="fa fa-file-o" /> {file.filename}</File>
          ))}
        </Files>
      : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #e1e4e8;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Owner = styled.div`
  display: flex;
  align-items: center;
  min-width: 45%;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const Username = styled.a`
  font-size: 1.2rem;
  color: #2775DB;
  text-decoration: none;
`;

const HeaderItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderItem = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  color: #2775DB;
  text-decoration: none;

  span {
    margin-right: 0.2rem;
    font-size: 1.2rem;
  }
`;

const Subheader = styled.div`
  disply: flex;
  margin-bottom: 0.5rem;
`;

const SubheaderItem = styled.span`
  margin-right: 1rem;
`;

const Description = styled.div`
  padding: 0.5rem 0;
  font-size: 1.3rem;
`;

const Files = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 1rem;
`;

const File = styled.a`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  color: #2775DB;
  text-decoration: none;
`;

const FileIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export default Gist;
