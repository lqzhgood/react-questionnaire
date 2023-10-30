import { QuestionCommonPropsType } from '@/types/question';

export type QuestionDefaultProps<T> = Required<Omit<T, keyof QuestionCommonPropsType>>;
