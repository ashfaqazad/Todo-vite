import 'bootstrap-icons/font/bootstrap-icons.css';
// import './styles.css';  // Assuming you have a custom CSS file to extend Bootstrap
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import { addTask, deleteTask } from '../Store';


export const Todo = () => {
    const [task, setTask] =useState("")
    const tasks = useSelector((state) => state.task);
    // console.log("React state", tasks )
    const dispatch = useDispatch();


// handleSubmit form
    const handleSubmit = (e) =>{
        e.preventDefault()
         dispatch(addTask(task))
         return setTask("")
    }

// handleTaskDelete
const handleTaskDelete = (id) =>{
    return dispatch(deleteTask(id))
}
    
    return (
        <div className='container'>
            <div className='todo-app p-4 border rounded'>
                <h1 className='mb-3'>
                    <i className='bi bi-pen-to-square'></i> To-do List:
                </h1>
                <div className='row'>
                    <form className='d-flex' onSubmit={handleSubmit}>
                        <input type="text" className='form-control me-2' placeholder="Add your task here" 
                        value={task} onChange={(e) => setTask(e.target.value)}
                        />
                        <button type='submit' className='btn btn-primary'>Add Task</button>
                    </form>
                </div>



                <ul id="list-container" className="mt-3 list-unstyled ps-0">
                    {tasks.map((curTask, index) => {
                        return (
                            <li
                                key={index}
                                className="task-item"
                            >
                                <p style={{ margin: 0 }}>
                                    {index}: {curTask}
                                </p>
                                <div>
                                    <MdDeleteForever
                                        className="icon-style delete-icon"
                                        onClick={() => handleTaskDelete(index)}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>



                {/* <ul id="list-container" className="mt-3 list-unstyled ps-0">
                    {tasks.map((curTask, index) => {
                        return (
                            <li
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <p style={{ margin: 0 }}>
                                    {index}: {curTask}
                                </p>
                                <div>
                                    <MdDeleteForever
                                        className="icon-style"
                                        onClick={() => handleTaskDelete(index)}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul> */}



            </div>
        </div>
    )
}








// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { useSelector } from 'react-redux';

// export const Todo = () => {
//     const tasks = useSelector((state) => state.task) || []; // Default to empty array

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted");
//         // Add your task addition logic here
//     };

//     return (
//         <div className='container'>
//             <div className='todo-app p-4 border rounded'>
//                 <h1 className='mb-3'>
//                     <i className='bi bi-pen-to-square'></i> To-do List:
//                 </h1>
//                 <div className='row'>
//                     <form className='d-flex' onSubmit={handleSubmit}>
//                         <input type="text" className='form-control me-2' placeholder="Add your task here" />
//                         <button type='submit' className='btn btn-primary'>Add Task</button>
//                     </form>
//                 </div>
//                 <ul id='list-container' className='mt-3'>
//                     {
//                         tasks.map((curTask, index) => (
//                             <li key={index}>
//                                 <p>
//                                     {index}: {curTask}
//                                 </p>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     );
// };
