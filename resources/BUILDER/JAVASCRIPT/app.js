

$(document).ready(function () {

    var pageSitter = document.getElementById("mypage-sitter")
    if( document.getElementById("data") ) {
        if( pageSitter ){
            
            /// init calendar selector 
            var selector   = document.getElementById('draw-calendar'),
                inputEvent = document.getElementById("js-event-data"),
                dataServer = document.getElementById("data").innerHTML
            if (selector) {
                var instanceCalendar = new Calendar()
                instanceCalendar.setNewCalendarSelector(true)
                instanceCalendar.setEventData(JSON.parse(dataServer))
                instanceCalendar.setElementDraw(selector)
                instanceCalendar.draw() 
            }
        }
    }

    var pageSitter = document.getElementById("sitter-mypage-edit")
    if( document.getElementById("data") ) {
        if( pageSitter ){
            /// init calendar selector 
            var selector   = document.getElementById('draw-calendar'),
                inputEvent = document.getElementById("js-event-data"),
                dataServer = document.getElementById("js-event-data").value
                dataBooking = document.getElementById("js-booking-data").value
            if (selector) {
                var instanceCalendar = new Calendar()
                instanceCalendar.setNewCalendarSelector(true)
                instanceCalendar.setEventData(JSON.parse(dataServer))
                instanceCalendar.setBookingData(JSON.parse(dataBooking))
                instanceCalendar.setElementDraw(selector)
                instanceCalendar.setInputEventData(inputEvent)
                instanceCalendar.setBeforeOpenModel(eventBeforeOpenModel__selector)
                instanceCalendar.setAfterOpenModel(eventAfterOpenModel__selector)
                instanceCalendar.setCreateModel(createModelCalendar__selector)
                instanceCalendar.draw() 
            }
        }
    }

    var pageViewSitter = document.getElementById('view-sitter-page');
    if (pageViewSitter) {
        // console.log("hùng setPickDrag")
        /// tạo 1 calendar viewer
        var selector   = document.getElementById('draw-calendar'),
            inputEvent = document.getElementById("js-event-data")
            dataServer = document.getElementById("data").innerHTML
        if (selector) {
            var instanceCalendar = new Calendar()
            instanceCalendar.setPickDrag(false)
            instanceCalendar.setEventData(JSON.parse(dataServer))
            instanceCalendar.setElementDraw(selector)
            instanceCalendar.setInputEventData(inputEvent)
            instanceCalendar.setBeforeOpenModel(eventBeforeOpenModel__viewer)
            instanceCalendar.setAfterOpenModel(eventAfterOpenModel__viewer)
            instanceCalendar.setCreateModel(createModelCalendar__viewer)
            instanceCalendar.draw()
        }
    }
})

function eventBeforeOpenModel__viewer(_instance){

    var dates       = [],
    domPicked = "." + _instance.classPicked + "." + _instance.classCellHasEvent
    $( domPicked ).each(function(index, ele){

        dates.push($(ele).attr(_instance.attributeDate))
    });
    $( "." + _instance.classPicked ).removeClass(_instance.classPicked)

    /// kiểm tra 
    var employerID = _instance.selector.getAttribute("data-employer"),
        sitterID   = _instance.selector.getAttribute("data-sitter")
    ///
    if( employerID && sitterID){

        var selectYear  = formatZeroBefore(_instance.selectYear),
            selectMonth = formatZeroBefore((parseInt(_instance.selectMonth) + 1 ))

        var eventMonth   = _instance.data[selectYear][selectMonth]
        var typeDatesEvent = dates.map( function( item ) { return eventMonth[formatZeroBefore( item )].type })
        
        var typeDateFirst = typeDatesEvent[0],
            titleForm     = 'title popup'

        if( typeDateFirst == 1 ){

            titleForm = 'ベビーシッター：' + SYSTEM_TEXT_SALARY_SITTER + ' / 1時間'
        }
        if( typeDateFirst == 2 ){

            titleForm = '家事代行：' + SYSTEM_TEXT_SALARY_HOUSE + ' / 1時間'
        }
        if(!_instance.selector.getAttribute("data-stripe-active")){

            titleForm = 'クレジットカード情報登録'
        }
        document.getElementById(_instance.idModalTextTime).innerHTML = titleForm
        
    }
   

    return dates
}


