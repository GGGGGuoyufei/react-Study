import React, {Component} from 'react'
import Item from "../item/Item";
import axios from 'axios'
export default class List extends Component {
    state = {
        welcome:true,
        loading:false,
        users:[],
        err:''
    }
    componentWillReceiveProps({keyWord}){
        console.log(keyWord)
        this.setState({
            welcome:false,
            loading:true,
            users:[],
            err:''
        })
        const url = `https://api.github.com/search/users?q=${keyWord}`
        axios.get(url)
            .then((res)=>{
                let users =  res.data.items
                this.setState({
                    welcome:false,
                    loading:false,
                    users,
                    err:''
                })
            })
            .catch((err)=>{
                this.setState({
                    welcome:false,
                    loading:false,
                    users:[],
                    err:err.toString()
                })
            })
    }
    render() {
        let {welcome,loading,users,err} = this.state
        if(welcome){
            return <h2>输入关键字搜索</h2>
        }else if(loading){
            return <h2>加载中..</h2>
        }else if(err){
            return <h2>{err}</h2>
        }else{
            return (
                <div>
                    <div className="row">
                        {
                            users.map((item)=>{
                                return <Item key={item.login} {...item}/>
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}
