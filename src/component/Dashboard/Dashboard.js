import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import CommonTable from './commontable';
import CommonTableColumn from './commontableCol';
import CommonTableRow from './commontableRow';
import Postmodal from "./Postmodal";

const onClickSend = ((content) => {
  
  axios.post('http://localhost:8080/api/dashboardlist/viewdatas', null, {
    params : {
      'number' : content.board_num
    }
  }).then(res =>{
    console.log(res.data)
  }).catch()
  
})




function GetBoards(){
  
  const [List, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/dashboardList').then((response)=> {
          setList(response.data);
        })
      }, []);
     
      const enabledList = (Object.values(List)).filter(lifeCheck => lifeCheck.is_alive == '1')

      const items = (Object.values(enabledList)).map((everyList) => (
    <CommonTableRow key={everyList.board_num}>
        <CommonTableColumn>{everyList.board_num}</CommonTableColumn>
        <CommonTableColumn>
        <Link to={`./${everyList.board_num}`} onClick={() => onClickSend(everyList) }>{everyList.title}</Link>
        </CommonTableColumn>
        <CommonTableColumn>{everyList.writer}</CommonTableColumn>
        <CommonTableColumn>{everyList.wr_date}</CommonTableColumn>
    </CommonTableRow>
      ));
      return items;
}



function Dashboard() {

const dashlist = GetBoards();

    return(
      <>
       <CommonTable headersName ={['번호','제목','작성자','작성시간']}>
        {dashlist}    
        </CommonTable>
        <Postmodal/>
      </>
    );
}


export default Dashboard;
