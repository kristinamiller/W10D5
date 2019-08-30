

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

// export const todo = {
//   type: RECEIVE_TODOS,
//   todo: {
//     id: 1,
//     title: "",
//     body: "",
//     done: true
//   }
// };


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});