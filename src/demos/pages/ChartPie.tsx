import React, { useMemo } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';

import { STAT_COLORS } from '@/const';
import { formatPercent } from '@/utils';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const ChartPie = () => {
    const sum = useMemo(() => data01.reduce((pre, cV) => pre + cV.value, 0), [data01]);

    return (
        <div style={{ width: '500px', height: '500px', margin: 'auto' }}>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                    <Pie
                        data={data01}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                        label={o => `${o.name}: ${o.value} ${formatPercent(o.value / sum)}`}
                    >
                        {data01.map((o, i) => (
                            <Cell key={i} fill={STAT_COLORS[i]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartPie;
