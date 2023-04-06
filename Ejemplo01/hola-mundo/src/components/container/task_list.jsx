import React from 'react';
import { Task } from '../../models/task.class';
import { NIVEL } from '../../models/nivel.enum';
import TaskComponent from '../pure/task';

//  TODO: Contiene la logica compleja que se le pasara al hijo
const TaskListComponent = () => {
  
  // * Instancia
  const defaultTask = new Task('Ejemplo', 'Esto un ejemplo', true, NIVEL.NORMAL);

  const changeState = (id) => {
    console.log("TODO: Falta cambiar el estado de una tarea")
  }

  return (
    <div>
      <h1> Tu Tarea: </h1>
      {/* TODO: Aplicar for o map para renderizar la lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};


export default TaskListComponent;
