import React, {Component} from 'react'
import Search from "./components/search/Search";
import List from './components/list/List'

export default class App extends Component {
    state = {
        keyWord:''
    }
    updateAppState=(keyWord)=>{
        this.setState({keyWord})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List keyWord={this.state.keyWord}/>
                </div>
            </div>
        )
    }
}
