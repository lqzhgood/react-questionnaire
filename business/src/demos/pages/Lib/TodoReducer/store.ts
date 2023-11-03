import Mock from 'better-mock';

export type TodoType = {
    id: string;
    title: string;
};

const initialState: TodoType[] = [
    { id: Mock.Random.id(), title: '吃饭' },
    { id: Mock.Random.id(), title: '睡觉' },
];

export default initialState;
