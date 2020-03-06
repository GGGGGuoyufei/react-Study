import React, {Component} from 'react'
import './Item.css'
export default class Item extends Component {
    render() {
        let {login,avatar_url,html_url} = this.props
        return (
            <div>
                <div className="card">
                    <a href={html_url} target="_blank" rel="noopener noreferrer" >
                        <img src={avatar_url} alt="图片加载失败" style={{width:' 100px'}}/>
                    </a>
                    <p className="card-text">{login}</p>
                </div>
            </div>
        )
    }
}
