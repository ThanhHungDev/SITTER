

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
            if (selector) {
                var instanceCalendar = new Calendar()
                instanceCalendar.setNewCalendarSelector(true)
                instanceCalendar.setEventData(JSON.parse(dataServer))
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
        /// tạo 1 calendar viewer
        var selector   = document.getElementById('draw-calendar'),
            inputEvent = document.getElementById("js-event-data")
            dataServer = document.getElementById("data").innerHTML
        if (selector) {
            var instanceCalendar = new Calendar()

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

function eventAfterOpenModel__viewer(_instance, dates){

    /// do something
    document.getElementById(_instance.idModalButtonTimeClose).onclick = function(event){
        event.preventDefault();
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
    }
    /// do something
    document.getElementById(_instance.idModalButtonGotoChat).onclick = function(event){
        if( this.classList.contains("goto-login") ){
            return true
        }
        event.preventDefault()

        if( document.getElementById(_instance.idModalCalendar) ){
            showProress(document.getElementById(_instance.idModalCalendar))
        }

        var employerID     = _instance.selector.getAttribute("data-employer"),
            sitterID       = _instance.selector.getAttribute("data-sitter"),
            employerRefesh = _instance.selector.getAttribute("data-refesh")

        if( employerID && sitterID){
            /// fetch data to server nodejs
            var messageDatePicked = null
            var schedules = []
            if(dates.length){
                messageDatePicked = "雇用者が選んだ日付：\n"
                for (let imdate = 0; imdate < dates.length; imdate++) {
                    messageDatePicked += _instance.selectYear + "/" 
                    messageDatePicked += _instance.selectMonth + "/"
                    messageDatePicked += dates[imdate] + "\n" 
                }
            }
            
            var data                 = {}
                data.localUserId     = parseInt(employerID)
                data.referenceUserId = parseInt(sitterID)
                data.refesh          = employerRefesh
                data.message         = messageDatePicked
                data.dates           = dates
                data.monthSelect     = _instance.selectMonth
                data.yearSelect      = _instance.selectYear
            var detect               = detectClient()
            Object.assign(data, detect)
            return fetch(SYSTEM_REAL_TIME_URL + '/api/channel', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log( response ) 
                if( response.code == 200 ){
                    if( typeof ID_VIEW_SITTER != 'undefined' ){

                        window.location.replace(SYSTEM_CHAT_EMPLOYER+ "/" + ID_VIEW_SITTER)
                    }else{

                        window.location.replace(SYSTEM_CHAT_EMPLOYER)
                    }
                }else {
                    /// hide slow 
                    setTimeout(function(){
                        hideProress()
                    }, 1000)
                    /// show error
                    alert("エラーがあります。ページを更新するか、管理者に連絡してください" )
                }
            })
            .catch(error => {
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

    var headerText           = document.createElement("span")
        headerText.id = instance.idModalTextTime
    header.appendChild(headerText)
        
    var timeClose           = document.createElement("button")
        timeClose.id        = instance.idModalButtonTimeClose
        timeClose.className = 'time-close'
        timeClose.innerHTML = 'x'
    header.appendChild(timeClose)
    modal.appendChild( header )

    

    if(instance.selector.getAttribute("data-employer") && instance.selector.getAttribute("data-sitter")){
        // var employerID = instance.selector.getAttribute("data-employer"),
        //     sitterID   = instance.selector.getAttribute("data-sitter")

        //// create body modal 
        var body           = document.createElement("div")
            body.className = instance.classModalBody
            body.innerHTML = 'チャットに行くことができます'
        modal.appendChild( body )

        /// button
        var wrapperButton           = document.createElement("div")
            wrapperButton.className = 'wrapper-button'


        var btnchat           = document.createElement("button")
            btnchat.id        = instance.idModalButtonGotoChat
            btnchat.className = "goto-chat"
            btnchat.innerHTML = 'チャットに行きます'
        wrapperButton.appendChild( btnchat )
        modal.appendChild(wrapperButton)
    }else{

        //// create body modal 
        var body           = document.createElement("div")
            body.className = instance.classModalBody
            body.innerHTML = '利用者ログインを行ってから再度日程を指定してください。'
        modal.appendChild( body )

        /// button
        var wrapperButton           = document.createElement("div")
            wrapperButton.className = 'wrapper-button'


        var btnLogin           = document.createElement("a")
            btnLogin.id        = instance.idModalButtonGotoChat
            btnLogin.className = "goto-login"
            btnLogin.href      = "/employer/login/VIEW_SITTER/"+ID_VIEW_SITTER 
            btnLogin.innerHTML = '利用者ログイン'
        wrapperButton.appendChild( btnLogin )
        modal.appendChild(wrapperButton)
    }
    return modal
}

function eventBeforeOpenModel__selector(_instance){

    var dates       = [],
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
            checkboxFirst = document.getElementById(_instance.idModalCheckFirst),
            checkboxLast =document.getElementById(_instance.idModalCheckLast),
            checkboxs = []
            if( checkboxFirst.checked ){
                checkboxs.push( '1' )
            }
            if( checkboxLast.checked ){
                checkboxs.push( '2' )
            }
        var typeCheck  = ',' + checkboxs.join() + ','
        var event = {
            start: _instance.formatZeroBefore(hourStart.value) + ':' + _instance.formatZeroBefore(minuteStart.value), 
            finish: _instance.formatZeroBefore(hourEnd.value) + ':' + _instance.formatZeroBefore(minuteEnd.value), 
            overnight: 0, 
            status: 0, 
            type: typeCheck
        }
        if(checkValidTime()){
            _instance.overrideEvent(dates, event)
            $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
            _instance.modelClose()
            $('#js-event-data').valid()
        }
    }
    document.getElementById(_instance.idModalButtonEdit).onclick = function(event){

        event.preventDefault();
        var hourStart   = document.getElementById(_instance.idModalHourBegin),
            minuteStart = document.getElementById(_instance.idModalMinuteBegin),
            hourEnd     = document.getElementById(_instance.idModalHourEnd),
            minuteEnd   = document.getElementById(_instance.idModalMinuteEnd),
            checkboxFirst = document.getElementById(_instance.idModalCheckFirst),
            checkboxLast =document.getElementById(_instance.idModalCheckLast),
            checkboxs = []
            if( checkboxFirst.checked ){
                checkboxs.push( '1' )
            }
            if( checkboxLast.checked ){
                checkboxs.push( '2' )
            }
        var typeCheck  = null
            if( checkboxs.length ){
                typeCheck  = ',' + checkboxs.join() + ','
            }
        

        var event = {
            start: _instance.formatZeroBefore(hourStart.value) + ':' + _instance.formatZeroBefore(minuteStart.value), 
            finish: _instance.formatZeroBefore(hourEnd.value) + ':' + _instance.formatZeroBefore(minuteEnd.value), 
            overnight: 0, 
            status: 0, 
            type: typeCheck
        }
        
        if(checkValidTime()){
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
        headerText.id = instance.idModalTextTime
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

    var title           = document.createElement("p")
        title.className = instance.classModalBodyTitle
        title.innerHTML = '予約可能　11：00～22：00'
    body.appendChild( title )

    /// input
    var wrapperInput           = document.createElement("div")
        wrapperInput.className = instance.wrapperInput

    var inputHourBegin      = document.createElement("INPUT")
        inputHourBegin.id   = instance.idModalHourBegin
        inputHourBegin.name   = instance.nameModalHourBegin
        inputHourBegin.type = instance.typeNumber
        inputHourBegin.min  = 0
        inputHourBegin.max  = 23

    var spanTwoDotBegin           = document.createElement("span")
        spanTwoDotBegin.innerHTML = '：'

    var inputMinuteBegin    = document.createElement("INPUT")
        inputMinuteBegin.id = instance.idModalMinuteBegin
        inputMinuteBegin.name = instance.nameModalMinuteBegin
        inputMinuteBegin.type = instance.typeNumber
        inputMinuteBegin.min  = 0
        inputMinuteBegin.max  = 59

    var spanMiddle           = document.createElement("span")
        spanMiddle.innerHTML = '～'

    var inputHourEnd    = document.createElement("INPUT")
        inputHourEnd.id = instance.idModalHourEnd
        inputHourEnd.name = instance.nameModalHourEnd
        inputHourEnd.type = instance.typeNumber
        inputHourEnd.min  = 0
        inputHourEnd.max  = 23

    var spanTwoDotEnd           = document.createElement("span")
        spanTwoDotEnd.innerHTML = '：'

    var inputMinuteEnd    = document.createElement("INPUT")
        inputMinuteEnd.id = instance.idModalMinuteEnd
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
    var wrapperCheckBox           = document.createElement("div")
        wrapperCheckBox.className = instance.wrapperCheckBox
    
    var checkboxfirst    = document.createElement("INPUT")
        checkboxfirst.id = instance.idModalCheckFirst
    checkboxfirst.setAttribute("type", "checkbox")
    checkboxfirst.setAttribute("name", instance.idModalCheckFirst)

    var spanCheckboxFirst           = document.createElement("LABEL")
        spanCheckboxFirst.innerHTML = 'ベビーシッター'
        spanCheckboxFirst.htmlFor   = instance.idModalCheckFirst

    var checkboxLast    = document.createElement("INPUT")
        checkboxLast.id = instance.idModalCheckLast
    checkboxLast.setAttribute("type", "checkbox")
    checkboxLast.setAttribute("name", instance.idModalCheckLast)

    var spanCheckboxLast           = document.createElement("LABEL")
        spanCheckboxLast.innerHTML = '家事代行'
        spanCheckboxLast.htmlFor       = instance.idModalCheckLast

    wrapperCheckBox.appendChild(checkboxfirst)
    wrapperCheckBox.appendChild(spanCheckboxFirst)
    wrapperCheckBox.appendChild(checkboxLast)
    wrapperCheckBox.appendChild(spanCheckboxLast)
    body.appendChild( wrapperCheckBox )
    modal.appendChild(body)

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'

    var btnNew           = document.createElement("button")
        btnNew.id        = instance.idModalButtonNew
        btnNew.innerHTML = '予定をコピーする'

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

// js for icon avatar header
// $(document).ready(function () {
//     $('#client-avatar').on('click', function(){
//         $('.div-avatar .dropdown-content').css("display", "block");
//     });

//     $('.div-avatar .dropdown-content').on('click', function () {
//         $(this).css("display", "none");
//     });
// });

function checkValidTime(){
    var hour_begin = $('#js-hour-begin').val().trim();
    var minute_begin = $('#js-minute-begin').val().trim();
    var hour_end = $('#js-hour-end').val().trim();
    var minute_end = $('#js-minute-end').val().trim();

    var time_start = hour_begin + ':' + minute_begin + ':00';
    var time_end   = hour_end + ':' + minute_end + ':00';

    if(validateTime(time_start) && validateTime(time_end)){
        var start = new Date();
        start.setHours(hour_begin);
        start.setMinutes(minute_begin);
        start.setSeconds(0);

        var end = new Date();
        end.setHours(hour_end);
        end.setMinutes(minute_end);
        end.setSeconds(0);

        if(end > start){
            return true;
        }
    }
    return false;
}

function validateTime (time) {
    const timeReg = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    return timeReg.test(time);
}
