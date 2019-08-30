import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root  />, root);
})


let todos = {
  3: {
    id: 1,
    title: "Programming",
    body: "Learn React-Redux",
    done: false
  },
  4: {
    id: 2,
    title: "Programming",
    body: "Learn React-Redux",
    done: false
  }
};




const store = configureStore({ todos });
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;


// ReactDOM.render(<Root store={store} />, root);
// });