function showProress( domShow ){
    var idDomProress = "js-dom-temp-proress"
    hideProress()

    if( domShow ){
        var proress           = document.createElement("div")
            proress.id        = idDomProress
            proress.className = "progress progress-success"
        var loading           = document.createElement("div")
            loading.className = "progress-loadding"
        proress.appendChild( loading )
        domShow.appendChild( proress )
    }
}
function hideProress( ){
    var idDomProress = "js-dom-temp-proress"
    if( document.getElementById( idDomProress ) ){
        document.getElementById( idDomProress ).remove();
    }
}

function initModalViewerDataSetter(_instance){

    /// reset input data time 
    var domBegin = document.getElementById(_instance.idBookingBeginTime),
        domEnd   = document.getElementById(_instance.idBookingEndTime)

    if(domBegin && domEnd){
        domBegin.value = ''
        domEnd.value   = ''
    }


    var btnBooking = document.getElementById(_instance.idModalBooking)
    if(btnBooking && btnBooking.classList.contains('js-settime-booking')){
        btnBooking.classList.add('disabled')
    }
}

function eventAfterOpenModel__viewer(_instance, dates){

    /// init data validate 
    initModalViewerDataSetter(_instance)

    /// do something
    document.getElementById(_instance.idModalButtonTimeClose).onclick = function(event){
        event.preventDefault();
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
        hiddenErrorResultSetterBooking(_instance)
    }
    /// do something
    $(".time-close").each(function(){
        this.onclick = function(event){
            event.preventDefault();
            $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
            _instance.modelClose()
            hiddenErrorResultSetterBooking(_instance)
        }
    })
    /// do something
    document.getElementById(_instance.idModalBooking).onclick = function(event){
        if( this.classList.contains("goto-login") || this.classList.contains("disabled") ){
            return true
        }
        event.preventDefault()

        if( document.getElementById(_instance.idModalBooking) ){
            showProress(document.getElementById(_instance.idModalBooking))
        }

        var employerID     = _instance.selector.getAttribute("data-employer"),
            sitterID       = _instance.selector.getAttribute("data-sitter"),
            employerRefesh = _instance.selector.getAttribute("data-refesh"),
            timeBegin      = document.getElementById(_instance.idBookingBeginTime).value,
            timeEnd        = document.getElementById(_instance.idBookingEndTime).value,
            selectYear     = formatZeroBefore(_instance.selectYear),
            selectMonth    = formatZeroBefore((parseInt(_instance.selectMonth) + 1 )),
            selectDate     = formatZeroBefore(dates[0])

            var TYPE_JOB  = _instance.data[selectYear][selectMonth][selectDate].type
            
        ///
        if( employerID && sitterID){
            /// fetch data to server nodejs
            
            var date = selectYear + "/" + selectMonth + "/" + selectDate
            var messageDatePicked = "[" + SYSTEM_FULL_NAME_SITTER + "]さんこんにちは！ \n " + 
                                    "以下の日時で予約のリクエストがありました。\n " +
                                    "勤務日：" + date + " \n " + 
                                    "開始時間：" + timeBegin + " \n " + 
                                    "終了時間：" + timeEnd 
            
            var data                 = {}
                data.localUserId     = parseInt(employerID)
                data.referenceUserId = parseInt(sitterID)
                data.refesh          = employerRefesh
                data.message         = messageDatePicked
                data.date            = (selectYear + "-" + selectMonth + "-" + selectDate),
                data.type            = TYPE_JOB,
                data.salary          = TYPE_JOB == 1 ? SYSTEM_TEXT_SALARY_SITTER : SYSTEM_TEXT_SALARY_HOUSE,
                data.timeBegin       = timeBegin ? timeBegin + ":00" : "00:00:00"
                data.timeEnd         = timeEnd ? timeEnd + ":00" : "01:00:00"
            
            return fetch(SYSTEM_REAL_TIME_URL + '/api/channel', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                
                if( response.code != 200 ){
                    throw Error("error")
                }
                var redirect = SYSTEM_CHAT_EMPLOYER
                if( typeof ID_VIEW_SITTER != 'undefined' ){
                    redirect += "/" + ID_VIEW_SITTER
                }
                window.location.replace(SYSTEM_CHAT_EMPLOYER)
            })
            .catch(error => {
                /// hide slow 
                setTimeout(function(){
                    hideProress()
                }, 1000)
                /// show error
                alert("エラーがあります。ページを更新するか、管理者に連絡してください" )
                return false 
            })
        }
    }
}

