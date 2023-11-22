import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function CreateFeatureModal({ show, handleClose, onFeatureCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const availableTags = ['Bug Reports', 'Feature Requests', 'Integrations'];
    const [selectedTags, setSelectedTags] = useState(availableTags[0]);

    const [validate, setValidate] = useState(false);




    const handleSubmit = (e) => {
        e.preventDefault()
        setValidate(true);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const newFeature = {
                title: title,
                description: description,
                tag: selectedTags,
                status: 'Open',
                votes: 0,
            };

            onFeatureCreate(newFeature);


            setTitle('');
            setDescription('');
            setSelectedTags(availableTags[0]);
            setValidate(false)
            handleClose();

        }


    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true} centered>
            <Form noValidate validated={validate} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Feature</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter feature title"
                            autoFocus
                        />
                        <Form.Control.Feedback type="invalid">Please provide a title.</Form.Control.Feedback>
                        <Form.Control.Feedback>Valid title!</Form.Control.Feedback>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter feature description"
                        />
                        <Form.Control.Feedback type="invalid">Please provide a Description.</Form.Control.Feedback>
                        <Form.Control.Feedback>Valid Description!</Form.Control.Feedback>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Select
                            value={selectedTags}
                            onChange={(e) => setSelectedTags(e.target.options[e.target.selectedIndex].value)}>
                            {availableTags.map((tag) => (
                                <option key={tag} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
