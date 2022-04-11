import React, { useState } from "react";
import cn from "classnames";
import { Area, AreaChart, Tooltip } from 'recharts';
import Icon from "../../../common/Icon/Icon";
import DropdownArrow from '../../../../img/icons/dropdown-arrow.svg';

import s from './Form.module.css';

export default function Form({ order, form }){
    const { id, name, created_at } = form;
    const [showDetails, setShowDetails] = useState();

    const data = [
        {name: 'Page A', uv: 0},
        {name: 'Page B', uv: 100},
        {name: 'Page C', uv: 400},
        {name: 'Page D', uv: 600},
        {name: 'Page E', uv: 400},
        {name: 'Page F', uv: 200},
        {name: 'Page G', uv: 400},
        {name: 'Page H', uv: 110},
    ];

    return (
        <div
            className={s.form}
            onClick={() => setShowDetails(prev => !prev)}
        >
            <div className={s.gist}>
                <div className={s.order}>
                    {order}
                </div>
                <div className={s.id}>
                    {`#${id}`}
                </div>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.rechart}>
                    <AreaChart
                        width={120}
                        height={30}
                        data={data}
                    >
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                <div className={s.createdAt}>
                    {created_at}
                </div>
                <div className={cn(s.arrow, { [s.arrowRotate]: showDetails })}>
                    <Icon icon={DropdownArrow} width="24px" height="24px" />
                </div>
            </div>
            {showDetails && (
                <div className={s.details}>
                    details
                </div>
            )}
        </div>
    );
};
