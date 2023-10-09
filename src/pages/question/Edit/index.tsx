import React, { useEffect } from 'react';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';

const Edit = () => {
    const { loading, questionData } = useLoadQuestionData();

    return (
        <div>
            Edit
            <br /> {loading ? 'loading' : JSON.stringify(questionData)}
        </div>
    );
};

export default Edit;
