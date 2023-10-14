import { QuestionComponentType } from '@/const/question';
import QuestionInputConfType from './QuestionInput/';
import QuestionTextareaConfType from './QuestionTextarea/';
import QuestionTitleConfType from './QuestionTitle/';
import QuestionParagraphConfType from './QuestionParagraph/';
import QuestionInfoConfType from './QuestionInfo/';
import QuestionRadioConfType from './QuestionRadio/';

// export type ComponentConfType = {
//     title: string;
//     type: QuestionComponentType;
//     Component: FC<ComponentPropsType>;
//     defaultProps: ComponentPropsType;
// };

export const componentConfGroup = [
    {
        groupName: '文本显示',
        components: [QuestionTitleConfType, QuestionParagraphConfType, QuestionInfoConfType],
    },
    {
        groupName: '用户输入',
        components: [QuestionInputConfType, QuestionTextareaConfType],
    },
    {
        groupName: '用户选择',
        components: [QuestionRadioConfType],
    },
];

export const componentConfList = {
    [QuestionComponentType.Input]: QuestionInputConfType,
    [QuestionComponentType.Textarea]: QuestionTextareaConfType,
    [QuestionComponentType.Title]: QuestionTitleConfType,
    [QuestionComponentType.Paragraph]: QuestionParagraphConfType,
    [QuestionComponentType.Info]: QuestionInfoConfType,
    [QuestionComponentType.Radio]: QuestionRadioConfType,
};

export type ComponentConfList = typeof componentConfList;
export type ComponentConfType = ComponentConfList[keyof ComponentConfList];
export type ComponentPropsType = ComponentConfType['defaultProps'];
