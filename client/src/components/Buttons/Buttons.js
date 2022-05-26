import React from "react";
import { useTranslation } from 'react-i18next';
import EmptyData from "../common/EmptyData/EmptyData";
import Header from "../Header/Header";

import s from './Buttons.module.css';

export default function Buttons() {
    const { t } = useTranslation();

    const analytic = false;

    if (analytic) {
        return <EmptyData />;
    }

    return (
        <main className={s.analytics}>
            <Header title={t('dashboard.buttons.menu.title')} />

            <div className={s.content}>
                dfghgf
            </div>
        </main>
    )
};
