import React, { Component } from "react"
import { connect } from "react-redux"
import CONFIG from "../../config"
import { changeBooking } from "../../action"
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker'
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja'
import 'timepicker';
import { sendBookingUpdate, calculatorBill } from "../../library/service.js"
// Just pass your jquery instance and you're done
datepickerFactory($);
datepickerJAFactory($);

class BookingModalSetting extends Component {
    constructor(props) {
        super(props)
        var { booking } = this.props

        this.state = {
            id             : booking.id,
            work_date      : booking.work_date,
            start          : booking.start,
            finish         : booking.finish,
            salary         : booking.salary,
            sitter_accept  : booking.sitter_accept,
            employer_accept: booking.employer_accept
        }
    }
    componentDidMount(){

        var _instance          = this,
            selectorTimeStart  = '#' + this.state.id + "js-booking-setting .timepickerStart",
            selectorTimeFinish = '#' + this.state.id + "js-booking-setting .timepickerFinish",
            selectorDatepicker = '#' + this.state.id + "js-booking-setting .datepicker"

        $(selectorTimeStart).timepicker({ 'timeFormat': 'H:i' })
        $(selectorTimeFinish).timepicker({ 'timeFormat': 'H:i' })

        $(selectorTimeStart).on('changeTime', function() {
            var startChange = $(this).val()
            _instance.setState({
                start: startChange
            })
        })
        $(selectorTimeFinish).on('changeTime', function() {
            var finishChange = $(this).val()
            _instance.setState({
                finish: finishChange
            })
        })

        $(selectorDatepicker).datepicker({ 
            dateFormat: 'yy-mm-dd',
            // beforeShowDay: function(d) {
            //     // normalize the date for searching in array
            //     var result = "2020-09-26,2020-09-12,2020-09-08,2020-09-10";
            //     var datelist = result.split(","); // populate the array
            //     var day = ("00" + d.getDate()).slice(-2),
            //     month = ("00" + (d.getMonth() + 1)).slice(-2),
            //     year = d.getFullYear(),
            //     fullDate = year + "-" + month + "-" + day
            //     return [$.inArray(fullDate, datelist) >= 0 ? true : false, ""]
            // }
            onSelect: function(dateText, inst) {
                
                _instance.setState({
                    work_date: dateText
                })
            }
        });
    }
    componentDidUpdate(){
        
        var { booking } = this.props
        if( booking.update == true ){
            this.setState({
                id             : booking.id,
                work_date      : booking.work_date,
                start          : booking.start,
                finish         : booking.finish,
                salary         : booking.salary,
                sitter_accept  : booking.sitter_accept,
                employer_accept: booking.employer_accept

            }, function(){

                var booking = { ... this.props.booking, update: false }
                this.props.dispatch(changeBooking(booking))

                var selectorTimeStart  = '#' + this.state.id + "js-booking-setting .timepickerStart",
                    selectorTimeFinish = '#' + this.state.id + "js-booking-setting .timepickerFinish",
                    selectorDatepicker = '#' + this.state.id + "js-booking-setting .datepicker"
                $(selectorTimeStart).val(this.state.start)
                $(selectorTimeFinish).val(this.state.finish)
                $(selectorDatepicker).val(this.state.work_date)
            })
        }
    }

