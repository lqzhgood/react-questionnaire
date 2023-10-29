import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { Empty, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import { StatComponentDetail, StatComponentType, getStatComponentService } from '@/services/stat';
import { componentConfList } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';
import CenterSpin from '@/components/CenterSpin';

type Props = {
    selectedComponentId: string;
    selectedComponentType: QuestionComponentType | undefined;
};

const { Title } = Typography;

const ChartStat = (props: Props) => {
    const { id: questionId = '' } = useParams();
    const { selectedComponentId, selectedComponentType } = props;

    const [stat, setStat] = useState<StatComponentDetail[]>([]);

    const { loading, run } = useRequest<StatComponentType, [questionId: string, selectedComponentId: string]>(
        (questionId, selectedComponentId) => getStatComponentService(questionId, selectedComponentId),
        {
            manual: true,
            onSuccess(data) {
                setStat(data.stat);
            },
        },
    );

    useEffect(() => {
        if (selectedComponentId) run(questionId, selectedComponentId);
    }, [questionId, selectedComponentId]);

    const ChartElm = () => {
        if (!selectedComponentId || !selectedComponentType) {
            return <Empty description='未选中组件' />;
        }

        const StatChart = componentConfList[selectedComponentType].StatChart;

        if (!StatChart) {
            return <Empty description='当前组件没有统计图表' />;
        }

        return loading ? <CenterSpin /> : <StatChart data={stat} />;
    };

    return (
        <div>
            <Title level={3}>图表统计</Title>
            <div>{ChartElm()}</div>
        </div>
    );
};

export default ChartStat;
