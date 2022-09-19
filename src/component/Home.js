import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Loginform from './Loginform';
// this is Home file for App.js

function Home() {
    const [loginId,setLoginId] = useState("");

const sessioncheck = () => {
    sessionStorage.getItem.name('logined_id')
}
    const onLogout = () => {
        sessionStorage.removeItem('logined_id')
        document.location.href ='/'
    }

   
    useEffect(()=> {
    })

    if(sessionStorage.getItem('logined_id') === null){
        return(
            <div>
                Welcome! Here is our Homepage
            </div>
        )
    } else{
            return(
            <div>
                <div>
        Glad to meet you, User::{JSON.stringify(sessionStorage.getItem('logined_id'))}
        <div><button type='button' onClick={onLogout}>Logout</button></div>
                </div>   
            </div>
        )}
   
}
export default Home;