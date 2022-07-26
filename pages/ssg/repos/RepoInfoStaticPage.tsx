import { memo } from "react";
import { RepoInfo } from "@/src/components/RepoInfo/RepoInfo";

interface IRepoInfoStaticPage {
  userData: Record<string, any>;
}

export const RepoInfoStaticPage = memo((props: IRepoInfoStaticPage) => {
  const { url, owner, description, language, name } = props.userData;

  return (
    <>
      <RepoInfo
        name={name}
        owner={owner.login}
        description={description}
        url={url}
        language={language}
      />
    </>
  );
});

RepoInfoStaticPage.displayName = "RepoInfoStaticPage";

export async function getStaticProps() {
  const result = await fetch(
    `https://api.github.com/repos/hubble999/formatter`,
    {
      method: "GET",
    }
  );

  const userData = await result.json();

  return {
    props: {
      userData,
    },
  };
}

export default RepoInfoStaticPage;
