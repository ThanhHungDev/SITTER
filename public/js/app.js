

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
                instanceCalendar.setInputEventData(inputEvent)
                instanceCalendar.setBeforeOpenModel(eventBeforeOpenModel__selector)
                instanceCalendar.setAfterOpenModel(eventAfterOpenModel__selector)
                instanceCalendar.setCreateModel(createModelCalendar__selector)
                instanceCalendar.draw()
            }
        }else{
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

function eventAfterOpenModel__viewer(_instance, dates){

    /// do something
    document.getElementById(_instance.idModalButtonTimeClose).onclick = function(){

        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
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

    //// create body modal 
    var body           = document.createElement("div")
        body.className = instance.classModalBody
        body.innerHTML = 'チャットでベビーシッターさんと直接メッセージのやり取りができます'
    modal.appendChild( body )

    /// button
    var wrapperButton           = document.createElement("div")
        wrapperButton.className = 'wrapper-button'

    var btnchat           = document.createElement("a")
        btnchat.id        = instance.idModalButtonGotoChat
        btnchat.href      = "/chat"
        btnchat.innerHTML = 'チャットでやりとりをする'

    wrapperButton.appendChild( btnchat )
    modal.appendChild(wrapperButton)

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
    document.getElementById(_instance.idModalButtonNew).onclick = function(){

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
        _instance.overrideEvent(dates, event)
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
    }
    document.getElementById(_instance.idModalButtonEdit).onclick = function(){

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
        
        _instance.updateEvent( dates[0], event )
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
    }
    document.getElementById(_instance.idModalButtonDelete).onclick = function(){

        _instance.deleteEvent(dates[0])
        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
    }
    document.getElementById(_instance.idModalButtonTimeClose).onclick = function(){

        $( "." + _instance.classPicked ).removeClass(_instance.classPicked)
        _instance.modelClose()
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

    var inputHourBegin    = document.createElement("INPUT")
        inputHourBegin.id = instance.idModalHourBegin

    var spanTwoDotBegin           = document.createElement("span")
        spanTwoDotBegin.innerHTML = '：'

    var inputMinuteBegin    = document.createElement("INPUT")
        inputMinuteBegin.id = instance.idModalMinuteBegin

    var spanMiddle           = document.createElement("span")
        spanMiddle.innerHTML = '～'

    var inputHourEnd    = document.createElement("INPUT")
        inputHourEnd.id = instance.idModalHourEnd

    var spanTwoDotEnd           = document.createElement("span")
        spanTwoDotEnd.innerHTML = '：'

    var inputMinuteEnd    = document.createElement("INPUT")
        inputMinuteEnd.id = instance.idModalMinuteEnd

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
        btnNew.innerHTML = '予約する のコピー'

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