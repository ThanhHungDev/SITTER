import React, { Component } from "react"
import { connect } from "react-redux"
import BookingModalConfirm from "./BookingModalConfirm.jsx"
import BookingModalSetting from "./BookingModalSetting.jsx"
import BookingNone from "./BookingNone.jsx"
import BookingLoading from "./BookingLoading.jsx"
import BookingFinish from "./BookingFinish.jsx"
import BookingError from "./BookingError.jsx"

class Booking extends Component {
    
    render() {
        console.log(bookings, "bookings..")
        var { bookings } = this.props
        return (
            <div className="wrapper-modal">
                <BookingNone />
                <BookingLoading />
                <BookingError />
                
                {
                    bookings.data.map( booking => {
                        
                        if(booking){
                            return ( 
                                <div key={booking.id}>
                                    <BookingModalSetting  booking={booking}/>
                                    <BookingModalConfirm booking={booking}/> 
                                    <BookingFinish booking={booking}/>
                                </div> 
                            )
                        }
                    })
                }
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        bookings: state.booking,
    }
}
export default connect(mapStateToProps)(Booking);
