import { memo } from "react";

interface INotAvillable {
  userId: string;
  repoId: string;
}

export const NotAvillable = memo(({ userId, repoId }: INotAvillable) => {
  return (
    <div>
      {`Репозиторий с id пользователя ${userId} и именем репозитория ${repoId} не найден`}
    </div>
  );
});

NotAvillable.displayName = "NotAvillable";
