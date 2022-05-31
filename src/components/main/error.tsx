import React from 'react';

export interface IErrorProps {};

const Error: React.FunctionComponent<IErrorProps> = props => {
    return <div style={{textAlign: 'center'}}>
        <button onClick={() => window.location.href="/"}>Go to main page</button>
        ERROR
        </div>
}
export default Error;