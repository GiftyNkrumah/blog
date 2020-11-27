import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Posts() {
            
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {setBlogs(result.data)})
            .catch((error) => {console.log(error)})
    })

    return (
        <div className='container border reg'>
            <h1>Blog Posts</h1>
            <p> 
                Entertain yourself by going through our blog titles - just titles...for now
            </p><br/>

            <div>
            {
                blogs.map((blog) => (
                    <div>
                        <h5 className="upper" key={blog.id}>{blog.title}</h5>
                        <p key={blog.id}>{blog.body}</p>
                        <hr/>
                    </div>
                    )
                )
            } 

            {/* 
                <div className="col-md-6">
                    <img className='log' src={img} alt="login"/>  
                </div>
                <div className="col center">
                    <h2>Log in</h2>
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" onChange={ChangeStateUsername} value={username} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={ChangeStatePassword} value={password} className="form-control" required/>
                        </div>
                        <button onClick={FormValidation} type="submit" className="btn btn-light" >Log in</button>
                    </form><br/>
                    {/* <p>Or sign in via...</p>
                <p>
                   <a href="https://www.facebook.com/login"><img className="icon" src={fb} alt="Facebook"/></a>
                   <a href="https://accounts.google.com/login"><img className="icon" src={google} alt="Google"/></a>
                </p> */}
            </div>
        </div>

            
        
    )
}

export default Posts
