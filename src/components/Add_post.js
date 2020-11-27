import React, {useState} from 'react'

function Add_post() {
    
    const [post, setPost] = useState({title: "", body: ""})
    const [list, setList] = useState([])

    function SavePost(event) {
        event.preventDefault()
        setList([...list, post]);
    }

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
                <button type="submit" className="btn btn-primary">Upload article</button>
            </form>
            <div>
            {
                list.map((item) => (
                    <div>
                        <h3 className="upper">{item.title}</h3>
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
