import { ComponentConfList, ComponentPropsType } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNextSelectedId } from './utils';

interface _ComponentInfoType<T extends QuestionComponentType> {
    fe_id: string;
    type: T;
    title: string;
    isHidden?: boolean;
    isLocked?: boolean;
    props: Partial<ComponentConfList[T]['defaultProps']>;
}

export type ComponentInfoType<U = QuestionComponentType> = U extends QuestionComponentType
    ? _ComponentInfoType<U>
    : never;

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

        changeComponentProps: (state, action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>) => {
            const { componentList, selectedId } = state;
            const { newProps } = action.payload;

            const find = componentList.find(c => c.fe_id === selectedId);
            if (find) {
                Object.assign(find.props, newProps);
            }
        },

        removeSelectedComponent: (state, action: PayloadAction<{ fe_id: string }>) => {
            const { componentList } = state;
            const { fe_id } = action.payload;

            const index = componentList.findIndex(v => v.fe_id === fe_id);
            if (index !== -1) {
                state.selectedId = getNextSelectedId(fe_id, componentList);
                componentList.splice(index, 1);
            }
        },

        changeComponentHidden: (state, action: PayloadAction<{ fe_id: string; isHidden: boolean }>) => {
            const { componentList, selectedId } = state;
            const { fe_id, isHidden } = action.payload;
            const find = componentList.find(c => c.fe_id === fe_id);
            if (find) {
                if (isHidden) {
                    state.selectedId = getNextSelectedId(selectedId, componentList);
                } else {
                    state.selectedId = fe_id;
                }

                find.isHidden = isHidden;
            }
        },

        toggleComponentLocked: (state, action: PayloadAction<{ fe_id: string }>) => {
            const { componentList } = state;
            const { fe_id } = action.payload;
            const find = componentList.find(c => c.fe_id === fe_id);
            if (find) {
                find.isLocked = !find.isLocked;
            }
        },
    },
});

export const {
    resetComponents,
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
} = componentsSlice.actions;
