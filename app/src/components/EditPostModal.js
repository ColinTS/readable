import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class EditPostModal extends Component {

  render() {
    const { show, handleHide, message } = this.props

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Edit your Post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            { message }
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}

export default connectModal({ name: 'editPost', destroyOnHide: true })(EditPostModal)