

import React, { Component } from "react"
import { connect } from "react-redux"
import '../../scss/chat/search.scss'
import { filterSortConversation, setterConversation } from "../../action"


class Search extends Component {
    
    searchUser = () => {

        console.log("searchUser")
        var backupData = [ ... this.props.conversationBackup ],
            listName   = [],
            text       = this.search.value,
            output     = text.split('')

        if( !text || !text.trim() ){

            this.props.dispatch(setterConversation(this.props.conversationBackup))
            
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
            listName.sort((a, b) => (a.sort > b.sort) ? 1 : -1)
            var lstIdSorted = listName.map( item => item.sort != -1 && item.sort ? item.id : 0 )
            this.props.dispatch(filterSortConversation({ ids : lstIdSorted, data: backupData }))
        }
        
    }
    handleSearchUser = event => {
        if (event.keyCode == 13 ) {
            this.searchUser()
        }
    }

    render() {

        return (
            <div className="component-search-user">
                <i className="hero-icon hero-account-search-outline"></i>
                <input type="text" className="search-user"
                ref={(input) => this.search = input}
                onKeyUp={this.handleSearchUser}
                autoComplete="off"
                name="search-user" placeholder='入力して誰かを見つける' />
                <i className="btn-search hero-icon hero-layers-search-outline"
                onClick={this.searchUser}
                ></i>
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