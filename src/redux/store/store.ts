import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { MovieDB_Saga } from "../saga/MovieDB_Saga";
import rootReducer from "../root/rootReducer";

const MiddlewareSaga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [MiddlewareSaga],
});

MiddlewareSaga.run(MovieDB_Saga);

export default store;
