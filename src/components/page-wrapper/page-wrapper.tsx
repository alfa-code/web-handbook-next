import React from 'react';

interface Props {
    children: React.ReactNode;
}
 
export const PageWrapper: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            { props.children }
        </div>
    );
};
