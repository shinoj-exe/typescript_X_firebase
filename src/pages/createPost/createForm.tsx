import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import {addDoc,collection} from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"

interface CreateFormData{
  title:string;
  description:string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth)
  const schema = yup.object().shape({
    title:yup.string().required("You must add a title"),
    description:yup.string().required("You must add a description"),
  })

  const {register,handleSubmit,formState:{errors}}= useForm<CreateFormData>({
    resolver: yupResolver(schema)
})

  const postRef= collection(db,"posts")

  const onCreatePost=async (data:CreateFormData)=>{
    // console.log(data);
    await addDoc(postRef,{
      // title:data.title,
      // description:data.description,
      ...data,
      username:user?.displayName,
      userId:user?.uid,
    })
  }
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder='title..'  {...register("title")} />
      <p style={{color:"red"}}>{errors.title?.message}</p>
      <textarea  placeholder='description..' {...register("description")} />
      <p style={{color:"red"}}>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  )
}

export default CreateForm