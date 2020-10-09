import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let Store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = Store;

export default Store;
