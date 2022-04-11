import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import s from './Button.module.css';

export default function Button({text, border, size, icon, to, onClick, className, loading, disabled, error, color}) {
    const loadingSpin = (
        <div className={s.loading}><div></div><div></div><div></div><div></div></div>
    );

    const button = (
        <button
            className={cn(
                s.button,
                s.default,
                s[size],
                s[color],
                s[border],
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            <img src={icon} className={s.image} alt="" />
        </button>
    );

    return (
        <div className={cn(s.buttonWrap, className)}>
            {to ? (
                <Link
                    to={to}
                    className={cn(
                        s.button,
                        s.default,
                        s[size],
                        s[color],
                        s[border]
                    )}
                >
                    {text}
                    {icon && <img src={icon} className={s.image} alt="" />}
                </Link>
            ) : button}

            {loading && loadingSpin}
        </div>
    )
}
