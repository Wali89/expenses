import { combineReducers } from 'redux';
import purchases from './purchases';
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
    purchases,
    errors,
    messages,
    auth
});