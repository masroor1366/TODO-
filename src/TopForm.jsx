import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';

const TopForm = ()=>{
    const [task,setTask]=useState("")
    const {taskItem,setTaskItem}=useContext(taskContext)

    const handelSetTask=(e)=>{
        setTask(e.target.value)
    }

    const handelAddTask=(e)=>{
        e.preventDefault()
        setTaskItem([...taskItem,{id:Math.random(),title:task,done:false}])
    }



    return(
        <>
            <h4 className="text-center text-info text_shdow">به پروژه todo خوش آمدید</h4>
            <form>
                <div className="form-group d-flex" >
                    <input type="text" className="form-control" value={task}
                    onChange={handelSetTask}/>
                    <button type="submit" className="btn btn-success me-1"
                    onClick={handelAddTask}>ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;