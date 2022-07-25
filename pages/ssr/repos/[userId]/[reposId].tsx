import { memo } from "react";
import { RepoInfo } from "@/src/components/RepoInfo/RepoInfo";
import { NotAvillable } from "../NotAvillable";
import type { NextPage, GetServerSidePropsContext } from "next";

interface IRepoInfoPage {
  userData: Record<string, any>;
  userId: string;
  reposId: string;
}

const RepoInfoPage: NextPage<IRepoInfoPage> = memo((props) => {
  const { userId, reposId } = props;
  const { url, owner, description, language, name } = props.userData;

  const isDataNotFound = !props.userData.message;

  return (
    <div>
      {isDataNotFound ? (
        <RepoInfo
          name={name}
          owner={owner.login}
          description={description}
          url={url}
          language={language}
        />
      ) : (
        <NotAvillable userId={userId} repoId={reposId} />
      )}
    </div>
  );
});

RepoInfoPage.displayName = "RepoInfoPage";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { userId, reposId } = context.query;

  const result = await fetch(
    `https://api.github.com/repos/${userId}/${reposId}`,
    {
      method: "GET",
    }
  );

  const userData = await result.json();

  return {
    props: {
      userData,
      userId,
      reposId,
    },
  };
}

export default RepoInfoPage;
