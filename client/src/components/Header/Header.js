import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button/Button';
import LanguageSelector from '../common/LanguageSelector/LanguageSelector';

import SupportHeadphone from '../../img/icons/support-headphone.svg';

import s from './Header.module.css';
import { Path } from '../../common/js/consts';

export default function Header({ title, controls }){
    const { t } = useTranslation();
    return (
        <header className={s.header}>
            <div className={s.headerIn}>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.controls}>
                    {controls}
                </div>
                <div className={s.headerRelations}>
                    <Button
                        to={Path.support}
                        text={t('header.menu.support')}
                        size="small"
                        border="outline"
                        icon={SupportHeadphone}
                    />
                    <LanguageSelector />
                </div>
            </div>
        </header>
    )
};
