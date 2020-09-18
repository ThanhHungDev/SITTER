
import React, { Component } from "react"

export default class BookingError extends Component {
    
    render() {
        
        return  (
            <div id="js-booking-error" className="modal modal-booking">
                <div className="text-button-question">
                    エラーが発生しました：
                    <div className="alert alert-danger"></div>
                </div>
                <div className="group-box-total">
                    
                    <div className="wrapper-button-setting">
                        <a className="btn-booking btn-user-cancel" href="#" rel="modal:close">キャンセル</a>
                    </div>
                </div>
            </div>
        );
    }
}
