import { combineReducers } from 'redux';
import purchases from './purchases';
import errors from './errors'
import messages from './messages'

export default combineReducers({
    purchases,
    errors,
    messages
});