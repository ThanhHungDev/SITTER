

import React, { Component } from "react"
import { connect } from "react-redux"
import '../../scss/chat/search.scss'
import { filterSortConversation, setterConversation } from "../../action"


class Search extends Component {

    constructor(props){
        super( props )

        this.state = {
            hung : null
        }
        this.searchUser = this.searchUser.bind(this)
    }

    
    searchUser(e) {

        var _this      = this,
            backupData = [ ... this.props.conversationBackup ],
            listName   = [],
            text       = e.target.value,
            output     = text.split('')

        console.log( text , "texttexttexttexttexttext")
        if( !text || !text.trim() ){

            this.props.dispatch(setterConversation(this.props.conversationBackup))
            
            if(this.state.hung){
                clearTimeout(this.state.hung)
            }
        }else if( backupData ){
            backupData.map( conv => {
                var obj = { sort: 0, id: conv.id , text: conv.user.first_name + " " }

                listName.push( obj )
            })
            output.map( item => {
                listName.map( search => {
                    if( search.sort != -1 && search.text.toUpperCase().includes(item.toUpperCase())){
                        search.sort ++ 
                    }else{
                        search.sort = -1
                    }
                })
            })
            if(this.state.hung){
                clearTimeout(this.state.hung)
            }
            
            _this.setState({
                hung: setTimeout(function(){ 
                    
                    listName.sort((a, b) => (a.sort > b.sort) ? 1 : -1)
                    var lstIdSorted = listName.map( item => item.sort != -1 && item.sort ? item.id : 0 )
                    _this.props.dispatch(filterSortConversation({ ids : lstIdSorted, data: backupData }))
                }, 600)
            })
        }
         

        
    }

    render() {

        return (
            <div className="component-search-user">
                <i className="hero-icon hero-account-search-outline"></i>
                <input type="text" className="search-user" 
                autoComplete="off"
                onChange={this.searchUser}
                name="search-user" placeholder='入力して誰かを見つける' />
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        conversations     : state.conversations,
        conversationBackup: state.conversationBackup,
        user              : state.user
    }
}
export default connect(mapStateToProps)(Search)