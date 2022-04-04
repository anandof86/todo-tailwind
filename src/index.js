import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Routes from './routes';
import todoReducer from "./store/reducer";
import drawerReducer from './store/drawerReducer';
import HeaderComponent from './components/Layout/headerComponent';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    drawer: drawerReducer
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-slate-100">
        <HeaderComponent/>
        <Routes />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

