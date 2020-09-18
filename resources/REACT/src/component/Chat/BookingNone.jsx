
import React, { Component } from "react"

export default class BookingNone extends Component {
    
    render() {
        
        return  (
            <div id="js-booking-none" className="modal modal-booking">
                <div className="text-button-question">このユーザーには、まだスケジュールが設定されていません</div>
                <div className="group-box-total">
                    
                    <div className="wrapper-button-setting">
                        <a className="btn-booking btn-user-cancel" href="#" rel="modal:close">キャンセル</a>
                    </div>
                </div>
            </div>
        );
    }
}
