import { memo } from "react";

interface IRepoInfo {
  name: string;
  owner: string;
  description: string;
  url: string;
  language: string;
}

export const RepoInfo = memo(
  ({ name, owner, description, url, language }: IRepoInfo) => {
    return (
      <div>
        <h2>Название репо: {name}</h2>
        <div>Владелец: {owner}</div>
        <div>Описание: {description}</div>
        <div>Язык: {language}</div>
        <div>URL: {url}</div>
      </div>
    );
  }
);

RepoInfo.displayName = "RepoInfo";
