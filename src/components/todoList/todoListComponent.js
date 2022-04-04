import BulletComponent from '../Layout/bulletComponent';
import PriorityComponent from '../Layout/priorityComponent';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import moment from 'moment';
import { bindActionCreators } from "redux";
import { actions} from "../../store/index";

const AllTodoList = (props) => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const drawer = useSelector((state) => state.drawer);
    const {edithideDrawer, editshowDrawer} = bindActionCreators(actions, dispatch);
    
    return (
        <>
        <table className=" max-w-full text-sm mt-5">
            <thead className='w-full'>
                <tr>
                    <th></th>
                    <th className=" w-4/12 pr-7 py-3 text-left text-xs font-light text-gray-700 capitalize tracking-wider">Todo</th>
                    <th className=" py-3 text-left text-xs font-light text-gray-700 capitalize ">Priority</th>
                    <th className=" py-3 text-left text-xs font-light text-gray-700 capitalize">Due Date</th>
                    <th className=" py-3 text-left text-xs font-light text-gray-700 capitalize">Created By</th>
                    <th className=" py-3 text-left text-xs font-light text-gray-700 capitalize">Assigned To</th>
                    <th className=" py-3 text-left text-xs font-light text-gray-700 capitalize">Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((value, id) => (
                    <tr key={id} className="mt-4 border-t border-gray-100">
                        <td className="align-top pr-3 py-5"><BulletComponent completed={value.completed} />
                        </td>
                        <td className="text-sm text-justify pr-4 py-5">{value.todo}</td>
                        <td><PriorityComponent priority={value.priority} /></td>
                        <td>{moment(value.dueDate).format('DD, MMM YYYY')}</td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" tooltip={value.assignedBy} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" alt={value.createdBy} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                        </td>
                        <td className="cursor-pointer hover:text-purple">
                            <div className='hover:text-purple' >
                                <button onClick={()=>editshowDrawer(value)}>
                                <span className='float-left mr-2 text-gray-600'>Edit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 float-left text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>       
        </>
    )
}

export default AllTodoList;