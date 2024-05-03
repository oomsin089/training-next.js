"use client"
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const router = useRouter()
    const [first_name, setFirstname] = useState<string>("")
    const [last_name, setLastname] = useState<string>("")
    const [phone_number, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        const data : IUser = {
            first_name,
            last_name,
            phone_number,
            email
        }

        const response = await axios.post("https://663489dc9bb0df2359a1d021.mockapi.io/api/v1/users" ,data)
        if(response.status === 201){
            alert("Add user success")
            router.push("/")
        }else{
            alert("Add user failed")
        }
    }
  return (
<>
<div>addUser</div>
<form>
    <label>First name : </label>
    <input type='text' name="first_name" required onChange={(e) => {setFirstname(e.target.value)}}value={first_name}/>
    <br/>
    <label>Last name : </label>
    <input type='text' name="last_name" required onChange={(e) => {setLastname(e.target.value)}}value={last_name}/>
    <br/>
    <label>Phone number : </label>
    <input type='text' name="phone_number" required onChange={(e) => {setPhoneNumber(e.target.value)}}value={phone_number}/>
    <br/>
    <label>Email : </label>
    <input type='email' name="email" required onChange={(e) => {setEmail(e.target.value)}}value={email}/>
    <br/>
    <button type='submit' onClick={handleAdd}>Add</button>
</form>
</>
  )
}