import React, { useMemo } from 'react';

import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { STAT_COLORS } from '@/const';
import { formatPercent } from '@/utils';
import { QuestionRadioStatProps } from './interface';

type Props = { data: QuestionRadioStatProps[] };

const StatChart = ({ data = [] }: Props) => {
    const sum = useMemo(() => data.reduce((pre, cV) => pre + cV.count, 0), [data]);

    return (
        <div style={{ width: '400px', height: '400px', margin: 'auto' }}>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey='count'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                        label={o => `${o.name}: ${formatPercent(o.count / sum)}`}
                    >
                        {data.map((o, i) => (
                            <Cell key={i} fill={STAT_COLORS[i]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatChart;
