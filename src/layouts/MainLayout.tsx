import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
    //;
};

const MainLayout = (props: Props) => {
    return (
        <>
            <div>Main layout header</div>
            <div>
                <Outlet />
            </div>
            <div>Main layout footer</div>
        </>
    );
};

export default MainLayout;
