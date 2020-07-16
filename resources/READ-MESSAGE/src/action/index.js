import TYPE from "./type"


export function setterUser( user ){
    console.log(user , " set user ")
    return {
        type : TYPE.SETTER_USER,
        payload : { ...user, fetched: true }
    }
}

export function setterConversation( conv ){
    console.log(conv , " set conv ")
    return {
        type : TYPE.SETTER_CONVERSATION,
        payload : conv
    }
}

export function setterConversationBackup( conv ){
    console.log(conv , " set conv backup ")
    return {
        type : TYPE.SETTER_CONVERSATION_BACKUP,
        payload : conv
    }
}

export function changeChannelActive( id ){
    console.log(id , " changeChannelActive ")
    return {
        type : TYPE.CHANNEL_SET_ACTIVE,
        payload : id
    }
}


export function readAllCMessage( ){
    console.log( " readAllCMessage ")
    return {
        type : TYPE.CHANNEL_READ_MESSAGE,
        payload : null
    }
}

export function filterSortConversation( objectIdsAndDataBackup ){
    console.log( " filterSortConversation ")
    return {
        type : TYPE.FILTER_SORT_CONV,
        payload : objectIdsAndDataBackup
    }
}

