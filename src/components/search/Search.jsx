import React, {Component} from 'react'
import axios from 'axios'
export default class Search extends Component {

    search=()=>{
        let searchContent = this.content.value
        let {updateAppState} = this.props
        updateAppState({
            welcome:false,
            loading:true,
            users:[],
            err:''
        })
        const url= `https://api.github.com/search/users?q=${searchContent}`
        axios.get(url)
            .then((res)=>{
                let user= res.data.items
                updateAppState({
                    welcome:false,
                    loading:false,
                    users:user,
                    err:''
                })
            })
            .catch((err)=>{
                updateAppState({
                    welcome:false,
                    loading:false,
                    users:[],
                    err:err.toString()
                })
            })
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
