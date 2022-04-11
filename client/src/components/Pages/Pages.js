import React from "react";
import { useTranslation } from 'react-i18next';
import EmptyData from "../common/EmptyData/EmptyData";
import Header from "../Header/Header";

import s from './Pages.module.css';

export default function Pages() {
    const { t } = useTranslation();

    const analytic = false;

    if (analytic) {
        return <EmptyData />;
    }

    return (
        <div className={s.analytics}>
            <Header title={t('dashboard.pages.menu.title')} />

            <div className={s.content}>
                dfghgf
            </div>
        </div>
    )
};
