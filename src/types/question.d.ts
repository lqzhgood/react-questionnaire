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
    componentList: QuestionComponentData[];
};

export type QuestionComponentData = {
    id: string;
    type: QuestionComponentType;
    title: string;
    props: Record<string, any>;
};
