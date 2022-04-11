import React, { useState } from "react";
import cn from "classnames";

import s from "./Instruction.module.css";
import Icon from "../Icon/Icon";
import Close from "../../../img/icons/close.svg";

export default function Instruction({ instruction }){
    const [active, setActive] = useState('');
    const [close, setClose] = useState(true);

    const handleClick = () => {
        setActive('1');
    }

    return (
        close && <div className={s.instructions}>
            {instruction.map((i) => {
                return (
                    <div
                        key={i.id}
                        className={s.instruction}
                        onClick={() => handleClick()}
                    >
                        <h2 className={s.title}>
                            {i.title}
                        </h2>
                        <span className={s.desc}>
                            {i.desc}
                        </span>
                    </div>
                );
            })}

            {instruction.length > 1 && <div className={s.navigate}>
                {instruction.map((i) => {
                    return <div key={i.id} className={s.navigateDot}></div>
                })}
                <div className={cn(s.navigateDot, s.notActive)}></div>
                <div className={cn(s.navigateDot, s.notActive)}></div>
                <div className={cn(s.navigateDot, s.notActive)}></div>
            </div>}

            <Icon
                icon={Close}
                className={s.close}
                onClick={() => setClose(prev => !prev)}
                width="24px"
                height="24px"
            />
        </div>
    )
}