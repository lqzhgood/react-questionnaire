import { Spin } from 'antd';
import React from 'react';

function CenterSpin({ style = {} }: { style?: React.CSSProperties }) {
    return (
        <div style={{ textAlign: 'center', ...style }}>
            <Spin />
        </div>
    );
}

export default CenterSpin;
