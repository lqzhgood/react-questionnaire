import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { QuestionCheckboxStatProps } from './interface';

type Props = { data: QuestionCheckboxStatProps[] };

const StatChart = ({ data = [] }: Props) => {
    return (
        <div style={{ width: '400px', height: '300px', margin: 'auto' }}>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width={150} height={40} data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='count' fill='#8884d8' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatChart;
