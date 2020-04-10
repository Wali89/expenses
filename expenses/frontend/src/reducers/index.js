import { combineReducers } from 'redux';
import purchases from './purchases';
import errors from './errors'

export default combineReducers({
    purchases,
    errors
});