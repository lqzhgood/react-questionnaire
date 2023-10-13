import { QuestionComponentType } from '@/const/question';
import QuestionInputConfType from './QuestionInput/';
import QuestionTitleConfType from './QuestionTitle';

// export type ComponentConfType = {
//     title: string;
//     type: QuestionComponentType;
//     Component: FC<ComponentPropsType>;
//     defaultProps: ComponentPropsType;
// };

export const componentConfList = {
    [QuestionComponentType.Input]: QuestionInputConfType,
    [QuestionComponentType.Title]: QuestionTitleConfType,
};

export type ComponentConfList = typeof componentConfList;
export type ComponentConfType = ComponentConfList[keyof ComponentConfList];
export type ComponentPropsType = ComponentConfType['defaultProps'];
