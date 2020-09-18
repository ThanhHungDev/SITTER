var bookings = {
    fetch: false,
    data: []
}

import TYPE from "../action/type.js";
export default function (state = bookings, action) {
    switch (action.type) {
        case TYPE.BOOKING.SETTER_BOOKING:
            return action.payload

        case TYPE.BOOKING.CHANGE_BOOKING:

            if(!state.data.some(booking => booking.id === action.payload.booking_id)){
                location.reload()
            }
            var dataBooking = state.data.map( booking => {
                if(booking.id === action.payload.booking_id) {
                  return { ...booking, ...action.payload }
                }
                return booking
            })
            return { ... state, data: dataBooking }
                        
        default:
            return state;
    }
}