import { QuestionComponentType } from '@/const/question';
import { ComponentInfoType } from '@/store/componentsReducer';

export function getComponentList(): ComponentInfoType[] {
    return [
        {
            fe_id: '510681200501143155',
            type: QuestionComponentType.Info,
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: {
                title: '问卷信息',
                desc: '问卷描述...',
            },
        },
        {
            fe_id: '310118197708066683',
            type: QuestionComponentType.Title,
            title: '标题',
            isHidden: false,
            isLocked: false,
            props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false,
            },
        },
        {
            fe_id: '522327201207075255',
            type: QuestionComponentType.Input,
            title: '姓名',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的姓名',
                placeholder: '请输入姓名...',
            },
        },
        {
            fe_id: '640502200706266464',
            type: QuestionComponentType.Textarea,
            title: '简介',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的简介',
                placeholder: '请输入简介...\n第二行',
            },
        },
        {
            fe_id: '110108199003145161',
            type: QuestionComponentType.Paragraph,
            title: '说明段落',
            isHidden: false,
            isLocked: false,
            props: {
                text: '我是段落',
                isCenter: false,
            },
        },
        {
            fe_id: '220203201006307890',
            type: QuestionComponentType.Radio,
            title: '薪资范围',
            isHidden: false,
            isLocked: false,
            props: {
                title: '单选标题',
                isVertical: true,
                options: [
                    { value: 'v1', label: '< 10k' },
                    { value: 'v2', label: '10k-20k' },
                    { value: 'v3', label: '> 20k' },
                ],
                value: '',
            },
        },
        {
            fe_id: '140581201508292858',
            type: QuestionComponentType.Checkbox,
            title: '多选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '多选标题',
                isVertical: true,
                list: [
                    { value: 'v1', label: 'vue', checked: false },
                    { value: 'v2', label: 'react', checked: false },
                    { value: 'v3', label: 'angular', checked: false },
                ],
            },
        },
    ];
}
