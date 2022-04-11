import React from "react";
import cn from "classnames";

import s from './Input.module.css';

export default function Input({ type, name, placeholder, autocomplete, disabled, onClick, onChange, value, autofocus, error, size }){
    return (
        <div className={s.inputWrap}>
            <input
                className={cn(
                    s.input,
                    s[size],
                    {[s.error]: error}
                )}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autocomplete}
                onClick={onClick}
                onChange={onChange}
                value={value}
                disabled={disabled}
                autoFocus={autofocus}
            />
        </div>
    );
};
