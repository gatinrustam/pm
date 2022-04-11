import React from "react";
import { useTranslation } from 'react-i18next';

import s from './EmptyData.module.css';

export default function EmptyData({ title, desc }) {
    const { t } = useTranslation();

    return (
        <div className={s.empty}>
            <span className={s.title}>
                {title ? title : t('dashboard.empty.title')}
            </span>
            <span className={s.desc}>
                {desc ? desc : t('dashboard.empty.desc')}
            </span>
        </div>
    );
};
