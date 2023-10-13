import { TodoType } from './store';

export type ActionType = {
    type: string;
    payload?: any; // eslint-disable-line
};
export default function reducer(state: TodoType[], action: ActionType) {
    switch (action.type) {
        case 'add':
            return state.concat(action.payload);
        case 'del':
            return state.filter(v => v.id !== action.payload);
        default:
            throw new Error('unknown action type');
    }
}
