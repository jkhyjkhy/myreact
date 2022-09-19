import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import React, { useEffect, useState } from "react";

function Postmodal() {

    const [show, setShow] = useState(false);
    const [inputTitle, setTitle] = useState('');
    const [inputWriter, setWriter] = useState('');
    const [inputDate, setDate] = useState('');
    const [inputContent, setContent] = useState('');
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(sessionStorage.getItem('logined_id') == undefined)
      {
        alert('게시물을 작성하려면 먼저 로그인해 주세요')
        document.location.href = '/Login'
      }
      else{
      setShow(true);
    }}  
  
    const handleInputTitle = (e) => {
      setTitle(e.target.value)
    }
    const handleInputContent = (e) => {
      setContent(e.target.value)
    }
    
   

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const onClickSend = () => {
        axios.post('http://localhost:8080/api/Post', null, {
            params: {
              'title' : inputTitle,
              'content' : inputContent,
              'id' : sessionStorage.getItem('logined_id')
            }
          }).then(res => {
              console.log(inputTitle)
              console.log(inputContent)
              console.log(res.data[0])

                alert('업로드 성공')
                document.location.href='/Dashboard'

          })
    }
    
  
  
  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Post
        </Button>
  
        <Modal show={show} onHide={handleClose} noValidate validated={validated} onSubmit={handleSubmit}>
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
                  placeholder="여기에 제목을 입력"
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
  }
    



  export default Postmodal;