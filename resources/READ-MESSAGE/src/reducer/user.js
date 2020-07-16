var user = null

import TYPE from "../action/type.js"

export default function (state = user, action) {
    switch (action.type) {
        case TYPE.SETTER_USER:
            return action.payload
        default:
            return state;
    }
}