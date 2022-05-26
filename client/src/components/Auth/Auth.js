import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Path } from "../../common/js/consts";
import { useHttp } from '../../hooks/http.hook';
import Button from '../common/Button/Button';
import LanguageSelector from '../common/LanguageSelector/LanguageSelector';

import Input from '../common/Input/Input';
import ReactLogo from '../../img/logo.svg';
import SupportHeadphone from '../../img/icons/support-headphone.svg';

import s from './Auth.module.css';

export default function Auth({ type }){
    const { t } = useTranslation();
    const { loading, error, request, clearError } = useHttp();
    const [er, setEr] = useState(true);

    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        setEr(error);
        clearError();
    }, [error, clearError])

    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:5050/api/auth/register', 'POST', {...form});
            console.log('data ', data);
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:5050/api/auth/login', 'POST', {...form});
            console.log('data ', data);
        } catch (e) {}
    }

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const auth = (
        <div className={s.content}>
            <h2 className={s.title}>{t('auth.login.title')}</h2>

            <Input
                type="text"
                name="email"
                placeholder={t('auth.email.placeholder')}
                autocomplete="email"
                onChange={changeHandler}
                autofocus
                error={er}
            />
            <Input
                type="password"
                name="password"
                placeholder={t('auth.password.placeholder')}
                autocomplete="current-password"
                onChange={changeHandler}
                error={er}
            />

            <Button
                text={t('auth.button.login')}
                type="button"
                size="wide"
                onClick={loginHandler}
                loading={loading}
                disabled={loading}
            />
            <Button
                text={t('auth.button.signin')}
                size="wide"
                border="transparent"
                type="button"
                onClick={registerHandler}
                loading={loading}
                disabled={loading}
            />

            <div className={s.links}>
                <Link to={Path.recovery}>
                    {t('auth.forgot_password')}
                </Link>
            </div>
        </div>
    );

    const recovery = (
        <div className={s.content}>
            <h2 className={s.title}>{t('auth.recovery.title')}</h2>
            <form method="POST">
                <Input
                    type="text"
                    name="email"
                    placeholder={t('auth.email.placeholder')}
                    autocomplete="email"
                />
                <Button
                    text={t('auth.button.recovery')}
                    size="wide"
                    type="submit"
                />
            </form>

            <div className={s.links}>
                <Link to={Path.default}>
                    {t('auth.button.login')}
                </Link>
            </div>
        </div>
    );

    return (
        <div className={s.auth}>
            <Link to={Path.default} className={s.logo}>
                <img src={ReactLogo} alt="Pointmatic Logo" />
            </Link>

            {er && (
                <div className={s.error}>
                    {er}
                </div>
            )}

            {type === 'auth' ? auth : recovery}

            <div className={s.support}>
                <Button
                    to={Path.support}
                    text={t('header.menu.support')}
                    size="small"
                    border="transparent"
                    icon={SupportHeadphone}
                />
                <LanguageSelector />
            </div>

            <div className={s.credits}>
                <span>© 2022, Pointmatic. Made with love.</span>
            </div>
        </div>
    )
};
