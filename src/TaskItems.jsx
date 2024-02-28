import React, { useContext,memo } from 'react';
import { taskContext } from './taskContext';


const TaskItems = ()=>{

    const {taskItem,setTaskItem}=useContext(taskContext);

    const handelDoneTask=(id)=>{
        const index=taskItem.findIndex(t=> t.id==id);
        let newTaskItem=[...taskItem];
        newTaskItem[index].done=!newTaskItem[index].done;
        setTaskItem(newTaskItem)
    }

    const handelDeleteTask=(id)=>{
        let newItemTask=taskItem.filter(t=>t.id!=id);
        setTaskItem(newItemTask);

    }
    
    if (taskItem.length){
            return (
                <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItem.map(t=>
                        <li className={
                            `list-group-item d-flex justify-content-between 
                            ${t.done? "list-group-item-success":""}`
                        }>
                            {t.title}
                            <span>
                            {
                                    <i  
                                        className={`me-3 pointer 
                                            ${t.done?"fas fa-times text-warning" 
                                            :"fas fa-check text-success" }
                                            transition_200 text_hover_shadow`
                                        }
                                        onClick={()=>handelDoneTask(t.id)}
                                    ></i>
                            }             
                                <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                                    onClick={()=>handelDeleteTask(t.id)}
                                ></i>
                            </span>
                        </li>
                    )
                }
                </ul>    
            )}else{
               return <h4 className='text-center text-danger mt-4 '>هیچ کاری ثبت نشده است..</h4>


            }
}

export default memo(TaskItems);// pure component در react