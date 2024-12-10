// store.js
import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: [],
    isLoading: false
};


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                task: [...state.task, action.payload],
            };
        }

        case DELETE_TASK: {
            const updatedTask = state.task.filter((_, index) => index !== action.payload);
            return {
                ...state,
                task: updatedTask,
            };
        }

        default:
            return state;
    }
};


// Create and export the Redux store
export const store = createStore(taskReducer);
console.log(store)
// export default store;

console.log("initial State: ", store.getState());

export const addTask = (data) =>{
    return {type: ADD_TASK, payload: data }
 }
 
export const deleteTask = (id) =>{
     return {type: DELETE_TASK, payload: id }
 
 }

// store.dispatch({type: ADD_TASK, payload: "Ashfaque Ahmed Bhutto"})
// console.log("updated State: ", store.getState());

// store.dispatch(addTask())
// store.dispatch(addTask())
// store.dispatch(addTask())

// console.log("updated State: ", store.getState());

// store.dispatch({type: ADD_TASK, payload: "I am MERN stack Developer"})
// console.log("updated State: ", store.getState());

// store.dispatch(addTask())
// console.log("updated State: ", store.getState());

// store.dispatch(addTask())
// console.log("updated State: ", store.getState());


// // store.dispatch({ type: DELETE_TASK, payload: 1 })
// // console.log("deleted State: ", store.getState());

// store.dispatch(deleteTask(1))
// console.log("deleted State: ", store.getState());






// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                 ...state,
//                 task: [...state.task, action.payload],
//             };

//         case DELETE_TASK:
//             const updatedTask = state.task.filter((_, index) => index !== action.payload);
//             return {
//                 ...state,
//                 task: updatedTask,
//             };

//         default:
//             return state;
//     }
// };
