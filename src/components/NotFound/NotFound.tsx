import {memo} from "react";

type TNotFound = {
    userId: string;
}

export const NotFound = memo(({userId}: TNotFound) => {
    return (
        <h4>
            {`Пользователь с id ${userId} не найден`}
        </h4>
    );
});

NotFound.displayName = "NotFound";