function createModelCalendar__viewer( instance ){

    var modal           = document.createElement("div")
        modal.className = instance.classModal + " d-none"
        modal.id        = instance.idModalCalendar
    
    var header           = document.createElement("div")
        header.className = instance.classModalHeader
        header.id        = instance.classModalHeader

    var headerText    = document.createElement("span")
        headerText.id = instance.idModalTextTime
    header.appendChild(headerText)
        
    var timeClose           = document.createElement("button")
        timeClose.id        = instance.idModalButtonTimeClose
        timeClose.className = 'time-close'
        timeClose.innerHTML = 'x'
    header.appendChild(timeClose)
    modal.appendChild( header )

    

    if(
        instance.selector.getAttribute("data-employer") && 
        instance.selector.getAttribute("data-sitter") && 
        instance.selector.getAttribute("data-stripe-active")
    ){
        
        modal = createButtonModelCalendarSetTimeBooking__viewer(modal, instance)
    }else if(
        instance.selector.getAttribute("data-employer") && 
        instance.selector.getAttribute("data-sitter") && 
        !instance.selector.getAttribute("data-stripe-active")
    ){
        modal = createButtonModelCalendarRegisterStripeNoti__viewer(modal, instance)
    }else {
        modal = createButtonModelCalendarLoginNoti__viewer(modal, instance)
    }
    return modal
}
function createButtonModelCalendarSetTimeBooking__viewer(modal, instance){
    
    //// create body modal 
    var body           = document.createElement("div")
        body.className = instance.classModalBody
    
    modal.appendChild( body )

    var wrapperModel           = document.createElement("div")
        wrapperModel.id        = instance.idWrapperViewerChange
        wrapperModel.className = instance.idWrapperViewerChange

    var inputBegin = document.createElement("input")
    inputBegin.id = instance.idBookingBeginTime
    inputBegin.onblur = function(){ return validateTimeSetterBooking(instance) }
    
    wrapperModel.appendChild(inputBegin)

    var inputEnd = document.createElement("input")
    inputEnd.id = instance.idBookingEndTime
    inputEnd.onblur = function(){ return validateTimeSetterBooking(instance) }
    
    wrapperModel.appendChild(inputEnd)
        
    $(inputBegin).timepicker({ 'timeFormat': 'H:i' });

    $(inputEnd).timepicker({ 'timeFormat': 'H:i' });
    modal.appendChild( wrapperModel )
    

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'

    var btnCancel           = document.createElement("button")
        btnCancel.id        = 'close-model'
        btnCancel.className = "time-close"
        btnCancel.innerHTML = 'キャンセル'
        wrapperButton.appendChild(btnCancel)

    var btnBooking           = document.createElement("button")
        btnBooking.id        = instance.idModalBooking
        btnBooking.className = "booking disabled js-settime-booking"
        btnBooking.innerHTML = 'チャットする'
        wrapperButton.appendChild(btnBooking)

    modal.appendChild(wrapperButton)
    return modal
}

