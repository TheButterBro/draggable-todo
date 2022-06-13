import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import style from './Helper.scss'

import arrow_dashed from '../../images/arrow_dashed.png'
import arrow_straight from '../../images/arrow_straight.png'
import grab from '../../images/grab.png'
import grabed from '../../images/grabed.png'

function Helper() {

    const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checked')) || false)
    
    useEffect(()=>{
        localStorage.setItem('checked', JSON.stringify(checked))
    }, [checked])
    
    const switchHelper = () => {
        setChecked(!checked)
    }

    return (  
        <div className='helper-body'>
            <CSSTransition
                in={checked}
                timeout={500}
                classNames="helper-wrapper"
                mountOnEnter
                unmountOnExit
            >
                <div className="helper">
                    <div className="helper-input">
                        <div className='helper-input__input'>
                            <img src={arrow_dashed} alt="" />
                            <span>1</span>
                            <p>Здесь вы можете придумать новую задачу</p>
                        </div>
                        <div className='helper-input__button'>
                            <img src={arrow_straight} alt="" />
                            <span>2</span>
                            <p>И создать её</p>
                        </div>
                    </div>
                    <div className="hepler-task">
                        <div className="helper-task__place">
                            <span>3</span>
                            <p>Здесь появляются созданные задачи</p>
                            <img src={arrow_dashed} alt="" />
                        </div>
                        <div className="helper-task__grabing">
                            <img src={grab} alt="" />
                            <p>Вы можете схватить их</p>
                        </div>
                        <div className="helper-task__grabbed">
                            <img src={grabed} alt="" />
                            <p>И перенести в любое место</p>
                        </div>
                    </div>
                    <div className="helper-toggle">
                        <span>4</span>
                        <p>Этот переключатель скрывает подсказки</p>
                        <img src={arrow_straight} alt="" />
                    </div>
                </div>
            </CSSTransition>  
            <div className="toggler">
                <label className="switch">
                    <input type="checkbox" defaultChecked={checked} onChange={switchHelper}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
     );
}

export default Helper;