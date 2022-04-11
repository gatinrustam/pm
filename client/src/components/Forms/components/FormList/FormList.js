import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

import s from "./FormList.module.css";

export default function FormList() {
    const { t } = useTranslation();

    const formList = [
        {
            id: '001',
            name: 'Form 01',
            created_at: '2018-09-18T16:39:22.184Z',
            updated_at: "2018-09-18T16:39:22.184Z"
        },
        {
            id: '002',
            name: 'Form 02',
            created_at: '2018-09-18T16:39:22.184Z',
            updated_at: "2018-09-18T16:39:22.184Z"
        },
        {
            id: '003',
            name: 'Form 03',
            created_at: '2018-09-18T16:39:22.184Z',
            updated_at: "2018-09-18T16:39:22.184Z"
        },
        {
            id: '004',
            name: 'Form 04',
            created_at: '2018-09-18T16:39:22.184Z',
            updated_at: "2018-09-18T16:39:22.184Z"
        },
        {
            id: '005',
            name: 'Form 05',
            created_at: '2018-09-18T16:39:22.184Z',
            updated_at: "2018-09-18T16:39:22.184Z"
        },
    ];

    const [createForm, setCreateForm] = useState(false);

    let navigate = useNavigate();

    const handleClick = () => {
        setCreateForm(prev => !prev);
        console.log(createForm);
        navigate(`/forms/3434`);
    }

    return (
        <>
            <div className={s.formList}>
                {formList && formList.map((form, i) => <Form order={i+1} form={form} key={form.id} />)}
            </div>
        </>
    );
};
