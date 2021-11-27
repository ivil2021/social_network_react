import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <div className={s.dialog}>
                    <img
                        src="https://avatarko.ru/img/kartinka/20/ptica_sova_oruzhie_Terminator_19253.jpg"
                        alt="something went wrong"
                    />
                </div>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
