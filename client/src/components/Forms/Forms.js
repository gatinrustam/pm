import React from "react";
import { useTranslation } from 'react-i18next';
import { Outlet } from "react-router-dom";

import { Path } from '../../common/js/consts.js';
import Button from "../common/Button/Button";
import EmptyData from '../common/EmptyData/EmptyData';
import Header from "../Header/Header";
import Instruction from "../common/Instruction/Instruction";

import s from './Forms.module.css';
import CreateForm from "./components/CreateForm/CreateForm.js";

export default function Forms() {
    const { t } = useTranslation();

    const form = false;

    if (form) {
        return <EmptyData />;
    }

    const instructions = [
        {
            id: '01',
            title: t('dashboard.forms.note.title'),
            desc: t('dashboard.forms.note.desc'),
        },
    ];

    const controls = (
        <div className={s.controls}>
            <Button
                text={t('dashboard.forms.menu.create')}
                size="small"
                to={Path.formCreate}
            />
            <Button
                text={t('dashboard.forms.menu.all_forms')}
                size="small"
                border="outline"
                to={Path.formAll}
            />
        </div>
    )

    return (
        <main className={s.forms}>
            <Header
                title={t('dashboard.forms.menu.title')}
                controls={controls}
            />

            <div className={s.content}>
                <Instruction instruction={instructions} />
                <CreateForm />
                <Outlet />
            </div>
        </main>
    )
};
