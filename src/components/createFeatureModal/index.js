import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function FeatureForm({ show, handleClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const availableTags = ['Bug Reports', 'Integrations', 'Feature Requests'];


    const handleSubmit = () => {

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Feature</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter feature title"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter feature description"
                        />
                    </Form.Group>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Select
                            value={selectedTags}
                            onChange={(e) => setSelectedTags(Array.from(e.target.selectedOptions, (option) => option.value))}
                        >
                            {availableTags.map((tag) => (
                                <option key={tag} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
