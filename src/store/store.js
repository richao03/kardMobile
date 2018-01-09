import { createStore } from "redux";
import {reducer} from './reducers.js';

export const store = createStore(reducer) 