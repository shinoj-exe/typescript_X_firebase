import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

interface CreateFormData{
  title:string;
  description:string;
}

const CreateForm = () => {
  const schema = yup.object().shape({
    title:yup.string().required("You must add a title"),
    description:yup.string().required("You must add a description"),
  })

  const {register,handleSubmit,formState:{errors}}= useForm<CreateFormData>({
    resolver: yupResolver(schema)
})

  const onCreatePost=(data:CreateFormData)=>{
    console.log(data);
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