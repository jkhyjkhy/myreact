import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './dashview.css';
import Update from "./Update";


const DeletePost = ((dashnum) => { //delete post
  if(sessionStorage.getItem('logined_id') == sessionStorage.getItem('current_id')){
    alert('정말 삭제하시겠습니까?')
      axios.post('http://localhost:8080/api/Delete', null, {
        params : {
          'number' : dashnum
        }
      }).then((response) => {
        console.log(response)

        alert('게시물이 삭제되었습니다.')
        document.location.href = '/Dashboard'
      }).catch()}
  else{
  alert('이거 님 게시물 아니잖아요')}
})

/** const UpdatePost= ((dashnum) => { //update post
    const [inputNumber, setinNumber] = useState('');
    const [inputTitle, setinTitle] = useState('');
    const [inputContent, setinContent] = useState('');
    const [show, setShow] = useState(true);
    

    const onClickSend = (() => {
      axios.post('http://localhost:8080/api/Update', null, {
            params: {
              'title' : inputTitle,
              'content' : inputContent,
              'number' : dashnum
            }
          }).then(res => {
              console.log(res.data[0])

                alert('업로드 성공')
    })
  })

    const handleInputTitle = (e) => {
      setinTitle(e.target.value)
    }
    const handleInputContent = (e) => {
      setinContent(e.target.value)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(sessionStorage.getItem('logined_id') == undefined)
      {
        alert('게시물을 수정하려면 먼저 로그인해 주세요')
        document.location.href = '/Login'
      }
      else{
      setShow(true);
    }}  
    
    
return (
<>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>게시글 작성</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control
        value={inputTitle}
        onChange={handleInputTitle}
        type="text"
        required
        autoFocus
      />
        <Form.Control.Feedback type="invalid">
        제목을 입력해주세요!  
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Content</Form.Label>
      <Form.Control as="textarea" rows={3} value={inputContent} onChange={handleInputContent} required/>
      <Form.Control.Feedback type="invalid">
      내용을 입력해주세요! 
      </Form.Control.Feedback>
    </Form.Group>
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button type="submit" variant="primary" 
  onClick={onClickSend}>
    Upload
  </Button> 
</Modal.Footer>
</Modal>
</>
)
}) **/



const GetData = ((dashnum) => { //print board on your web

    const [Seq, setSeq] = useState([]);
    const [Title, setTitle] = useState([]);
    const [Writer, setWriter] = useState([]);
    const [Date, setDate] = useState([]);
    const [Content, setContent] = useState([]);
   
    useEffect(() => {
      axios.post('http://localhost:8080/api/dashboardList/viewdatas', null, { 
        params : {
        'number' : dashnum
        }
    }).then((response) => {
      setSeq(response.data[0].board_num)
      setTitle(response.data[0].title)
      setWriter(response.data[0].writer)
      setDate(response.data[0].wr_date)
      setContent(response.data[0].content)
      console.log(response.data[0].is_alive)
      })}, [])
      sessionStorage.setItem('current_id',Writer)

      const item =  (<> 
        <h2 align="center">게시글 상세정보</h2>
        <div className="dash-view-wrapper">
            <div className="dash-view-row">
                <label>게시글 번호</label>
                <label>{Seq}</label>
            </div>
            <div className="dash-view-row">
                <label>제목</label>
                <label>{Title}</label>
            </div>
            <div className="dash-view-row">
              <label>작성자</label>
              <label>{Writer}</label>
             </div>
            <div className="dash-view-row">
                <label>작성일</label>
                <label>{Date}</label>
            </div>
            <div className="dash-view-row">
                <label>내용</label>
                <div>
                    {Content}
                </div>
            </div>
        </div>
        </>)

return item;
      
    })   
//       / <Button type="submit" onClick={DeletePost(Writer) =>  }>Delete</Button>

  
  function Dashview() {
    const {board_num} = useParams();
    const item = GetData(board_num);
    //const userCheck = ValidationForuser(sessionStorage.getItem('current_id'))
    return (
    <>
          {item}
          <button type='submit' onClick ={() => DeletePost(board_num)}>Delete</button>
         <Update dashnum = {board_num}/>
    </>);
  }
    

export default Dashview;