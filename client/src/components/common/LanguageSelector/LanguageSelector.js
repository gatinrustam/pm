import React, {useState} from "react";
import { useTranslation } from "react-i18next";

import DropdownArrow from '../../../img/icons/dropdown-arrow.svg';
import './LanguageSelector.css';

const AVAILABLE_LANGUAGES = [
    {
        "locale": "en",
        "name": "English"
    },
    {
        "locale": "ru",
        "name": "Русский"
    },
    // {
    //     "locale": "de",
    //     "name": "Deutsch"
    // },
    // {
    //     "locale": "be",
    //     "name": "Беларуская"
    // },
    // {
    //     "locale": "ua",
    //     "name": "Українська"
    // },
]

export default function LanguageSelector() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.dataset.locale);
        setCurrentLang(event.target.dataset.locale);
        setActive(prev => !prev);
    };

    const [active, setActive] = useState(false);
    const [currentLang, setCurrentLang] = useState('En');

    const onClickHandler = () => {
        setActive(prev => !prev);
    }

    return (
        <div className={`language ${active ? 'language--active' : ''}`}>
            <div
                className="language__button language__small"
                onClick={onClickHandler}
            >
                {currentLang}
                <img src={DropdownArrow} className="language__icon" />
            </div>
            <div className="language__body">
                <ul>
                    {AVAILABLE_LANGUAGES.map(lang => {
                        return (
                            <li
                                key={lang.locale}
                                onClick={changeLanguage}
                                data-locale={lang.locale}
                            >
                                {lang.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
