import React, { useState } from 'react';
import classnames from 'classnames';
import './ClassnamesFC.css';

const classnamesFC = () => {
    const [push, setPush] = useState(false);

    const pushClass = classnames({ push: push });

    return (
        <div
            className={pushClass}
            onClick={() => {
                setPush(!push);
            }}
        >
            classnamesFC
        </div>
    );
};

export default classnamesFC;
