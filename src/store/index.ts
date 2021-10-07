import { persistStore } from "redux-persist";
import createStore from "./createStore";
import persistReducers from "./persistReducer";
import rootReducer from "./modules/rootReducer";

const middlewares: [] = [];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

export { store, persistor };
