import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "../Header/Header";

import s from './Settings.module.css';

export default function Settings() {
    const { t } = useTranslation();

    return (
        <main className={s.settings}>
            <Header title={t('dashboard.settings.menu.title')} />

            <div className={s.content}>
                dfghgf
            </div>
        </main>
    )
};
