import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import DetectClientReducer from "./detect.js";
import userChat from './user-chat.js';
import SocketReducer from "./socket.js"
import Auth from "./auth.js"
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    client         : DetectClientReducer,
    userChat       : userChat,
    socket         : SocketReducer,
    users          : Auth
});
export default Reducer;