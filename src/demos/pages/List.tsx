import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { produce } from 'immer';

const List = () => {
    const [list, setList] = useState([
        { id: 1, title: '问卷', isPublished: false },
        { id: 2, title: '问卷', isPublished: false },
        { id: 3, title: '问卷', isPublished: true },
        { id: 4, title: '问卷', isPublished: false },
    ]);

    function add() {
        const r = Math.random().toString().slice(-1);
        setList(
            produce(draft => {
                draft.push({
                    id: Math.random(),
                    title: '问卷' + r,
                    isPublished: false,
                });
            }),
        );
    }

    function push(id: number) {
        setList(
            produce(draft => {
                const f = draft.find(v => v.id === id);
                if (f) f.isPublished = true;
            }),
        );
    }

    function del(id: number) {
        setList(
            produce(draft => {
                const i = draft.findIndex(v => v.id === id);
                draft.splice(i, 1);
            }),
        );
    }

    return <QuestionCard list={list} add={add} del={del} push={push} />;
};

export default List;
