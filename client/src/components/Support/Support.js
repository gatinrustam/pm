import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../common/js/consts";
import { useTranslation } from 'react-i18next';

import s from './Support.module.css';
import LogoGray from '../../img/logo-gray.svg';

export default function Support() {
    const { t } = useTranslation();

    return (
        <div className={s.support}>
            <Link to={Path.default} className={s.logo}>
                <img src={LogoGray} alt="Pointmatic Logo" />
            </Link>

            <h1 className={s.title}>{t('header.menu.support')}</h1>

            <div className={s.content}>
                dfghgf
            </div>
        </div>
    )
};
