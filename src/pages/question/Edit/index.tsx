import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {
    //;
};

const Edit = (props: Props) => {
    const { id } = useParams();
    return <div>Edit {id}</div>;
};

export default Edit;
