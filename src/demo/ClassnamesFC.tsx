import React, { useState } from 'react';
import classnames from 'classnames';
import './ClassnamesFC.css';
import style from './ClassnamesFC.module.css';

const classnamesFC = () => {
    const [push, setPush] = useState(false);

    const pushClass = classnames({ push: push, [style['push-module']]: push });

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
