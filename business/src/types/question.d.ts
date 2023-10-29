import { ComponentInfoType } from '@/store/componentsReducer/index';
import { PageInfoType } from '@/store/pageInfo';

export type QuestionData = {
    _id: string;
    title: string;
    isPublished: boolean;
    isStar: boolean;
    answerCount: number;
    createdAt: string;
    isDeleted: boolean;
};

export interface QuestionEditData extends PageInfoType {
    id: string;
    componentList: ComponentInfoType[];
}

export interface QuestionCommonPropsType {
    onChange?: (newProps: QuestionInputPropsType) => void;
    disabled?: boolean;
}
