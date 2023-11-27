import React, { useState } from 'react';
import styles from './comments.module.css';

import { Button } from 'react-bootstrap';

export default function Comments() {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== '') {
            const currentDate = new Date();
            const newComment = {
                text: comment,
                date: currentDate,
            };
            setCommentsList([...commentsList, newComment]);
            setComment('');
        }
    };

    return (
        <div className={styles.commentsContainer}>
            <div className={styles.commentInput}>
                <input
                    type="text"
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <Button className={styles.button} variant="outline-secondary" onClick={handleCommentSubmit}>
                    Post
                </Button>
            </div>
            <ul className={styles.commentList}>
                {commentsList.map((comment, index) => (
                    <li key={index} className={styles.comment}>
                        <div className={styles.comment_text}>{comment.text}</div>
                        <div className={styles.comment_date}>
                            {comment.date.toLocaleString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
