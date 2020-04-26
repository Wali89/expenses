import { combineReducers } from 'redux';
import purchases from './purchases';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import search from './search'

export default combineReducers({
    purchases,
    errors,
    messages,
    auth,
    search
});