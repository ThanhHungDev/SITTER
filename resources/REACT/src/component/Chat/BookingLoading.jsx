
import React, { Component } from "react"
export default class BookingLoading extends Component {
    

    render() {
        
        return  (
            <div id="js-booking-loading" className="modal modal-booking">
                <div className="text-button-question">データを読み込んでいます。しばらくお待ちください</div>
                <div className="progress progress-success"><div className="progress-loadding"></div></div>
                <div className="group-box-total">
                    
                    <div className="wrapper-button-setting">
                        <a className="btn-booking btn-user-cancel" href="#" rel="modal:close">キャンセル</a>
                    </div>
                </div>
            </div>
        );
    }
}
