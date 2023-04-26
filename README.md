# Store.ts

Store.ts is a simple yet powerful state management library for TypeScript applications. It allows developers to easily manage and access application state from within any component or page, improving code organization and reusability.

## Installation

To install Store.ts, run the following command:
```shell
npm install store.ts
```
Or
```shell
tyley install store.ts
```
## Usage

To use Store.ts in your TypeScript application, simply import the `createStore` function from the library and pass in your initial state object:
```ts
import { createStore } from 'store.ts';

const initialState = {
  count: 0,
  todos: [],
};
```

const store = createStore(initialState);

You can then access and modify the state using the `getState()` and `dispatch()` functions:
```ts
const count = store.getState().count; // get count value

store.dispatch({ type: 'INCREMENT_COUNT' }); // increment count value
```
You can also define actions and reducers to manage state changes:
```ts
interface IncrementAction {
  type: 'INCREMENT_COUNT';
}

function incrementCount(): IncrementAction {
  return { type: 'INCREMENT_COUNT' };
}

function countReducer(state = initialState, action: IncrementAction): typeof initialState {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);
store.dispatch(incrementCount()); // increment count value
```
## API

Store.ts provides the following API:

### `createStore(initialState)`

Creates a new store with the given initial state.

### `store.getState()`

Returns the current state of the store.

### `store.dispatch(action)`

Dispatches an action to the store, triggering a state change.

## License

This library is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Credits

Store.ts was created by Srrela. Special thanks to session_dev (in [matrix]) for their contributions.

## Contact

If you have any questions or feedback, please feel free to reach out to me at team@typeacode.com
