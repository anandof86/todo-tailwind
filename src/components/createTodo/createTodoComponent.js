import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, updateTodo, deleteTodo, completeTodo } from "../../store/reducer";
import { actions } from "../../store/index";

const CreateTodo = (props) => {
    const { showSidebar } = props;
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const drawer = useSelector((state) => state.drawer);
    const { hideDrawer, showDrawer } = bindActionCreators(actions, dispatch);
    let defaultvalue = {}
    if (drawer.action == "edit") {
        defaultvalue = drawer.id
    }

    const { register, handleSubmit, watch, setValue, reset, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: defaultvalue,
        mode: "onChange"
    });

    const removeTodo = () => {
        dispatch(deleteTodo({ id: drawer.id.id }));
        hideDrawer()
    }

    const markCompleted = () => {
        dispatch(completeTodo({ id: drawer.id.id }));
        hideDrawer()
    }
    const onSubmit = (data) => {
        if (drawer.action == "create") {
            dispatch(
                addTodo({
                    id: Math.floor(Math.random()*200) + 1,
                    todo: data.todo,
                    priority: data.priority,
                    assignedBy: data.assignedBy,
                    dueDate: data.dueDate,
                    createdBy: "Ramanand Chitravleu"
                })
            );
        } else if (drawer.action == "edit") {
            dispatch(
                updateTodo({
                    id: drawer.id.id,
                    todo: data.todo,
                    priority: data.priority,
                    assignedBy: data.assignedBy,
                    dueDate: data.dueDate,
                    createdBy: "Ramanand Chitravleu"
                })
            );
        }
        reset()
        hideDrawer()
    }
    return (
        <>
            <div className={`top-0 right-0 w-1/3 bg-white  py-3 px-6 text-white fixed h-full z-40  ease-in-out duration-500 ${drawer.state ? "translate-x-0 " : "translate-x-full"
                }`}>
                <h3 className="mt-5 text-lg font-semibold text-black">
                    {drawer.action == "create" ? <span>Add Todo</span> : <span>Edit Todo</span>}
                </h3>
                <div className="w-full mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-light mb-2" >
                                Todo
                            </label>
                            <input {...register("todo", { required: true })} className="shadow appearance-none border border-gray-200 text-sm rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="Type Here" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-light mb-2" >
                                Priority
                            </label>
                            <select {...register("priority", { required: true })} className="shadow appearance-none border border-gray-200 text-sm rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" type="select" placeholder='Select Priority' >
                                <option>Select Priority</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-light mb-2" >
                                Due Date
                            </label>
                            <input {...register("dueDate", { required: true })} className="shadow appearance-none border border-gray-200 text-sm rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder='Due Date' />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-light mb-2">
                                Assigned To
                            </label>
                            <select {...register("assignedTo", { required: true })} className="shadow appearance-none border border-gray-200 text-sm rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" type="select" placeholder='Select Priority' >
                                <option>Select Assigned To</option>
                                <option>Ramanand Chitravelu</option>
                                <option>Abinaya Ramanand</option>
                                <option>Vidunaa</option>
                            </select>
                        </div>
                        <div className="mb-6 w-full float-left">
                            <div className='float-left'>
                                <button className='text-black shadow text-xs rounded-lg bg-slate-200 p-2' onClick={() => hideDrawer()}>Cancel</button>
                            </div>
                            <div className='float-right'>
                                <button className='text-white shadow text-xs rounded-lg bg-purple p-2' disabled={!isDirty || !isValid}>Save Changes</button>
                            </div>
                        </div>
                        {
                            drawer.action == "edit" ?

                                <>
                                    <div className="mb-6 w-full float-left">
                                        <div className="flex-grow border-t w-full my-3 border-gray-300"></div>
                                        <div className='float-left text-sm text-gray-700'>
                                            Mark this todo as completed
                                        </div>
                                        <div className='float-right text-right'>
                                            <button className='text-white shadow text-xs rounded-lg bg-purple p-2' onClick={()=>markCompleted()} >Mark Completed</button>
                                        </div>
                                    </div>
                                    <div className="mb-6 w-full float-left">
                                        <div className="flex-grow border-t w-full my-3 border-gray-300"></div>
                                        <div className='float-left  text-sm text-gray-700'>
                                            Do you want to delete this todo?
                                        </div>
                                        <div className='float-right text-right'>
                                            <span className='text-white shadow text-xs rounded-lg bg-purple p-2 cursor-pointer' onClick={() => removeTodo()}>Delete Todo</span>
                                        </div>
                                    </div>
                                </> : ''
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateTodo;