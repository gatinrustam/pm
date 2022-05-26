import React from "react";
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Header from "../Header/Header";
import Instruction from "../common/Instruction/Instruction";

import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FormList from '../Forms/components/FormList/FormList';

import s from './Dashboard.module.css';

export default function Dashboard() {
    const { t } = useTranslation();

    const instructions = [
        {
            id: '01',
            title: t('dashboard.main.note.title'),
            desc: t('dashboard.main.note.desc'),
        },
    ];

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 780,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 500,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 981,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 1500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 100,
        },
    ];

    return (
        <main className={s.main}>
            <Header title={t('dashboard.main.menu.title')} />

            <div className={s.row}>
              <div className={s.column}>
                {/* <h2>AreaResponsiveContainer</h2> */}
                <div style={{ width: '100%', height: '100px' }}>
                  <ResponsiveContainer>
                    <AreaChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="transparent" fill="#4caf50" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className={cn(s.dataTitle)}>
                  912 131 views
                </div>
              </div>

              <div className={s.column}>
                {/* <h2>AreaResponsiveContainer</h2> */}
                <div style={{ width: '100%', height: '100px' }}>
                <ResponsiveContainer>
                  <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="pv" stroke="transparent" fill="#673ab7" />
                  </AreaChart>
                </ResponsiveContainer>
                </div>

                <div className={cn(s.dataTitle)}>
                  2 131 reports
                </div>
              </div>

              <div className={s.column}>
                <div style={{ width: '100%', height: '100px' }}>
                  <ResponsiveContainer>
                    <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="amt" stroke="transparent" fill="#f44336" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className={cn(s.dataTitle)}>
                  931 TB
                </div>
              </div>
            </div>

            <div className={s.content}>
                <Instruction instruction={instructions} />

                <div className={s.row}>
                  <div className={s.column}>
                    <h2>New users</h2>
                    <FormList />
                  </div>
                  <div className={s.column}>
                    <h2>Recent data</h2>
                  </div>
                </div>
            </div>
        </main>
    )
};
