import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import movies from "./recuder";

const store = createStore(movies, composeWithDevTools());

export default store;