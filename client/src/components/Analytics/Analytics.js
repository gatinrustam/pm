import React from "react";
import { useTranslation } from 'react-i18next';
import EmptyData from "../common/EmptyData/EmptyData";
import Header from "../Header/Header";

import s from './Analytics.module.css';

export default function Analytics() {
    const { t } = useTranslation();

    const analytic = false;

    if (analytic) {
        return <EmptyData />;
    }

    return (
        <div className={s.analytics}>
            <Header title={t('dashboard.analytics.menu.title')} />

            <div className={s.content}>
                dfghgf
            </div>
        </div>
    )
};
