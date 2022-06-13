import React, { useEffect, useState } from 'react';
import style from './Tasks.scss'

import {randomColor} from 'randomcolor';
import Draggable from 'react-draggable';

import iconDelete from '../../images/icon-delete.png'


function Tasks() {

    const [taskTitle, setTaskTitle] = useState('')
    const [tasks, setTasks] = useState(
      JSON.parse(localStorage.getItem('tasks')) || []
    )
    
    useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
  
    // СМЕНА ТЕМЫ 
    
  
    // ДОБАВЛЕНИЕ ЗАДАЧИ
    const addNewTask = () => {
      if (taskTitle !== '') {
        const task = {
          title: taskTitle,
          id: Date.now(),
          position: {x: 700, y: 200},
          color: randomColor(),
        }
        setTasks([...tasks, task]) 
        setTaskTitle('')
      }
    }
    // ДОБАВЛЕНИЕ ЗАДАЧИ ПО НАЖАТИЮ ENTER
    const onKeyPress = (e) => {
      if (e.keyCode === 13) {
        addNewTask();
      }
    }
  
    // УДАЛЕНИЕ ЗАДАЧИ
    const removeTask = (id) => {
      setTasks(tasks.filter((p) => p.id !== id))
    }
  
    // ОБНОВЛЕНИЕ ПОЗИЦИИ
    const newPosition = (data, index) => {
      let newArray = [...tasks]
      newArray[index].position={
        x: data.x,
        y: data.y,
      }
      setTasks(newArray)
    }

    return (  
        <div className='tasks-body'>
            <div className="creator">
              <input 
                  value={taskTitle}
                  onChange={(e)=>{setTaskTitle(e.target.value)}}
                  type="text" 
                  className="creator__input"
                  placeholder='Введите текст задачи...'
                  onKeyDown={onKeyPress}
              />
              <button onClick={addNewTask} className="creater__button">Добавить</button>
            </div>
            {tasks.map((item, index)=>{
                return(
                <Draggable
                    key={`task ${item.id}`}
                    defaultPosition={item.position}  
                    onStop={(e, data)=> {newPosition(data, index)}}
                >
                    <div className="task" style={{backgroundColor: item.color}}>
                        <div className="task__text">{item.title}</div>
                        <button onClick={() => removeTask(item.id)} className="task__button"><img src={iconDelete} alt="Кнопка удаления" /></button>
                    </div>
                </Draggable>
                )
            })}
        </div>      
    ); 
}

export default Tasks