function validateTimeSetterBooking(instanceCalendar){

    try {
        var isValid = checkTimeSetterBookingValid(instanceCalendar)
        if(!isValid){
            throw Error('終了時間は開始時間より後でなければなりません。')
        }
        var btnBooking = document.getElementById(instanceCalendar.idModalBooking)
        if(btnBooking){
            btnBooking.classList.remove('disabled')
        }
        hiddenErrorResultSetterBooking(instanceCalendar)
    } catch (error) {
        return showErrorResultSetterBooking(instanceCalendar, error.message)
    }
    
}
function showErrorResultSetterBooking(instanceCalendar, mess){

    var domWrapperInputTime = document.getElementById(instanceCalendar.idWrapperViewerChange)
    $(domWrapperInputTime).find(".error").remove()
    if(!mess){
        document.getElementById(instanceCalendar.idModalBooking).classList.remove('disabled')
        return false
    }
    var error       = document.createElement("p")
    error.className = "error"
    error.innerHTML = mess

    domWrapperInputTime.appendChild(error)
    document.getElementById(instanceCalendar.idModalBooking).classList.add('disabled')
    return true
}
function hiddenErrorResultSetterBooking(instanceCalendar){

    var domWrapperInputTime = document.getElementById(instanceCalendar.idWrapperViewerChange)
    $(domWrapperInputTime).find(".error").remove()
}
function checkTimeSetterBookingValid(instanceCalendar){

    var domBegin = document.getElementById(instanceCalendar.idBookingBeginTime),
        domEnd   = document.getElementById(instanceCalendar.idBookingEndTime)

    if(!domBegin || !domEnd){
        throw Error('input not found')
    }
    if( !domBegin.value ){
        throw Error('開始時間が必要です')
    }
    if( !domEnd.value ){
        throw Error('終了時間が必要です')
    }
    var valBegin = parseInt(domBegin.value.split(':').join('')) || 0
        valEnd   = parseInt(domEnd.value.split(':').join('')) || 0

    

    if(!domBegin.value){

        throw Error('終了時間は開始時間より後でなければなりません。')
    }
    if(!domEnd.value){

        throw Error('終了時間は開始時間より後でなければなりません。')
    }
    if(valBegin >= valEnd){

        throw Error('終了時間は開始時間より後でなければなりません。')
    }

    return true
    
}
function createButtonModelCalendarRegisterStripeNoti__viewer(modal, instance){
    //// create body modal 
    var body           = document.createElement("div")
        body.className = instance.classModalBody
        body.innerHTML = 'クレジットカード情報を登録してください'
    modal.appendChild( body )

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'

    var href = '/employer/edit-card';
    if(typeof ROUTE_EMPLOYER_REGISTER_STRIPE != "undefined" ){
        href = ROUTE_EMPLOYER_REGISTER_STRIPE
    }

    var btnCancel           = document.createElement("a")
        btnCancel.id        = 'close-model'
        btnCancel.className = "time-close"
        btnCancel.innerHTML = 'キャンセル'

    var btnLogin           = document.createElement("a")
        btnLogin.id        = instance.idModalBooking
        btnLogin.className = "goto-login"
        btnLogin.href      = href
        btnLogin.innerHTML = 'クレジットカード'

    wrapperButton.appendChild( btnCancel )
    wrapperButton.appendChild( btnLogin )

    modal.appendChild(wrapperButton)
    return modal
}

function createButtonModelCalendarLoginNoti__viewer(modal, instance){ 
    //// create body modal 
    var body           = document.createElement("div")
        body.className = instance.classModalBody
        body.innerHTML = '利用者ログインを行ってから再度日程を指定してください。'
    modal.appendChild( body )

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'



    var btnLogin           = document.createElement("a")
        btnLogin.id        = instance.idModalBooking
        btnLogin.className = "goto-login"
        btnLogin.href      = "/employer/login/VIEW_SITTER/"+ID_VIEW_SITTER
        btnLogin.innerHTML = '利用者ログイン'
    wrapperButton.appendChild( btnLogin )
    modal.appendChild(wrapperButton)
    return modal
}

function eventBeforeOpenModel__selector(_instance){

    var dates     = [],
        domPicked = "." + _instance.classPicked
    $( domPicked ).each(function(index, ele){

        dates.push($(ele).attr(_instance.attributeDate))
    })
    
    return dates
}

function eventAfterOpenModel__selector(_instance, dates){

    /// do something
    document.getElementById(_instance.idModalButtonNew).onclick = function(event){

        event.preventDefault();
        var hourStart   = document.getElementById(_instance.idModalHourBegin),
            minuteStart = document.getElementById(_instance.idModalMinuteBegin),
            hourEnd     = document.getElementById(_instance.idModalHourEnd),
            minuteEnd   = document.getElementById(_instance.idModalMinuteEnd),
            typeJob     = document.getElementById(_instance.idModalCheckFirst).checked ? 1 : 2
        
        var event = {
            start: _instance.formatZeroBefore(hourStart.value) + ':' + _instance.formatZeroBefore(minuteStart.value), 
            finish: _instance.formatZeroBefore(hourEnd.value) + ':' + _instance.formatZeroBefore(minuteEnd.value), 
            overnight: 0, 
            status: 0, 
            type: typeJob,
            class: 'event-new type-job' + typeJob
        }

        if( validateEvent() ){
            _instance.overrideEvent(dates, event)
            $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
            _instance.modelClose()
            $('#js-event-data').valid()
        }
    }
    document.getElementById(_instance.idModalButtonEdit).onclick = function(event){

        event.preventDefault();
        console.log("vaof edit")
        var hourStart   = document.getElementById(_instance.idModalHourBegin),
            minuteStart = document.getElementById(_instance.idModalMinuteBegin),
            hourEnd     = document.getElementById(_instance.idModalHourEnd),
            minuteEnd   = document.getElementById(_instance.idModalMinuteEnd),
            typeJob     = document.getElementById(_instance.idModalCheckFirst).checked ? 1 : 2

        var event = {
            start: _instance.formatZeroBefore(hourStart.value) + ':' + _instance.formatZeroBefore(minuteStart.value), 
            finish: _instance.formatZeroBefore(hourEnd.value) + ':' + _instance.formatZeroBefore(minuteEnd.value), 
            overnight: 0, 
            status: 0, 
            type: typeJob,
            class: 'event-update type-job' + typeJob
        }
        
        if( validateEvent() ){
            _instance.updateEvent( dates[0], event )
            $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
            _instance.modelClose()
            $('#js-event-data').valid()
        }
    }
    document.getElementById(_instance.idModalButtonDelete).onclick = function(event){
        event.preventDefault();
        _instance.deleteEvent(dates[0])
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
        $('#js-event-data').valid()
    }
    document.getElementById(_instance.idModalButtonTimeClose).onclick = function(event){
        event.preventDefault();
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
        $('#js-event-data').valid();
        $('#check-time').valid();
    }
}

