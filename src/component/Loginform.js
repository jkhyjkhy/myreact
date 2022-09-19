import React, {useState, useEffect } from "react";
import axios from 'axios';

 function Loginform()
{
 const [inputId, setInputId] = useState('')
 const [inputPw, setInputPw] = useState('')
 
 // input data의 변화가 있을때마다 value값을 변경해서 useState 함.
 
 const handleInputId = (e) =>{
     setInputId(e.target.value)
 }
 const handleInputPw = (e) =>{
     setInputPw(e.target.value)
 }

 //login 버튼 클릭 이벤트

 const onClickLogin = () => {
     axios.post('http://localhost:8080/api/login', null, {
        params: {
            'id' : inputId,
            'pw' : inputPw
        }
     }).then(res =>{
         console.log(res)
         console.log('res.data.id :: ', res.data.id)
         console.log('res.data.msg :: ', res.data.msg)
         if(res.data.id === undefined){
             alert('입력하신 id가 일치하지 않습니다.')
         }else if(res.data.id === null){
             alert('입력하신 비밀번호가 일치하지 않습니다.')
         }else if(res.data.id === inputId)
         {
            alert('로그인에 성공하여 메인 페이지로 돌아갑니다.')
            sessionStorage.setItem('logined_id',inputId)
            // sessionStorage.setItem('logined_writer',res.data.name)
         document.location.href='/'
         }
     }).catch()
 }

 useEffect(() => {
     axios.get('http://localhost:8080/api/login'). then(res => console.log(res.data[0])).catch()
 },[])

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    );
}


export default Loginform;