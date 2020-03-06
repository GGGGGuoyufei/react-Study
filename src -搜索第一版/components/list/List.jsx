import React, {Component} from 'react'
import Item from "../item/Item";

export default class List extends Component {

    render() {
        let {welcome,loading,users,err}= this.props.appState
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
