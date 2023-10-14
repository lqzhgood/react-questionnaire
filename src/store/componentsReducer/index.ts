import _ from 'lodash';
import { ComponentConfList, ComponentPropsType } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { getNextSelectedId, insertNewComponent } from './utils';

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
    selectedId: string;
    componentList: ComponentInfoType[];
    copiedComponent: ComponentInfoType | null;
};

const INIT_STATE: ComponentStateType = {
    selectedId: '',
    componentList: [],
    copiedComponent: null,
};

export const componentsSlice = createSlice({
    name: 'components',
    initialState: INIT_STATE,
    reducers: {
        resetComponents: (state, action: PayloadAction<ComponentStateType>) => {
            state.copiedComponent = null;
            return action.payload;
        },

        changeSelectedId: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        },

        addComponent: (state, action: PayloadAction<ComponentInfoType>) => {
            const newComponent = action.payload;
            insertNewComponent(state, newComponent);
        },

        changeComponentProps: (state, action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>) => {
            const { componentList, selectedId } = state;
            const { newProps } = action.payload;

            const find = componentList.find(c => c.fe_id === selectedId);
            if (find) {
                Object.assign(find.props, newProps);
            }
        },

        removeSelectedComponent: (state, action: PayloadAction<undefined | { fe_id: string }>) => {
            const { componentList, selectedId } = state;
            const { fe_id = selectedId } = action.payload || {};

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

        toggleComponentLocked: (state, action: PayloadAction<undefined | { fe_id: string }>) => {
            const { componentList, selectedId } = state;
            const { fe_id = selectedId } = action.payload || {};
            const find = componentList.find(c => c.fe_id === fe_id);
            if (find) {
                find.isLocked = !find.isLocked;
            }
        },

        copyComponent: (state, action: PayloadAction<undefined | { fe_id: string }>) => {
            const { componentList, selectedId } = state;
            const { fe_id = selectedId } = action.payload || {};
            const find = componentList.find(c => c.fe_id === fe_id);
            if (find) {
                state.copiedComponent = _.cloneDeep(find);
            }
        },

        pasteCopiedComponent: state => {
            if (state.copiedComponent) {
                state.copiedComponent.fe_id = nanoid();
                insertNewComponent(state, state.copiedComponent);
                // state.copiedComponent = null;
            }
        },

        moveSelectedComponent: (state, action: PayloadAction<'up' | 'down'>) => {
            if (!action.payload) return;
            const direction = action.payload;
            const { selectedId, componentList } = state;
            const selectIndex = componentList.findIndex(c => c.fe_id === selectedId);

            const len = componentList.length - 1;
            if (selectIndex === -1) return;

            if (selectIndex === 0 && direction === 'up') return;
            if (selectIndex === len && direction === 'down') return;

            if (direction === 'up') {
                state.selectedId = componentList[selectIndex - 1].fe_id;
            } else if (direction === 'down') {
                state.selectedId = componentList[selectIndex + 1].fe_id;
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
    copyComponent,
    pasteCopiedComponent,
    moveSelectedComponent,
} = componentsSlice.actions;
