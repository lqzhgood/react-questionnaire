import { QuestionComponentType } from '@/const/question';
import QuestionInputConfType from './QuestionInput/';
import QuestionTitleConfType from './QuestionTitle/';
import QuestionParagraphConfType from './QuestionParagraph/';

// export type ComponentConfType = {
//     title: string;
//     type: QuestionComponentType;
//     Component: FC<ComponentPropsType>;
//     defaultProps: ComponentPropsType;
// };

export const componentConfGroup = [
    {
        groupName: '文本显示',
        components: [QuestionTitleConfType, QuestionParagraphConfType],
    },
    {
        groupName: '用户输入',
        components: [QuestionInputConfType],
    },
];

export const componentConfList = {
    [QuestionComponentType.Input]: QuestionInputConfType,
    [QuestionComponentType.Title]: QuestionTitleConfType,
    [QuestionComponentType.Paragraph]: QuestionParagraphConfType,
};

export type ComponentConfList = typeof componentConfList;
export type ComponentConfType = ComponentConfList[keyof ComponentConfList];
export type ComponentPropsType = ComponentConfType['defaultProps'];
