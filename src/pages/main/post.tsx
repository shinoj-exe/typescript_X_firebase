import { addDoc, collection ,getDocs,query, where} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { Post as IPost } from './main'
interface Props{
    post:IPost;
}

const Post = (props:Props) => {
    const {post}=props;
  const [user] = useAuthState(auth)
  const [likeAmount, setLikeAmount] = useState<number | null>(null);
    const likesRef= collection(db,"likes")
    const navigate = useNavigate()

    const likesDoc=query(likesRef,where("postId","==",post.id))

    const getLikes=async()=>{
        const data = await getDocs(likesDoc)
        console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        setLikeAmount(data.docs.length)
    }

    useEffect(()=>{
        getLikes()
    },[])

    const addLike=async ()=>{
      // console.log(data);
      await addDoc(likesRef,{
        userId:user?.uid,
        postId:post.id
      })
      navigate("/")
    }
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
        <button onClick={addLike}>&#128077;</button>
        {likeAmount && <p>LIkes: {likeAmount}</p>}
        <button onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}{" "}
        </button>
        {likes && <p> Likes: {likes?.length} </p>}
      </div>
    </div>
  )
}

export default Post