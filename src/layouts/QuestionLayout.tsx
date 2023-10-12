import useNavPage from '@/hooks/useNavPage';
import React from 'react';
import { Outlet } from 'react-router-dom';

const QuestionLayout = () => {
    useNavPage();
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default QuestionLayout;
