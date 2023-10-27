import React, { useState } from 'react';
import styles from './comments.module.css';
import { Button, Form, ListGroup } from 'react-bootstrap';

export default function Comments() {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setCommentsList([...commentsList, comment]);
            setComment('');
        }
    };

    return (
        <div className={styles.commentsContainer}>
            <h3>Comments</h3>
            <Form>
                <Form.Group className={styles.commentInputContainer}>
                    <Form.Control
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                        className={styles.commentInput}
                    />
                    <Button onClick={handleAddComment} variant="outline-secondary" size="sm">
                        Add Comment
                    </Button>
                </Form.Group>
            </Form>
            <div className={styles.commentsList}>
                <ListGroup>
                    {commentsList.map((comment, index) => (
                        <ListGroup.Item key={index}>
                            {comment}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    );
}
