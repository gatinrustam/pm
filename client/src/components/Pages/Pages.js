import React, { useState } from "react";
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import EmptyData from "../common/EmptyData/EmptyData";
import Header from "../Header/Header";
import Render from './Render';

import s from './Pages.module.css';

export default function Pages() {
    const { t } = useTranslation();

    const [elements, setElements] = useState([
        {
            id: 'header',
            content: 'Vivamus auctor purus',
            class: '',
        },
        // {
        //     id: 'avatar',
        //     content: 'Vivamus',
        //     class: '',
        // },
        {
            id: 'block',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor purus sed viverra rhoncus.',
            class: 'blabla',
        },
        // {
        //     id: 'button',
        //     name: 'Lorem ipsum',
        //     class: 'blabla',
        // },
        {
            id: 'button',
            name: 'Dolor sit amet',
            type: 'link',
            icon: 'telegram',
            class: 'blabla',
            url: '#',
        },
        {
            id: 'footer',
            content: 'Made on Pointmatic',
            class: 'blabla',
        },
    ]);

    const analytic = false;

    if (analytic) {
        return <EmptyData />;
    }


    // useEffect(() => {
        // setElements([...elements, elementData]);
    // }, [elements]);

    return (
        <main className={s.analytics}>
            <Header title={t('dashboard.pages.menu.title')} />

            <div className={cn(s.content, s.columns)}>
                <div className={s.mailTools}>
                    <div className={s.shortLink}>
                        <input className={s.shortLinkInput} value="pntmc.io/qz3fhDw" />
                    </div>
                    <div className={s.save}>

                    </div>
                </div>
                <div className={s.page}>
                    <div className={s.toolbarLeft}>
                        <ul className={s.toolbarMenu}>
                            <li>Базовые настройки</li>
                            <li>Дизайн</li>
                            <li>Блоки</li>
                        </ul>
                        {/* <button onClick={[...elements, {id: 'button',name: 'Lorem ipsum',class: 'blabla'}]}>Button</button> */}
                    </div>

                    <div className={s.phone}>
                        <div className={s.fringe}></div>
                        <div className={s.phoneContent}>
                            <Render elements={elements} />
                        </div>
                    </div>

                    {/* <div className={s.toolbarRight}>xxx</div> */}
                </div>
                {/* <div className={s.tools}>

                </div> */}
            </div>
        </main>
    )
};
