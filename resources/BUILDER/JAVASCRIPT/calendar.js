'use trick'
function Calendar() {

    this.isCalendarSelector = false
    this.selector           = null
    this.inputEventData     = null
    this.dateLoop           = 1
    this.dateLoopTemp       = 0

    this.toDay        = new Date()
    this.currentDate  = this.toDay.getDate()
    this.currentMonth = this.toDay.getMonth()
    this.currentYear  = this.toDay.getFullYear()

    this.indexDate   = new Date() 
    this.selectDate  = this.toDay.getDate()
    this.selectMonth = this.toDay.getMonth()
    this.selectYear  = this.toDay.getFullYear()

    this.firstDay = (new Date(this.selectYear, this.selectMonth)).getDay()

    this.labelDays  = ["日", "月", "火", "水", "木", "金", "土"]
    this.labelYear  = '年'
    this.labelMonth = '月'
    this.TEXT_PREV  = '<i class="fas fa-chevron-left"></i>'
    this.TEXT_NEXT  = '<i class="fas fa-chevron-right"></i>'

    this.data = {}
    this.canPickDrag = true
    this.isDrag      = false
    this.dragBegin   = null 
    this.dragEnd     = null

    this.attributeDate = 'data-date'

    this.classWrapperCalendar = 'calendar-wrapper-calendar'
    this.classWrapperRowCell  = 'calendar-wrapper-row-cell'
    this.classRow             = 'calendar-row'
    this.classInToday         = 'calendar-today'
    this.classInSunday        = 'calendar-sunday'
    this.classInSatday        = 'calendar-satday'
    this.classHeader          = 'calendar-header'
    this.classTitleDay        = 'calendar-title-day'
    this.classBody            = 'calendar-body'
    this.classFooter          = 'calendar-footer'
    this.classCell            = 'calendar-cell'
    this.classCellDisable     = 'calendar-cell-disable'
    this.classPicked          = 'calendar-picked'
    this.classCellDate        = 'calendar-cell-date'
    this.classNext            = 'calendar-next'
    this.classPrev            = 'calendar-prev'
    this.classCellEvent       = 'calendar-event'
    this.classCellHasEvent    = 'calendar-has-event'

    //// class modal
    this.classModal          = 'calendar-modal'
    this.classModalHeader    = 'calendar-modal-header'
    this.classModalClose     = 'calendar-modal-close'
    this.classModalBody      = 'calendar-modal-body'
    this.classModalFooter    = 'calendar-modal-footer'
    this.classModalBodyTitle = 'calendar-modal-body-title'

    this.wrapperCheckBox     = 'calendar--wrapper__checkbox'
    this.wrapperInput        = 'calendar--wrapper__input'

    this.idModalTextTime        = 'js-modal-header__text'
    this.idModalCalendar        = 'js-modal-calendar'
    this.idModalHourBegin       = 'js-hour-begin'
    this.idModalHourEnd         = 'js-hour-end'
    this.idModalMinuteBegin     = 'js-minute-begin'
    this.idModalMinuteEnd       = 'js-minute-end'
    this.idModalCheckFirst      = 'js-modal-check-first'
    this.idModalCheckLast       = 'js-modal-check-last'
    this.idModalButtonNew       = 'js-modal-button-new'
    this.idModalButtonEdit      = 'js-modal-button-edit'
    this.idModalButtonDelete    = 'js-modal-button-delete'
    this.idModalButtonTimeClose = 'js-modal-button-time-close'
    this.idModalButtonGotoChat  = 'js-modal-button-chat'
    this.typeNumber             = 'number'
    this.nameModalHourBegin     = 'hour_begin'
    this.nameModalHourEnd       = 'hour_end'
    this.nameModalMinuteBegin   = 'minute_begin'
    this.nameModalMinuteEnd     = 'minute_end'
    /// settter function create modal 
    this.createModal = null

    this.eventBeforeOpenModel = null
    this.eventAfterOpenModel  = null

    this.setBeforeOpenModel = function( _function ){

        this.eventBeforeOpenModel = _function
    }
    this.setAfterOpenModel = function( _function ){
        
        this.eventAfterOpenModel = _function
    }
    this.setCreateModel = function( _function ){
        
        this.createModal = _function
    }

    this.setLabelDays = function(_labelDays){

        this.labelDays = _labelDays
    }
    this.setLabelMonth = function(_labelMonth){

        this.labelMonth = _labelMonth
    }
    this.setLabelYear = function(_labelYear){

        this.labelYear = _labelYear
    }
    this.setCurrentDay = function( _day ){

        this.toDay        = _day
        this.currentDate  = this.toDay.getDate()
        this.currentMonth = this.toDay.getMonth()
        this.currentYear  = this.toDay.getFullYear()
        this.firstDay     = (new Date(this.selectYear, this.selectMonth)).getDay()
    }
    this.setSelectIndexDay = function( _day ){

        this.indexDate   = _day
        this.selectDate  = this.indexDate.getDate()
        this.selectMonth = this.indexDate.getMonth()
        this.selectYear  = this.indexDate.getFullYear()
        this.firstDay    = (new Date(this.selectYear, this.selectMonth)).getDay()
    }
    this.setSelectMonth = function( _month ){

        this.indexDate   = new Date(this.selectYear, _month, 1 )
        this.selectDate  = this.indexDate.getDate()
        this.selectMonth = this.indexDate.getMonth()
        this.selectYear  = this.indexDate.getFullYear()
        this.firstDay    = (new Date(this.selectYear, this.selectMonth)).getDay()
    }
    this.setSelectYear = function( _year ){

        this.indexDate   = new Date( _year, this.selectMonth, 1 )
        this.selectDate  = this.indexDate.getDate()
        this.selectMonth = this.indexDate.getMonth()
        this.selectYear  = this.indexDate.getFullYear()
        this.firstDay    = (new Date(this.selectYear, this.selectMonth)).getDay()
    }
    this.setNewCalendarSelector = function( _is_selctor ){

        this.isCalendarSelector = _is_selctor
    }
    this.setElementDraw = function(_selector){

        this.selector = _selector
    }
    this.numDayInMonth = function (iMonth, iYear) {

        return 32 - new Date(iYear, iMonth, 32).getDate()
    }
    this.setEventData = function(_event){

        this.data = _event
    }
    this.setInputEventData = function( _inputEvent ){
        this.inputEventData = _inputEvent
    }
    this.formatZeroBefore = function(number){
        number = parseInt(number)
        if (isNaN(number)) { return "00" }

        if (number < 10) {
            number = "0" + number
        }
        return number
    }
    this.checkToday = function(){

        return this.dateLoop === this.currentDate && 
        this.selectYear  === this.currentYear &&
        this.selectMonth === this.currentMonth
    }
    this.checkSunDay = function(){
        var dayNumber = this.dateLoop
        var theDateLoop = new Date( this.selectYear, this.selectMonth, dayNumber )
        
        
        return theDateLoop.getDay() == 0
    }
    this.checkSatDay = function(){
        var dayNumber = this.dateLoop
        var theDateLoop = new Date( this.selectYear, this.selectMonth, dayNumber )
        
        return theDateLoop.getDay() == 6
    }
    this.leftThanToday = function (){
        
        var indexDay = new Date(this.selectYear, this.selectMonth, this.dateLoop ).getTime(),
        today = new Date(this.currentYear, this.currentMonth, this.currentDate ).getTime()
        return indexDay < today
    }
    this.setPickDrag = function ( _pick ) {

        this.canPickDrag = _pick
    }

    this.createHeader = function(){

        var instance         = this
        var header           = document.createElement("div")
            header.className = this.classHeader

        /// setting button prev
        var TAG_PREV           = document.createElement("span")
            TAG_PREV.className = this.classPrev
            TAG_PREV.innerHTML = this.TEXT_PREV
            TAG_PREV.onclick = function() {

                instance.setSelectMonth(instance.selectMonth - 1 )
                instance.draw();
            }
        header.appendChild(TAG_PREV)

        var TAG_TEXT_DATE_INDEX = document.createElement("span")
            TAG_TEXT_DATE_INDEX = document.createTextNode(
                this.selectYear  + this.labelYear + " " + 
                ( this.selectMonth + 1 ) + this.labelMonth + " "
            )
        header.appendChild(TAG_TEXT_DATE_INDEX)

        ////setting button next
        var TAG_NEXT           = document.createElement("span");
            TAG_NEXT.className = this.classNext
            TAG_NEXT.innerHTML = this.TEXT_NEXT
            TAG_NEXT.onclick = function() {

                instance.setSelectMonth(instance.selectMonth + 1 )
                instance.draw()
            }
        header.appendChild(TAG_NEXT)

        return header
    }
    this.pickData = function(instance){

        $("." + instance.classPicked).removeClass(instance.classPicked);
        
        let beginDate = parseInt(instance.dragBegin);
        let endDate   = parseInt(instance.dragEnd);

        if(parseInt(beginDate) > parseInt(endDate) ){
            let temp      = parseInt(beginDate)
                beginDate = parseInt(endDate)
                endDate   = temp
        }
        
        for (let selectLoop = beginDate; selectLoop <= endDate; selectLoop++) {

            var domPicked = $("." + instance.classCell + '['+instance.attributeDate+'='+selectLoop+']:not(.'+instance.classCellDisable+')');
            domPicked.addClass(instance.classPicked)
        }
    }
    this.createEventDrag = function(instance, cell ){

        if( window.innerWidth < 768 ){

            cell.ontouchstart = function (event) {
                
                if (event.which === 3) {
                    //prevent RIGHT mouse click
                    return;
                }
                instance.isDrag = true
                
                var cell = $(event.target);
                if(!cell.hasClass(instance.classCell)){
                    cell = cell.closest("." + instance.classCell);
                }
    
                if(cell && cell.attr(instance.attributeDate)){
                    
                    instance.dragBegin = cell.attr(instance.attributeDate)
                    instance.dragEnd   = cell.attr(instance.attributeDate)
                    console.log("ontouchstart cell ", instance.dragBegin)
                    instance.pickData(instance)
                }
            }
    
            cell.ontouchmove = function (event) {
                
                if(instance.isDrag){
                    var cell = $(event.target);
                    if(!cell.hasClass(instance.classCell)){
                        cell = cell.closest("." + instance.classCell);
                    }
                    
                    if(cell && cell.attr(instance.attributeDate)){
                        
                        instance.dragEnd = cell.attr(instance.attributeDate)
                        console.log(event, "ontouchmove cell " + instance.dragEnd)
                        instance.pickData(instance)
                    }
                }
            }
            cell.ontouchend = function (event) {
                
                if (event.which === 3) {
                    //prevent RIGHT mouse click
                    return;
                }
    
                instance.isDrag = false
                
                var cell = $(event.target);
                if(!cell.hasClass(instance.classCell)){
                    cell = cell.closest("." + instance.classCell);
                }
                
                if(cell && cell.attr(instance.attributeDate)){
                        
                    instance.dragEnd = cell.attr(instance.attributeDate)
                    console.log(event ,"ontouchend cell " + instance.dragEnd)
                    instance.pickData(instance)
                }
            }
        }else{

            cell.onmousedown = function (event) {
                if (event.which === 3) {
                    //prevent RIGHT mouse click
                    return;
                }
                instance.isDrag = true
                
                var cell = $(event.target);
                if(!cell.hasClass(instance.classCell)){
                    cell = cell.closest("." + instance.classCell);
                }
    
                if(cell && cell.attr(instance.attributeDate)){
                    
                    instance.dragBegin = cell.attr(instance.attributeDate)
                    instance.dragEnd   = cell.attr(instance.attributeDate)
                    instance.pickData(instance)
                }
            }
    
            cell.onmouseover = function (event) {
                
                if(instance.isDrag){
                    var cell = $(event.target);
                    if(!cell.hasClass(instance.classCell)){
                        cell = cell.closest("." + instance.classCell);
                    }
                    
                    if(cell && cell.attr(instance.attributeDate)){
                        
                        instance.dragEnd = cell.attr(instance.attributeDate)
                        instance.pickData(instance)
                    }
                }
            }
            cell.onmouseup = function (event) {
                if (event.which === 3) {
                    //prevent RIGHT mouse click
                    return;
                }
    
                instance.isDrag = false
                
                var cell = $(event.target);
                if(!cell.hasClass(instance.classCell)){
                    cell = cell.closest("." + instance.classCell);
                }
                
                if(cell && cell.attr(instance.attributeDate)){
                        
                    instance.dragEnd = cell.attr(instance.attributeDate)
                    instance.pickData(instance)
                }
            }
        }
        
        
        
        return cell
    }
    this.checkDateHaveEvent = function( year, month, day ){

        return typeof this.data[year] != 'undefined' &&
        typeof this.data[year][month] != 'undefined' &&
        typeof this.data[year][month][day] != 'undefined'
    }
    this.overrideEvent = function( dates, event ){
        event.class = 'event-new'
        
        for (var iOverride = 0; iOverride < dates.length; iOverride++){
            var day                = dates[iOverride],
                numberCurrentDate  = this.formatZeroBefore(day),
                numberCurrentMonth = this.formatZeroBefore(this.selectMonth + 1),
                numberCurrentYear  = this.formatZeroBefore(this.selectYear)
            if(this.data){
                if ( Object.entries(this.data).length === 0 ) {
                    this.data = {}
                }
                if (this.data[numberCurrentYear] == undefined) {
                    this.data[numberCurrentYear] = {}
                }
                if( this.data[numberCurrentYear][numberCurrentMonth] == undefined) {
                    this.data[numberCurrentYear][numberCurrentMonth] = {}
                }
                this.data[numberCurrentYear][numberCurrentMonth][numberCurrentDate] = event
                
            }
        }
        this.draw()
    }
    this.updateEvent = function( day, event ){

        event.class = 'event-update'
        var numberCurrentDate  = this.formatZeroBefore(day),
            numberCurrentMonth = this.formatZeroBefore(this.selectMonth + 1),
            numberCurrentYear  = this.formatZeroBefore(this.selectYear)
        if(this.data){
            
            var dateInEvent = this.checkDateHaveEvent( numberCurrentYear, numberCurrentMonth, numberCurrentDate )
            if( dateInEvent ){
                
                this.data[numberCurrentYear][numberCurrentMonth][numberCurrentDate] = event
            }
        }
        this.draw()
    }

    this.deleteEvent = function( day ){
        var numberCurrentDate  = this.formatZeroBefore(day),
            numberCurrentMonth = this.formatZeroBefore(this.selectMonth + 1),
            numberCurrentYear  = this.formatZeroBefore(this.selectYear)
        if(this.data){
            
            var dateInEvent = this.checkDateHaveEvent( numberCurrentYear, numberCurrentMonth, numberCurrentDate )
            if( dateInEvent ){
                
                delete this.data[numberCurrentYear][numberCurrentMonth][numberCurrentDate]
                if( !Object.keys(this.data[numberCurrentYear][numberCurrentMonth]).length ){

                    delete this.data[numberCurrentYear][numberCurrentMonth]
                }
                if( !Object.keys(this.data[numberCurrentYear]).length ){

                    delete this.data[numberCurrentYear]
                }
            }
        }
        this.draw()
    }

    this.drawEventToDate = function(cell, date){
        var numberCurrentDate  = this.formatZeroBefore(date.getDate()),
            numberCurrentMonth = this.formatZeroBefore(date.getMonth() + 1),
            numberCurrentYear  = this.formatZeroBefore(date.getFullYear())
        /// khi thanh niên không có thư viện lodash
        if(this.data){
            
            var contentEvent = '',
                classEvent   = ''
            var dateInEvent = this.checkDateHaveEvent( numberCurrentYear, numberCurrentMonth, numberCurrentDate )
            if( dateInEvent ){
                
                var event = this.data[numberCurrentYear][numberCurrentMonth][numberCurrentDate]
                contentEvent =  '<i>' + event.start + '</i>' 
                                + '<i> | </i>'
                                + '<i>' + event.finish + '</i>'
                cell.classList.add(this.classCellHasEvent)
                classEvent = event.class
            }
            var textEvent           = document.createElement("span")
                textEvent.innerHTML = contentEvent
            textEvent.classList.add(this.classCellEvent)
            if(classEvent) textEvent.classList.add(classEvent)
            cell.appendChild(textEvent)
        }
        return cell
    }
    this.createCell = function(i, j){

        var cell           = document.createElement("div")
            cell.className = this.classCell

        if (i === 0 && j < this.firstDay && this.dateLoopTemp == 0) {
            /// cell disable before

            cell.classList.add(this.classCellDisable)
            var dateDisable = new Date(this.selectYear, this.selectMonth, 1)
            dateDisable.setDate(dateDisable.getDate() - this.firstDay + j )
            
            var textCell           = document.createElement("span")
                textCell.className = this.classCellDate

                textCell.innerHTML = dateDisable.getDate()
            cell.appendChild(textCell)
            cell.setAttribute(this.attributeDate, dateDisable.getDate())
            cell = this.drawEventToDate(cell, dateDisable )
        }
        else if ( this.dateLoopTemp == 1 || this.dateLoop > this.numDayInMonth(this.selectMonth, this.selectYear)) {

            /// cell disable after
            if(this.dateLoopTemp == 0){
                this.dateLoopTemp = 1
                this.dateLoop = 1
            }
            cell.classList.add(this.classCellDisable)

            var textCell           = document.createElement("span")
                textCell.className = this.classCellDate
                textCell.innerHTML = this.dateLoop
            cell.appendChild(textCell)
            cell.setAttribute(this.attributeDate, this.dateLoop)
            cell = this.drawEventToDate(cell, new Date(this.selectYear, this.selectMonth + 1 , this.dateLoop))
            
            this.dateLoop++

        } else {

            if(this.canPickDrag){
                cell = this.createEventDrag(this, cell);
            }

            var textCell           = document.createElement("span")
                textCell.className = this.classCellDate
                textCell.innerHTML = this.dateLoop
            cell.appendChild(textCell)
            cell.setAttribute(this.attributeDate, this.dateLoop)
            cell = this.drawEventToDate(cell, new Date(this.selectYear, this.selectMonth, this.dateLoop))
            // cell = this.setEventCellOnClick(cell, this.dateLoop)

            if(this.isCalendarSelector && this.leftThanToday() ){
                cell.classList.add(this.classCellDisable)
            }
            // color today's date
            if(this.checkToday()){
                cell.classList.add(this.classInToday)
            }
            // color sunday
            if(this.checkSunDay()){
                cell.classList.add(this.classInSunday)
            }
            // color satDay
            if(this.checkSatDay()){
                cell.classList.add(this.classInSatday)
            }

            this.dateLoop++
        }
        
        return cell
    }
    this.createCells = function(){

        var wrapperBody           = document.createElement("div")

        var titleDays           = document.createElement("div")
            titleDays.className = this.classTitleDay
        
        for(var head = 0; head < this.labelDays.length; head++){

            var thead           = document.createElement("div")
                thead.className = this.classCell

            var textCell           = document.createElement("span")
                textCell.className = this.classCellDate
                textCell.innerHTML =  this.labelDays[head]

            thead.appendChild(textCell)
            /// add cell of thead into titleDays
            titleDays.appendChild(thead)
        }
        wrapperBody.appendChild(titleDays)


        var row_table           = document.createElement("div")
            row_table.className = this.classWrapperRowCell
        // creating all cells
        for (let i = 0; i < 6; i++) {
            // creates a table row
            var row           = document.createElement("div")
                row.className = this.classRow

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                var dataCell = this.createCell(i , j)
                
                row.appendChild(dataCell)
            }

            // appending each row into calendar body.
            row_table.appendChild(row)
        }
        wrapperBody.appendChild(row_table)

        //// reset dateLoop to 1
        this.dateLoop = 1
        //// reset dateLoopTemp to 1
        this.dateLoopTemp = 0
        return wrapperBody
    }

    this.createFooter = function(){

        var footer       = document.createElement("div")
        footer.className = this.classFooter

        var spanFirst = document.createElement("SPAN")
        spanFirst.innerHTML = '予約可能'

        var spanLast = document.createElement("SPAN")
        spanLast.innerHTML = '一部の日程・時間で可能'

        footer.appendChild( spanFirst )
        footer.appendChild( spanLast )

        return footer
    }


    this.newModalPopup = function( dates ){

        if( this.isCalendarSelector ){

            if( document.getElementById(this.idModalCalendar) ){
                document.getElementById(this.idModalCalendar).classList.add('new')

                this.selector.classList.add('modal-open')
    
                document.getElementById(this.idModalButtonNew).classList.remove('d-none')
                document.getElementById(this.idModalButtonEdit).classList.add('d-none')
                document.getElementById(this.idModalButtonDelete).classList.add('d-none')
    
                var headerText = document.getElementById(this.idModalTextTime)
                if( headerText ){
                    if( dates[0] == dates[dates.length - 1]){
                        headerText.innerHTML =  (this.selectMonth + 1) + "月" + dates[0] + "日(火)"
                    }else{
                        headerText.innerHTML =  (this.selectMonth + 1) + "月" + dates[0] + "日(火) - "
                        + (this.selectMonth + 1) + "月" + dates[dates.length - 1] + "日(火)"
                    }                 
                }
            }
        }
        
    }
    this.updateModalPopup = function( dates ){

        if( this.isCalendarSelector ){
            if( dates.length == 1 ){
            
                var day = dates[0]
                var numberCurrentDate  = this.formatZeroBefore(day),
                    numberCurrentMonth = this.formatZeroBefore(this.selectMonth + 1),
                    numberCurrentYear  = this.formatZeroBefore(this.selectYear),
                    event              = this.data[numberCurrentYear][numberCurrentMonth][numberCurrentDate]
                    starts             = event.start.split(':'),
                    hourStart          = starts[0],
                    minStart           = starts[1],
                    ends               = event.finish.split(':'),
                    hourEnd            = ends[0],
                    minEnd             = ends[1]
    
                var checkboxFirst = document.getElementById(this.idModalCheckFirst),
                    checkboxLast  = document.getElementById(this.idModalCheckLast)
                    
                    checkboxFirst.checked = ( event.type && event.type.indexOf(",1,") != -1 )
                    checkboxLast.checked  = ( event.type && event.type.indexOf(",2,") != -1 )
        
                document.getElementById(this.idModalHourBegin).value   = hourStart
                document.getElementById(this.idModalMinuteBegin).value = minStart
                document.getElementById(this.idModalHourEnd).value     = hourEnd
                document.getElementById(this.idModalMinuteEnd).value   = minEnd
    
                var headerText = document.getElementById(this.idModalTextTime)
                if( headerText ){
    
                    headerText.innerHTML = numberCurrentDate + "月" + numberCurrentMonth + "日(火)"
                }
            }
    
            if( document.getElementById(this.idModalCalendar) ){

                this.selector.classList.add('modal-open')
                document.getElementById(this.idModalCalendar).classList.add('update')
    
                document.getElementById(this.idModalButtonNew).classList.add('d-none')
                document.getElementById(this.idModalButtonEdit).classList.remove('d-none')
                document.getElementById(this.idModalButtonDelete).classList.remove('d-none')
            }
        }
        
    }
    this.modelClose = function(){
        var modal = document.getElementById( this.idModalCalendar ) 
        if( modal ){
            modal.classList.add("d-none")
        }
        if( this.isCalendarSelector ){
            
            if( document.getElementById(this.idModalCalendar) ){
                this.selector.classList.remove('modal-open')

                document.getElementById(this.idModalCalendar).classList.remove('new')
                document.getElementById(this.idModalCalendar).classList.remove('update')
    
                document.getElementById(this.idModalButtonNew).classList.add('d-none')
                document.getElementById(this.idModalButtonEdit).classList.add('d-none')
                document.getElementById(this.idModalButtonDelete).classList.add('d-none')
            }
    
            if( this.inputEventData ){
                this.inputEventData.value = JSON.stringify(this.data)
            }
        }
        
    }
    this.openModalCreateEvent = function(instance){
        

        var dates = null
        if( this.setBeforeOpenModel ){
            dates = this.eventBeforeOpenModel( instance )
        }

        /// create modal
        var updateModal = false
        if( dates && dates.length ){
            /// chỉ chọn 1 ngày 
            if( dates.length == 1 ){
                var date = dates[0]
                /// check if data in event data => update 
                if(this.data){
                    if(this.checkDateHaveEvent(
                        this.formatZeroBefore( this.selectYear ), 
                        this.formatZeroBefore( this.selectMonth + 1 ), 
                        this.formatZeroBefore(date)
                    )){
                        updateModal = true
                    }
                }
            }
        }

        if( updateModal ){
            this.updateModalPopup( dates )
        }else{
            this.newModalPopup( dates )
        }
        
        document.getElementById(this.idModalCalendar).classList.remove("d-none")


        if( this.setAfterOpenModel && dates ){
            
            this.eventAfterOpenModel( instance , dates )
        }
    }

    this.draw = function(){
        /// create wrapper calendar
        var calendar           = document.createElement("div")
            calendar.className = this.classWrapperCalendar
        /// create header
        var headerCalendar = this.createHeader()
        /// add header calendar dom into calendar dom
        calendar.appendChild(headerCalendar)
        /// create calendar body
        var tableBody = this.createCells()
        calendar.appendChild(tableBody)
        /// create header
        var footerCalendar  = this.createFooter()
        /// create modal 
        var modal = null
        if( this.createModal ){
            
            modal = this.createModal(this)
            calendar.appendChild(modal)
        }
        
        if( this.selector ){
            this.selector.innerHTML = ''
            this.selector.appendChild(calendar)
            this.selector.appendChild(footerCalendar)
        }
        if( this.canPickDrag ){
            var instance = this;
            if( window.innerWidth < 767 ){
                
                window.ontouchend = function (event) {
                    console.log("21323123 ontouchend")
                    if (event.which === 3) {
                        //prevent RIGHT mouse click
                        return
                    }
                    
                    instance.isDrag = false
                    /// show popup create event 
                    let classPicked = instance.classPicked
                    if(document.getElementsByClassName(classPicked).length){
    
                        var modal = document.getElementById(instance.idModalCalendar)
                        if( modal && modal.classList.contains('d-none') ){
                            instance.openModalCreateEvent(instance)
                        }
                    }
                }
            }else{
                window.onmouseup = function (event) {
                    if (event.which === 3) {
                        //prevent RIGHT mouse click
                        return
                    }
                    
                    instance.isDrag = false
                    /// show popup create event 
                    let classPicked = instance.classPicked
                    if(document.getElementsByClassName(classPicked).length){
    
                        var modal = document.getElementById(instance.idModalCalendar)
                        if( modal && modal.classList.contains('d-none') ){
                            instance.openModalCreateEvent(instance)
                        }
                    }
                }
            }
        }
    }  
    
}

