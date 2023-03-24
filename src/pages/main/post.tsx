import React from 'react'
import { Post as IPost } from './main'
interface Props{
    post:IPost;
}

const Post = (props:Props) => {
    const {post}=props;
  return (
    <div>
        <div className="title">
        <h1> {post.title}</h1>
      </div>
      <div className="body">
        <p> {post.description} </p>
      </div>

      <div className="footer">
        <p> @{post.username} </p>
        {/* <button onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}{" "}
        </button>
        {likes && <p> Likes: {likes?.length} </p>} */}
      </div>
    </div>
  )
}

export default Post