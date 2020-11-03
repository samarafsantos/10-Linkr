import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function ModalComponent(props) {

    const [show, setShow] = useState(false);
    console.log("Its coming to modalcomponent");
    console.log(props);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} shouldCloseOnOverlayClick={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        
        </>
  );
}
{/* <button type="button" onClick={handleOpen}>
            Open Modal
            </button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {body}
            </Modal> */}