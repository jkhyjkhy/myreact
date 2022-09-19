import axios from "axios";
import React from "react";
import { useState } from "react";

function Registerform () {

    const[newId,setnewId]=useState('')
    const[newPw,setnewPw]=useState('')
    const[newName,setnewName]=useState('')
    const[newPhoneNo,setnewPhoneNo]=useState('')
    const[newBirth,setnewBirth]=useState('')
    const[newAddress,setnewAddress]=useState('')
    const[newEmail,setnewEmail]=useState('')

    const handlenewId = (e) =>{
        setnewId(e.target.value)
    }
    const handlenewPw = (e) =>{
        setnewPw(e.target.value)
    }
    const handlenewName = (e) =>{
        setnewName(e.target.value)
    }
    const handlenewPhoneNo = (e) =>{
        setnewPhoneNo(e.target.value)
    }
    const handlenewBirth = (e) =>{
        setnewBirth(e.target.value)
    }
    const handlenewAddress = (e) =>{
        setnewAddress(e.target.value)
    }
    const handlenewEmail = (e) =>{
        setnewEmail(e.target.value)
    }

   const onClickSignup= () => {
        axios.post('http://localhost:8080/api/register', null , {
            params: {
            'id' : newId,
            'pw' : newPw,
            'name' : newName, 
            'phone' : newPhoneNo,
            'birth' : newBirth,
            'address' : newAddress,
            'email' : newEmail
            } 
        }).then(res => {
            console.log('res.data :: ', res.data)
            console.log('newId :: ', newId)
            if(newId == res.data)
            {
                alert('회원가입 성공!')
               //document.location.href='/'
            }
            else {
                alert('회원가입 실패')
                //document.location.href='/'
            }
        })
    }
    return (
        <div>
            <div>
            <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={newId} onChange={handlenewId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='text' name='input_pw' value={newPw} onChange={handlenewPw} />
            </div>
            <div>
                <label htmlFor='input_name'>Name : </label>
                <input type='text' name='input_name' value={newName} onChange={handlenewName} />
            </div>
            <div>
                <label htmlFor='input_phone'>Phone : </label>
                <input type='text' name='input_phone' value={newPhoneNo} onChange={handlenewPhoneNo}/>
            </div>
            <div>
                <label htmlFor='input_birth'>Date of birth : </label>
                <input type='text' name='input_birth' value={newBirth} onChange={handlenewBirth}/>
            </div>
            <div>
                <label htmlFor='input_address'>Address : </label>
                <input type='text' name='input_address' value={newAddress} onChange={handlenewAddress}/>
            </div>
            <div>
                <label htmlFor='input_email'>Email : </label>
                <input type='text' name='input_email' value={newEmail} onChange={handlenewEmail}/>
            </div>
            <div>
                <button type='button' onClick={onClickSignup}>Signup!</button>
            </div>
        </div>
    )


}

export default Registerform;