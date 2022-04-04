import { createSlice } from "@reduxjs/toolkit";

import { initialTodoList } from "../config/todoList";

export const todoSlice = createSlice({
    name: "todos",
    initialState: { value: initialTodoList },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },

        deleteTodo: (state, action) => {
            console.log(state.value)
            state.value = state.value.filter((todo) => todo.id !== action.payload.id);
        },

        updateTodo: (state, action) => {
            state.value.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.todo = action.payload.todo;
                    todo.priority = action.payload.priority;
                    todo.dueDate = action.payload.dueDate;
                    todo.assignedTo = action.payload.assignedTo;
                    todo.createdBy = action.payload.createdBy;
                }
            });
        },

        completeTodo: (state, action) => {
            state.value.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = true;
                }
            });
        }

    },
});

export const { addTodo, deleteTodo, updateTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;