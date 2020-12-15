import React, { Component } from "react"
import { connect } from "react-redux"
import { sendBookingUpdate, calculatorBill } from "../../library/service.js"
import $ from 'jquery'
import CONFIG from "../../config"
class BookingModalConfirm extends Component {

    cancelAccept = () => {
        var { booking } = this.props
        $("#"+ booking.id +"js-booking-setting").modal({
            escapeClose: false,
            clickClose: false,
            showClose: true
        });
    }
    finalAccept = () => {
        
        var { id, work_date, start, finish } = this.props.booking
        var channelActive   = this.props.convertations.find(channel => channel.isActive)
        //// dispatch test
        var bookingUpdate = {
            booking_id     : id,
            sitter_accept  : 1,
            status         : 1,
            employer_accept: 1,
            start          : start,
            finish         : finish,
            work_date      : work_date,
            tokenAccess    : this.props.auth.tokens.tokenAccess,
            userId         : this.props.auth.id,
            channelName    : channelActive.channelName
        }
        sendBookingUpdate(bookingUpdate)
        $.modal.close();
    }

    render() {
        
        var [ work_date, start, finish, salary, 
            differenceTime, price, vat, myServFeeSitter, myServFeeEmployer,
            stripeServFee, total ] = calculatorBill(this.props.booking, this.props.auth)
            
        return  (
            <div id={ this.props.booking.id + "js-booking-confirm" } className="modal modal-booking">

                <div className="title">見積書</div>
                <div className="setting-datetime-picker">
                    <div className="wrapper__datetime-picker">
                        <div className="input-group wrapper__date-picker">
                            <i className="hero-icon hero-calendar-check-outline"></i>
                            <span className="text-control">{work_date}</span>
                        </div>
                        <div className="input-group wrapper__time-picker">
                            <i className="hero-icon hero-clock-outline"></i>
                            <span className="text-control">{ start }</span>
                        </div>
                        <div className="input-group wrapper__time-picker">
                            <i className="hero-icon hero-clock-check-outline"></i>
                            <span className="text-control">{ finish }</span>
                        </div>
                    </div>
                </div>
                <div className="statistical">
                    
                    <div className="session-statistical salary">
                        <div className="head"><span>時間単価</span></div>
                        <div className="text-value">{ salary }￥</div>
                    </div>
                    <div className="session-statistical differenceTime">
                        <div className="head"><span>利用予定時間</span></div>
                        <div className="text-value">{ differenceTime } 時間</div>
                    </div>

                    <div className="session-statistical price">
                        <div className="head"><span>シッター/家事代行料金</span></div>
                        <div className="text-value">{ price }￥</div>
                    </div>
                </div>
                {
                    this.props.auth.role_id == CONFIG.ROLE_USER.sitter &&
                    <div className="statistical">                        
                        <div className="session-statistical stripeServFee">
                            <div className="head"><span>手数料</span> </div>
                            <div className="text-value">{ stripeServFee }￥</div>
                        </div>
                        <div className="session-statistical note">※既定の手数料が発生します。</div>
                        
                        <div className="session-statistical myServFee">
                            <div className="head"><span>サービス利用料</span></div>
                            <div className="text-value">{ myServFeeSitter }￥</div>
                        </div>
                        <div className="session-statistical note">※システム利用料は、450円＋給料の0.25%</div>
                    </div>
                }  
                {
                    this.props.auth.role_id == CONFIG.ROLE_USER.employer &&
                    <div className="statistical">
                        <div className="session-statistical myServFee">
                            <div className="head"><span>サービス利用料</span></div>
                            <div className="text-value">{ myServFeeEmployer }￥</div>
                        </div>
                        <div className="session-statistical note">※シッター/家事代行料金の20％</div>
                        
                        <div className="session-statistical vat">
                            <div className="head"><span>消費税（10％）</span> </div>
                            <div className="text-value">{ vat }￥</div>
                        </div>
                    </div>
                }
                <div className="group-box-total">
                    <div className="wrapper__total">
                        <div className="head">合計</div>
                        <div className="text-value text-color-warning-color-dark">{ total }￥</div>
                    </div>
                    <div className="text-button-question">上記内容でお間違いありませんか？</div>
                    <div className="wrapper-button-setting">
                        
                        <a className="btn-booking btn-user-cancel" onClick={ this.cancelAccept }>キャンセル</a> 
                        {
                            this.props.auth.role_id == CONFIG.ROLE_USER.employer &&
                            <a className="btn-booking btn-user-approved" onClick={ this.finalAccept }>予約する</a>
                        }
                        
                    </div>
                </div>
            </div>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        auth         : state.users,
        convertations: state.userChat
    }
}
export default connect(mapStateToProps)(BookingModalConfirm)
