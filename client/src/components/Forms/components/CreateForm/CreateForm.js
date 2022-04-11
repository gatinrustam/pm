import React, { useEffect, useState, useCallback } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
// import cn from "classnames";
import { formElements } from "../../../../common/js/consts";
import EmptyData from "../../../common/EmptyData/EmptyData";
import Input from "../../../common/Input/Input";
import Button from '../../../common/Button/Button';
import Add from '../../../../img/icons/add.svg';
import Save from '../../../../img/icons/save.svg';
import Preview from '../../../../img/icons/preview.svg';
import Drag from '../../../../img/icons/draggable.svg';

import s from "./CreateForm.module.css";
import Icon from '../../../common/Icon/Icon';

export default function CreateForm(){
    const { t } = useTranslation();

    const initialList = [
        {id: '1', content: 'Title'},
        {id: '2', content: 'Text field'},
    ];

    const [data, setData] = useState({
        items: initialList
    });

    const [activeLabel, setActiveLabel] = useState(false);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if(!result.destination) {
           return;
        }

        const items = reorder(
            data.items,
            result.source.index,
            result.destination.index
        );

        setData({ items });

        console.log(result);
    };

    const handlerAdd = () => {
        setData({
            items: [
                ...data.items,
                {
                    id: `${Math.random()}`,
                    content: 'Текстовое поле',
                }
            ]
        });
    }

    const handlerPreview = () => {
        console.log('preview');
    }

    const handlerSave = () => {
        console.log('save');
    }

    const handlerClickLabel = (e) => {
        setActiveLabel(prev => !prev);

        console.log(e);
    }

    return (
        <div>
            <div className={s.control}>
                <Input
                    type="text"
                    placeholder="Form name"
                    size="small"
                />

                <Button
                    onClick={() => handlerAdd()}
                    text={t('dashboard.forms.menu.add')}
                    size="small"
                    icon={Add}
                />
                <Button
                    onClick={() => handlerPreview()}
                    text={t('dashboard.forms.menu.preview')}
                    size="small"
                    className={s.rightButton}
                    icon={Preview}
                />
                <Button
                    onClick={() => handlerSave()}
                    text={t('dashboard.forms.menu.save')}
                    size="small"
                    icon={Save}
                />
            </div>

            <div className={s.create}>
                <div
                    className={s.canvas}
                    onDragOver={onDragEnd}
                >
                    <div
                        className={s.createLabel}
                        draggable={true}
                    >
                        Draggable 01
                    </div>
                    <div
                        className={s.createLabel}
                        draggable={true}
                    >
                        Draggable 02
                    </div>
                </div>
                <div className={s.property}></div>
            </div>

            {/* <Droppable droppableId="droppable">{provided => (
                <div
                    className={s.create}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <span className={s.createSpan}>Form #123</span>
                    <div className={s.canvas}>
                        {data.items.length === 0
                        ? <EmptyData />
                        : data.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {provided => (
                                    <div onClick={(e) => handlerClickLabel(e)}>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            className={cn(
                                                s.createLabel,
                                                { [s.createLabelActive]: activeLabel }
                                            )}
                                        >
                                            <Icon icon={Drag} className={s.icon} />
                                            {item.content}
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>

                    <div className={s.property}>
                        {data.items.length === 0
                        ? <EmptyData
                            title="Выберите элемент"
                            desc="Чтобы редактировать свойства элемента, нужно его выделить"
                        />
                        : <h2 className={s.propertyTitle}>Props of element</h2>}
                    </div>
                </div>
            )}</Droppable> */}
        </div>
    );
};
