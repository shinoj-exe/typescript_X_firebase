import React, { useEffect, useState } from 'react'
import {getDocs,collection} from 'firebase/firestore'
import { db } from '../../config/firebase'
import Post from './post';

export interface Post{
  id:string,
  userId:string,
  title:string,
  username:string,
  description:string;
}
const Main = () => {

  const postRef= collection(db,"posts")
  const [postsList,setPostsList]= useState<Post[] | null>(null)
  const getPosts = async ()=>{
    const data = await getDocs(postRef)
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setPostsList(data.docs.map((doc)=>({...doc.data(),id:doc.id}))as Post[])
  }
  useEffect(()=>{
    getPosts()
  },[])//

  return (
    <div>{postsList?.map((post)=>(<Post post={post}/>))}</div>
  )
}

export default Main