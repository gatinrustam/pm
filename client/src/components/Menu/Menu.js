import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Path } from "../../common/js/consts";

import ReactLogo from '../../img/logo.svg';
import s from './Menu.module.css';

import Home from '../../img/icons/home.svg';
import FormBuilder from '../../img/icons/form-builder.svg';
import Pages from '../../img/icons/pages.svg';
import Analytics from '../../img/icons/analytics.svg';
import Settings from '../../img/icons/settings.svg';
import Button from '../../img/icons/button.svg';


export default function Menu(){
    const { t } = useTranslation();

    return (
        <nav className={s.menu}>
            <Link to="/" className={s.menuLogo}>
                <img src={ReactLogo} alt="React Logo" />
            </Link>

            <ul className={s.menuList}>
                <li className={s.menuItem}>
                    <Link to={Path.default} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.main.menu.title')}</span>
                        <img src={Home} alt="" />
                    </Link>
                </li>
                <li className={s.menuItem}>
                    <Link to={Path.forms} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.forms.menu.title')}</span>
                        <img src={FormBuilder} alt="" />
                    </Link>
                </li>
                <li className={s.menuItem}>
                    <Link to={Path.pages} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.pages.menu.title')}</span>
                        <img src={Pages} alt="" />
                    </Link>
                </li>
                <li className={s.menuItem}>
                    <Link to={Path.buttons} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.buttons.menu.title')}</span>
                        <img src={Button} alt="" />
                    </Link>
                </li>
                <li className={s.menuItem}>
                    <Link to={Path.analytics} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.analytics.menu.title')}</span>
                        <img src={Analytics} alt="" />
                    </Link>
                </li>
                <li className={s.menuItem}>
                    <Link to={Path.settings} className={s.menuLink}>
                        <span className={s.itemTitle}>{t('dashboard.settings.menu.title')}</span>
                        <img src={Settings} alt="" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