    sitterAcceptBill = () => {
        var [ 
            work_date,
            start,
            finish,
            salary,
            differenceTime,
            price,
            vat,
            myServFee,
            stripeServFee,
            total
        ] = calculatorBill(this.state, this.props.auth)

        var channelActive   = this.props.convertations.find(channel => channel.isActive)
        //// dispatch test
        var bookingUpdate = {
            booking_id     : this.state.id,
            sitter_accept  : 1,
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
    employerAcceptBill = () => {

        var [ 
            work_date,
            start,
            finish,
            salary,
            differenceTime,
            price,
            vat,
            myServFee,
            stripeServFee,
            total
        ] = calculatorBill(this.state, this.props.auth)

        var channelActive = this.props.convertations.find(channel => channel.isActive)
        //// dispatch test
        var bookingUpdate = {
            booking_id     : this.state.id,
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

        var [ 
            work_date,
            start,
            finish,
            salary,
            differenceTime,
            price,
            vat,
            myServFee,
            stripeServFee,
            total
        ] = calculatorBill(this.state, this.props.auth)
        
        var bookingProps = this.props.booking
        var isEdit = bookingProps.start != start || bookingProps.finish != finish || bookingProps.work_date != work_date
        var classBtnSitter,
            textBtnSitter,
            clickBtnSitter,
            classBtnEmployer,
            textBtnEmployer,
            clickBtnEmployer

        if(this.props.auth.role_id == CONFIG.ROLE_USER.sitter){

            classBtnSitter   = "btn-booking btn-sitter-accept",
            textBtnSitter    = "シッター承認",
            clickBtnSitter   = this.sitterAcceptBill,

            classBtnEmployer = "btn-booking btn-employer-accept disabled",
            /// Employer chưa chấp nhận : 利用者未承認
            /// Employer đã đã chấp nhận: 利用者承認した
            textBtnEmployer  = this.state.employer_accept ? "利用者承認した" : "利用者未承認",
            clickBtnEmployer = null
            
            if(this.state.sitter_accept && !isEdit){
                classBtnSitter += ' disabled'
                textBtnSitter = "利用者承認した"
                clickBtnSitter   = null
            }
            
        }
        if(this.props.auth.role_id == CONFIG.ROLE_USER.employer){


            classBtnEmployer   = "btn-booking btn-employer-accept",
            textBtnEmployer    = "利用者承認",
            clickBtnEmployer   = this.employerAcceptBill,

            classBtnSitter = "btn-booking btn-sitter-accept disabled",
            /// sitter chưa chấp nhận : シッター未承認
            /// sitter đã đã chấp nhận: シッター承認した
            textBtnSitter  = this.state.sitter_accept ? "シッター承認した" : "シッター未承認",
            clickBtnSitter = null
            
            if(this.state.employer_accept && !isEdit){
                classBtnEmployer += ' disabled'
                textBtnEmployer = "シッター承認した"
                clickBtnEmployer   = null
            }
        }
        
        
        


        return  (
            <div id={ this.state.id + "js-booking-setting" } className="modal modal-booking">
                <div className="title">日時調整</div>
                <div className="setting-datetime-picker">
                    <div className="wrapper__datetime-picker">
                        <div className="input-group wrapper__date-picker">
                            <i className="hero-icon hero-calendar-check-outline"></i>
                            <input className="datepicker input-control" type="text" autoComplete="false" 
                            defaultValue={ work_date }/>
                        </div>
                        <div className="input-group wrapper__time-picker">
                            <i className="hero-icon hero-clock-outline"></i>
                            <input className="timepickerStart input-control" autoComplete="false" 
                                defaultValue={ start }/>
                        </div>
                        <div className="input-group wrapper__time-picker">
                            <i className="hero-icon hero-clock-check-outline"></i>
                            <input className="timepickerFinish input-control" autoComplete="false" 
                            defaultValue={ finish }/>
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

                    <div className="session-statistical price-with-time">
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
                    </div>
                }  
                {
                    this.props.auth.role_id == CONFIG.ROLE_USER.employer &&
                    <div className="statistical">
                        <div className="session-statistical myServFee">
                            <div className="head"><span>サービス利用料</span></div>
                            <div className="text-value">{ myServFee }￥</div>
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
                        
                    <a className={ classBtnSitter } onClick= { clickBtnSitter }> { textBtnSitter } </a> 
                    <a className={ classBtnEmployer } onClick= { clickBtnEmployer }> { textBtnEmployer } </a>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth         : state.users,
        convertations: state.userChat
    }
}
export default connect(mapStateToProps)(BookingModalSetting)