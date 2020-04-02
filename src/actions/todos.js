import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function handleAddTodo(value, cb) {
  return dispatch => {
    return API.saveTodo(value)
      .then(todo => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => alert('There was an error. Try again.'));
  }
}

export function handleDeleteTodo(todo) {
  // Optimistic update
  return dispatch => {
    // First delete in the UI
    dispatch(removeTodo(todo.id));

    // If got an error, add the item back to the UI
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        alert('An error occurred. Try again.');
      });
  }
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id));
        alert('An error occurred. Try again');
      });
  }
}