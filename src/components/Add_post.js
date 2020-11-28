import React, {useState, useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'

function Add_post() {
    
    const {username} = useContext(LoginContext)
    const [post, setPost] = useState({title: "", body: "", author: username})
    const [list, setList] = useState([])
    
    let postStorage = window.localStorage

    function SavePost(event) {
        event.preventDefault()
        // postStorage.setItem(entry, post)
        // postStorage.setItem("body", post.body)
        // console.log(postStorage)
        setList([...list, post])
        postStorage.setItem("blogs", JSON.stringify(list));
        console.log(postStorage)
        console.log(list)
        
        // var posts = JSON.parse(localStorage.getItem("blogs"));
    }

    // postStorage.clear()

    return (
        <div className="container border reg">
            <h2>New Blog Post</h2>
            <form onSubmit={SavePost}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text" 
                        className="form-control" 
                        value={post.title}  
                        onChange={(e) => {setPost({...post, title: e.target.value})}}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        rows="25" 
                        placeholder="Type your article here"
                        value={post.body}
                        onChange={(e) => {setPost({...post, body: e.target.value})}}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-light">Upload article</button>
            </form>
            <div>
            {
                list.map((item) => (
                    <div>
                        <h3 className="upper">{item.title}</h3>
                        <p>{username}</p>
                        <p>{item.body}</p>
                        <hr/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Add_post
