import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../root/rootReducer";
import { Movie_Saga } from "../saga/Movie_Saga";

const MiddlewareSaga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [MiddlewareSaga],
});

MiddlewareSaga.run(Movie_Saga);

export default store;
