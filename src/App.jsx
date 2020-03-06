import React, {Component} from 'react'
import Search from "./components/search/Search";
import List from './components/list/List'

export default class App extends Component {
    state = {
        welcome:true,
        loading:false,
        users:[],
        err:''
    }
    updateAppState=({welcome,loading,users,err})=>{
        this.setState({
            welcome,
            loading,
            users,
            err
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List appState={this.state}/>
                </div>
            </div>
        )
    }
}
