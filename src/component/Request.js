import axios from 'axios';
import React, { Component, useEffect } from 'react';


class Request extends React.Component {
   
    // responseData = async ()=> {  -------deprecated------
    //     let link = 'http://localhost:8080/api/database'
    //     const response_data = await axios.get(link).then
    //     (response_data=response_data.data);

    //     console.log(response_data);
    // }

    state = {
        arr: []
    };

    getMyData=async()=>{
        let retData = await axios.get('http://localhost:8080/api/database');
        retData = retData.data;
        console.log(JSON.stringify(retData));
        this.setState({arr:retData});
    }

    componentDidMount(){
        console.log("in componentDidMount");
        this.getMyData();
    }

    render(){
        return(
            <div>
                <h1>Register information on your table</h1>
                  {
                    this.state.arr.map((myMap)=>{
                        return (
                        <div>
                        <ul>
                        <li key = {myMap.id}> id: {myMap.id} / pw: {myMap.pw} / name: {myMap.name} </li>
                        </ul>
                        </div> );
                    })
                }
            </div>
                )
}


}

export default Request;





// function Request(){
//     const callApi = async () => {
//     const response_api = await axios.get('http://localhost:8080/api');
//     };
  
//     const callDatabase = async () => {
//       const response_data = await axios.get('http://localhost:8080/api/database');
//     };
  
//     useEffect(()=>{}, []);
//   }

