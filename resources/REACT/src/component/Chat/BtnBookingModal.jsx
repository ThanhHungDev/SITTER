import React, { Component } from "react"
import { connect } from "react-redux"
import $ from "jquery"
import "jquery-modal"


class BtnBookingModal extends Component {
    constructor(props) {
        super(props)
    }

    chooseOrder = () => {

        var { bookings, userChat } = this.props
        console.log(bookings, "btn click")

        if(!bookings.fetch){
            $("#js-booking-loading").modal({
                escapeClose: false,
                clickClose: false,
                showClose: true
            });
            return false
        }

        var channelActiveChat = userChat.find(channel => channel.isActive)
        var userActive = channelActiveChat.user
        var booking = bookings.data.find(booking => booking.employer_id == userActive.id || booking.sitter_id == userActive.id)
        

        
        if( !booking ){
            
            $("#js-booking-none").modal({
                escapeClose: false,
                clickClose: false,
                showClose: true
            })
            return false
        }
        
        var { status, sitter_accept, employer_accept } = booking
        if( sitter_accept && employer_accept && !status ){
            
            $("#" + booking.id + "js-booking-confirm").modal({
                escapeClose: false,
                clickClose: false,
                showClose: true
            })
        }else if( !sitter_accept || !employer_accept ){
            
            $("#" + booking.id + "js-booking-setting").modal({
                escapeClose: false,
                clickClose: false,
                showClose: true
            });
        } else if(  sitter_accept && employer_accept && status ){
            
            $("#" + booking.id +"js-booking-finish").modal({
                escapeClose: false,
                clickClose: false,
                showClose: true
            });
        } 
    }
    

    render() {

        return (
            <i
                className="hero-icon hero-calendar-month calendar"
                onClick={ this.chooseOrder }
            ></i>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        auth    : state.users,
        bookings: state.booking,
        userChat: state.userChat,
    }
}
export default connect(mapStateToProps)(BtnBookingModal);
