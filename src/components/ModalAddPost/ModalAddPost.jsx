import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

export const ModalAddPost = ({ isOpen, onChangeOpenModal, newId, onAddPost }) => {
  const [nameField, setNameField] = useState('');
  const [postField, setPostField] = useState('');

  const post = useSelector(state => state.postDetails.details)

  const addPost = () => {
    onAddPost({
      userId: post.userId,
      id: newId,
      title: nameField,
      body: postField,
    });
    onChangeOpenModal(false);
  }

  const closeModalWindow = () => {
    onChangeOpenModal(false)
  }

  return (

    <Modal show={isOpen}>
        <Modal.Header closeButton onClick={closeModalWindow}>
          <Modal.Title>ADD NEW POST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                value={nameField}
                onChange={(event) => {
                  setNameField(event.target.value)
                }}
              />
              <Form.Text className="text-muted">
                Please enter the title
              </Form.Text>
            </Form.Group>

            <InputGroup>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={postField}
                onChange={(event) => {
                  setPostField(event.target.value)
                }}
              />
            </InputGroup>
            <Form.Text className="text-muted">
                Please enter the post
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalWindow}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={addPost}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
};
