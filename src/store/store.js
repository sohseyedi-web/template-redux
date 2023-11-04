import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const perReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(perReducer);