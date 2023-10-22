import { QuestionComponentType } from '@/const/question';
import QuestionInputConfType from './QuestionInput/';
import QuestionTextareaConfType from './QuestionTextarea/';
import QuestionTitleConfType from './QuestionTitle/';
import QuestionParagraphConfType from './QuestionParagraph/';
import QuestionInfoConfType from './QuestionInfo/';
import QuestionRadioConfType from './QuestionRadio/';
import QuestionCheckboxConfType from './QuestionCheckbox/';

export enum GroupType {
    Text = '文本显示',
    Input = '用户输入',
    Select = '用户选择',
}

export const componentConfGroup: { groupName: GroupType; components: ComponentConfType[] }[] = [
    {
        groupName: GroupType.Text,
        components: [QuestionTitleConfType, QuestionParagraphConfType, QuestionInfoConfType],
    },
    {
        groupName: GroupType.Input,
        components: [QuestionInputConfType, QuestionTextareaConfType],
    },
    {
        groupName: GroupType.Select,
        components: [QuestionRadioConfType, QuestionCheckboxConfType],
    },
];

export const componentConfList = {
    [QuestionComponentType.Input]: QuestionInputConfType,
    [QuestionComponentType.Textarea]: QuestionTextareaConfType,
    [QuestionComponentType.Title]: QuestionTitleConfType,
    [QuestionComponentType.Paragraph]: QuestionParagraphConfType,
    [QuestionComponentType.Info]: QuestionInfoConfType,
    [QuestionComponentType.Radio]: QuestionRadioConfType,
    [QuestionComponentType.Checkbox]: QuestionCheckboxConfType,
};

export type ComponentConfList = typeof componentConfList;
export type ComponentConfType = ComponentConfList[keyof ComponentConfList];
export type ComponentPropsType = ComponentConfType['defaultProps'];
