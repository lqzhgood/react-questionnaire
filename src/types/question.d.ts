import { ComponentInfoType } from '@/store/componentsReducer/index';

export type QuestionData = {
    _id: string;
    title: string;
    isPublished: boolean;
    isStar: boolean;
    answerCount: number;
    createdAt: string;
    isDeleted: boolean;
};

export type QuestionEditData = {
    id: string;
    title: string;
    componentList: ComponentInfoType[];
};

export interface QuestionCommonPropsType {
    onChange?: (newProps: QuestionInputPropsType) => void;
}
