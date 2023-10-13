import { ComponentPropsType, componentConfList } from '@/components/QuestionComponents';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { changeComponentProps } from '@/store/componentsReducer';
import { Empty } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

const NoProp = () => {
    return <Empty description='未选中组件' />;
};

const ComponentProp = () => {
    const { selectedComponent, selectedId } = useGetComponentInfo();
    const dispatch = useDispatch();
    if (!selectedComponent) return <NoProp />;

    const { type, props } = selectedComponent;

    const componentConf = componentConfList[type];
    if (!componentConf) return <NoProp />;

    const { PropsForm } = componentConf;

    function changeProps(newProps: ComponentPropsType) {
        dispatch(changeComponentProps({ fe_id: selectedId, newProps }));
    }
    return <PropsForm {...props} onChange={changeProps} />;
};

export default ComponentProp;
