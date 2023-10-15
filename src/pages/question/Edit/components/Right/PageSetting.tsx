import React, { useEffect } from 'react';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { updatePageInfo } from '@/store/pageInfo';

const PageSetting = () => {
    const { pageInfo } = useGetQuestionPageInfo();
    const dispatch = useDispatch();
    // const { title, desc, js, css } = pageInfo;

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(pageInfo);
    }, [pageInfo]);

    return (
        <Form
            layout='vertical'
            initialValues={pageInfo}
            onValuesChange={(_, allValues) => {
                dispatch(updatePageInfo(allValues));
            }}
            form={form}
        >
            <Form.Item name='title' label='页面标题' rules={[{ required: true, message: '请输入页面标题' }]}>
                <Input placeholder='请输入页面标题' />
            </Form.Item>
            <Form.Item name='desc' label='页面描述'>
                <Input placeholder='请输入页面描述' />
            </Form.Item>
            <Form.Item name='js' label='页面代码'>
                <Input.TextArea placeholder='请输入 JS 代码' />
            </Form.Item>
            <Form.Item name='css' label='页面样式'>
                <Input.TextArea placeholder='请输入 CSS 代码' />
            </Form.Item>
        </Form>
    );
};

export default PageSetting;
