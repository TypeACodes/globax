import { createStore } from '../src/store';

const initialState = {
  count: 0,
  todos: [],
};

const store = createStore(initialState);

describe('Store', () => {
  test('should have the correct initial state', () => {
    expect(store.getState()).toEqual(initialState);
  });

  test('should increment count when dispatching increment action', () => {
    store.dispatch({ type: 'INCREMENT_COUNT' });
    expect(store.getState().count).toBe(1);
  });

  test('should add todo when dispatching add todo action', () => {
    const todo = {
      id: 1,
      text: 'Write tests',
      done: false,
    };
    store.dispatch({ type: 'ADD_TODO', payload: todo });
    expect(store.getState().todos).toContain(todo);
  });
});
