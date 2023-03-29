import "./post.css"
export default function Post({ post }) {
    return (
        <div className='post'>
            <div className="postWrapper">
                <img className="thumb" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    srcset="" />
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    )
}