function createModelCalendar__selector( instance ){
    var modal           = document.createElement("div")
        modal.className = instance.classModal + " d-none"
        modal.id        = instance.idModalCalendar
    
    var header           = document.createElement("div")
        header.className = instance.classModalHeader

    var headerText           = document.createElement("span")
        headerText.id        = instance.idModalTextTime
        headerText.innerHTML = '00月00日(火)'
    header.appendChild(headerText)
        
    var timeClose           = document.createElement("button")
        timeClose.id        = instance.idModalButtonTimeClose
        timeClose.className = 'time-close'
        timeClose.innerHTML = 'x'
    header.appendChild(timeClose)
    modal.appendChild( header )
    //// create body modal 
    var body           = document.createElement("div")
        body.className = instance.classModalBody

    // var title           = document.createElement("p")
    //     title.className = instance.classModalBodyTitle
    //     title.innerHTML = '予約可能　11：00～22：00'
    // body.appendChild( title )

    /// input
    var wrapperInput           = document.createElement("div")
        wrapperInput.className = instance.wrapperInput

    var inputHourBegin      = document.createElement("INPUT")
        inputHourBegin.id   = instance.idModalHourBegin
        inputHourBegin.name = instance.nameModalHourBegin
        inputHourBegin.type = instance.typeNumber
        inputHourBegin.min  = 0
        inputHourBegin.max  = 23

    var spanTwoDotBegin           = document.createElement("span")
        spanTwoDotBegin.innerHTML = '：'

    var inputMinuteBegin      = document.createElement("INPUT")
        inputMinuteBegin.id   = instance.idModalMinuteBegin
        inputMinuteBegin.name = instance.nameModalMinuteBegin
        inputMinuteBegin.type = instance.typeNumber
        inputMinuteBegin.min  = 0
        inputMinuteBegin.max  = 59

    var spanMiddle           = document.createElement("span")
        spanMiddle.innerHTML = '～'

    var inputHourEnd      = document.createElement("INPUT")
        inputHourEnd.id   = instance.idModalHourEnd
        inputHourEnd.name = instance.nameModalHourEnd
        inputHourEnd.type = instance.typeNumber
        inputHourEnd.min  = 0
        inputHourEnd.max  = 23

    var spanTwoDotEnd           = document.createElement("span")
        spanTwoDotEnd.innerHTML = '：'

    var inputMinuteEnd      = document.createElement("INPUT")
        inputMinuteEnd.id   = instance.idModalMinuteEnd
        inputMinuteEnd.name = instance.nameModalMinuteEnd
        inputMinuteEnd.type = instance.typeNumber
        inputMinuteEnd.min  = 0
        inputMinuteEnd.max  = 59

    wrapperInput.appendChild(inputHourBegin)
    wrapperInput.appendChild(spanTwoDotBegin)
    wrapperInput.appendChild(inputMinuteBegin)
    wrapperInput.appendChild(spanMiddle)
    wrapperInput.appendChild(inputHourEnd)
    wrapperInput.appendChild(spanTwoDotEnd)
    wrapperInput.appendChild(inputMinuteEnd)
    body.appendChild( wrapperInput )

    /// check box
    var wrapperCheckBox = createCheckboxJobTypeModel(instance)
    
    body.appendChild( wrapperCheckBox )
    modal.appendChild(body)

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'

    var btnNew           = document.createElement("button")
        btnNew.id        = instance.idModalButtonNew
        btnNew.innerHTML = '登録する'

    var btnEdit           = document.createElement("button")
        btnEdit.id        = instance.idModalButtonEdit
        btnEdit.innerHTML = '編集する'

    var btnClose           = document.createElement("button")
        btnClose.id        = instance.idModalButtonDelete
        btnClose.innerHTML = '削除する'

    wrapperButton.appendChild( btnNew )
    wrapperButton.appendChild( btnEdit )
    wrapperButton.appendChild( btnClose )
    modal.appendChild(wrapperButton)

    return modal
}


