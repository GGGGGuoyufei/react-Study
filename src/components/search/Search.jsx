import React, {Component} from 'react'

export default class Search extends Component {

    search=()=>{
        let {updateAppState} =this.props
        let keyWord = this.content.value
        updateAppState(keyWord)

    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref={(input)=>{this.content = input}}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
