import {createStore} from 'redux';
import todoPageReducer from '../todoPage/todoPageReducer';

export default createStore(todoPageReducer);