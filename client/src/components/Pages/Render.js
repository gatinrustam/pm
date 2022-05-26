import React from "react";
import cn from 'classnames';

export default function Render({ elements }){
    return elements.map(element => {
        if (element.id === 'header') {
            return (
                <div className={cn('pm-header', element.class)}>
                    {element.content}
                </div>
            );
        }

        if (element.id === 'avatar') {
            return (
                <div className={cn('pm-avatar', element.class)}>
                    <div className="pm-avatar__image">{element.image}</div>
                    {element.content}
                </div>
            );
        }

        if (element.id === 'block') {
            return (
                <div className={cn('pm-block', element.class)}>
                    {element.content}
                </div>
            );
        }

        if (element.id === 'button') {
            if (element.type === 'link') {
                return (
                    <div className={cn('pm-button-wrap', element.class)}>
                        <a href={element.url} className="pm-button">{element.name}</a>
                    </div>
                );
            } else {
                return (
                    <div className={cn('pm-button-wrap', element.class)}>
                        <button className="pm-button">{element.name}</button>
                    </div>
                );
            }
        }

        if (element.id === 'footer') {
            return (
                <div className={cn('pm-footer', element.class)}>
                    {element.content}
                </div>
            );
        }
    });
};