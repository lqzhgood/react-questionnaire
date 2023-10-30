import { Spin } from 'antd';
import React, { Suspense } from 'react';

type Props = {
    children: JSX.Element | JSX.Element[];
};

const AsyncComponent = (props: Props) => {
    return <Suspense fallback={<Spin size='large' />}>{props.children}</Suspense>;
};

export default AsyncComponent;