function createCheckboxJobTypeModel(instance ){
    /// check box
    var wrapperCheckBox           = document.createElement("div")
        wrapperCheckBox.className = instance.wrapperCheckBox
    
    var checkboxfirst          = document.createElement("INPUT")
        checkboxfirst.id       = instance.idModalCheckFirst
        checkboxfirst.onchange = function(){
            
            calendarModelCheckboxChangeStatus(instance, this )
        }
    checkboxfirst.setAttribute("type", "checkbox")
    checkboxfirst.setAttribute("name", instance.idModalCheckFirst)

    var spanCheckboxFirst           = document.createElement("LABEL")
        spanCheckboxFirst.innerHTML = 'ベビーシッター'
        spanCheckboxFirst.htmlFor   = instance.idModalCheckFirst

    var checkboxLast          = document.createElement("INPUT")
        checkboxLast.id       = instance.idModalCheckLast
        checkboxLast.onchange = function(){
            
            calendarModelCheckboxChangeStatus(instance, this )
        }
    checkboxLast.setAttribute("type", "checkbox")
    checkboxLast.setAttribute("name", instance.idModalCheckLast)

    var spanCheckboxLast           = document.createElement("LABEL")
        spanCheckboxLast.innerHTML = '家事代行'
        spanCheckboxLast.htmlFor   = instance.idModalCheckLast

    wrapperCheckBox.appendChild(checkboxfirst)
    wrapperCheckBox.appendChild(spanCheckboxFirst)
    wrapperCheckBox.appendChild(checkboxLast)
    wrapperCheckBox.appendChild(spanCheckboxLast)
    return wrapperCheckBox
}

// js for icon avatar header
// $(document).ready(function () {
//     $('#client-avatar').on('click', function(){
//         $('.div-avatar .dropdown-content').css("display", "block");
//     });

//     $('.div-avatar .dropdown-content').on('click', function () {
//         $(this).css("display", "none");
//     });
// });

function calendarModelCheckboxChangeStatus( instance, dom ){

    var checkboxFirst = document.getElementById(instance.idModalCheckFirst),
        checkboxLast  = document.getElementById(instance.idModalCheckLast)
    
    if( checkboxFirst.checked && checkboxLast.checked ){

        if( dom.checked && dom.getAttribute('id') == instance.idModalCheckFirst){

            checkboxLast.click()
        }else{
            checkboxFirst.click()
        }
    }
}

function validateEvent(){
    console.log("validateEventvalidateEventvalidateEventvalidateEvent", checkValidTime() && checkValidJobType())
    return checkValidTime() && checkValidJobType()
}

function checkValidJobType(){

    var valid = false

    var checkboxFirst = document.getElementById('js-modal-check-first'),
        checkboxLast  = document.getElementById('js-modal-check-last')

    valid = checkboxFirst.checked || checkboxLast.checked 
    return valid
}
function checkValidTime(){

    var valid = false
    var hour_begin   = $('#js-hour-begin').val().trim().trim(),
        minute_begin = $('#js-minute-begin').val().trim(),
        hour_end     = $('#js-hour-end').val().trim(),
        minute_end   = $('#js-minute-end').val().trim()

    var time_start = formatZeroBefore(hour_begin) + ':' + formatZeroBefore(minute_begin) + ':00';
    var time_end   = formatZeroBefore(hour_end) + ':' + formatZeroBefore(minute_end) + ':00';

    if(validateTime(time_start) && validateTime(time_end)){

        var start = formatZeroBefore(hour_begin) + '' + formatZeroBefore(minute_begin),
            end   = formatZeroBefore(hour_end) + '' + formatZeroBefore(minute_end)

        valid = end > start
    }
    return valid
}

function validateTime (time) {
    const timeReg = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    return timeReg.test(time);
}

function convertNumberJP(input){
    var str = input.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    return str;
}

function formatZeroBefore (number){
    number = parseInt(number)
    if (isNaN(number)) { return "00" }

    if (number < 10) {
        number = "0" + number
    }
    return number
}
