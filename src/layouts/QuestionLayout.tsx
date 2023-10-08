import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
    //
};

const QuestionLayout = (props: Props) => {
    return (
        <>
            <p>Question layout</p>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default QuestionLayout;
