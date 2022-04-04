import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import moment from 'moment';
import BulletComponent from "../Layout/bulletComponent";
import PriorityComponent from "../Layout/priorityComponent";
const DahboardAllTodo = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    return (
        <table class="table-auto" >
            <tbody>
                {todoList.map((value, id) => (
                    <tr className="mt-4">
                        <td className="align-top pr-3 pt-6">
                            <BulletComponent />
                        </td>
                        <td className="text-sm pt-6"><span> {value.todo}</span>
                            <div className="pt-2">
                                <span className="float-left"><PriorityComponent priority={value.priority}/></span>
                                <span className="float-right">
                                    <span className="float-left text-xs mt-1 mr-2">{value.createdBy}</span>
                                    <img class="w-6 h-6 ml-auto rounded-full border-2 border-gray-400" src='https://randomuser.me/api/portraits/women/26.jpg' />
                                </span>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default DahboardAllTodo;