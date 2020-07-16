import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import conversations from './conversations.js'
import conversationBackup from './conversation-backup-search'
import user from './user.js'
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    
    user              : user,
    conversations     : conversations,
    conversationBackup: conversationBackup
});
export default Reducer;