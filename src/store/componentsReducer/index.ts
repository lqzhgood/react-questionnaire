import { ComponentConfList, ComponentPropsType } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ComponentInfoType<T extends ComponentConfList = ComponentConfList> = {
    fe_id: string;
    type: keyof T;
    title: string;
    props: T[QuestionComponentType]['defaultProps'];
};

export type ComponentStateType = {
    componentList: ComponentInfoType[];
    selectedId: string;
};

const INIT_STATE: ComponentStateType = {
    selectedId: '',
    componentList: [],
};

export const componentsSlice = createSlice({
    name: 'components',
    initialState: INIT_STATE,
    reducers: {
        resetComponents: (state, action: PayloadAction<ComponentStateType>) => {
            return action.payload;
        },

        changeSelectedId: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        },

        addComponent: (state, action: PayloadAction<ComponentInfoType>) => {
            const newComponent = action.payload;
            const { selectedId, componentList } = state;
            const index = componentList.findIndex(v => v.fe_id === selectedId);

            if (index < 0) {
                componentList.push(newComponent);
            } else {
                componentList.splice(index + 1, 0, newComponent);
            }

            state.selectedId = newComponent.fe_id;
        },

        changeComponentProps: (state, action: PayloadAction<{ newProps: ComponentPropsType }>) => {
            const { componentList, selectedId } = state;
            const { newProps } = action.payload;

            const find = componentList.find(c => c.fe_id === selectedId);
            if (find) {
                Object.assign(find.props, newProps);
            }
        },
    },
});

export const { resetComponents, changeSelectedId, addComponent, changeComponentProps } = componentsSlice.actions;
