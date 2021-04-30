import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

export const EditPost = ({isOpen, onCloseModal}) => {
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const post = useSelector(state => state.postDetails.details);

  useEffect(() => {
    setNewTitle(post.title);
    setNewBody(post.body);
  }, []);


  const closeEditWndow = () => {
    onCloseModal(false);
  }

  // const EditPost = () => {

  // }

  return (
    <Modal show={isOpen}>
        <Modal.Header
          closeButton
          onClick={closeEditWndow}
        >
          <Modal.Title>ADD NEW POST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                name="title"
                value={newTitle}
                onChange={(event) => {
                  setNewTitle(event.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Please enter the title
              </Form.Text>
            </Form.Group>

            <Form.Label>Post</Form.Label>
            <InputGroup>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                name="body"
                value={newBody}
                onChange={(event) => {
                  setNewBody(event.target.value);
                }}
              />
            </InputGroup>
            <Form.Text
              className="text-muted"
            >
                Please enter the post
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeEditWndow}
          >
            Close
          </Button>
          <Button
            variant="primary"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
