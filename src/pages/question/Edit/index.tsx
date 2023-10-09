import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionService } from '../../../services/question';

const Edit = () => {
    const { id } = useParams();

    useEffect(() => {
        getQuestionService('1').then(d => {
            console.log('d', d);
        });
    });

    return <div>Edit {id}</div>;
};

export default Edit;
