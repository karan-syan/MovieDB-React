import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root/rootReducer";
import { RootSaga } from "./root/rootSaga";

const MiddlewareSaga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [MiddlewareSaga],
});

MiddlewareSaga.run(RootSaga);

export default store;
