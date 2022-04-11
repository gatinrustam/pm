import React, { useState } from 'react';

import DropdownArrow from '../../../img/icons/dropdown-arrow.svg';
import './Dropdown.css';

export default function Dropdown({text}){
    const [active, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(prev => !prev);
    }

    return (
        <div className={`dropdown ${active ? 'dropdown--active' : ''}`}>
            <div
                className="dropdown__button dropdown__small"
                onClick={onClickHandler}
            >
                {text}

                <img src={DropdownArrow} className="dropdown__icon" />
            </div>
            <div className="dropdown__body">
                <ul>
                    <li>English</li>
                    <li>Deutsch</li>
                    <li>Беларуская</li>
                    <li>Українська</li>
                </ul>
            </div>
        </div>
    )
}
