import React, { useState } from "react";
import cn from "classnames";
import Icon from '../../../common/Icon/Icon';

import s from "./Element.module.css";
import Drag from '../../../../img/icons/draggable.svg';

export default Element = React.forwardRef((props, ref) => {
    const [activeLabel, setActiveLabel] = useState(false);

    const handlerClickLabel = (e) => {
        setActiveLabel(prev => !prev);
    }

    return (
        <div
            onClick={(e) => handlerClickLabel(e)}
            className={s.element}
        >
            <div
                ref={ref}
                className={cn(
                    s.createLabel,
                    { [s.createLabelActive]: activeLabel }
                )}
                {...props.drag}
                {...props.draggable}
            >
                <Icon icon={Drag} className={s.icon} />
                {props.content}
            </div>
            {props.placeholder}
        </div>
    )
});