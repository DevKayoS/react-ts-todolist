import * as React from 'react';

// interface
import { ITask } from '../interfaces/task';
// css
import style from './TaskList.module.css';

interface IAppProps {
  taskList: ITask[];
  handleRemove(id: number): void
  handleEdit(task: ITask): void;
}

const TaskList = ({taskList, handleRemove, handleEdit}:IAppProps) => {
  return(
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={style.list} key={task.id}>
            <div className={style.taskList}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={style.config}>
              <i className="bi bi-pencil" onClick={() => {handleEdit(task)}}></i>
              <i className='bi bi-trash' onClick={() => {handleRemove(task.id)}}></i>
            </div>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas!!</p>
      )}
    </>
  ) ;
};

export default TaskList;
