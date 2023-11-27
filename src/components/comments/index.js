import React, { useState, useEffect } from 'react';
import styles from './comments.module.css';

import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { Button } from 'react-bootstrap';

export default function Comments({ feature, onCommentPosted }) {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        if (feature.comments) {
            setCommentsList(feature.comments);
        }
    }, [feature.comments]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async () => {
        if (comment.trim() !== '') {
            const currentDate = new Date();
            const newComment = {
                text: comment,
                date: currentDate,
            };
    
            try {
                const commentRef = await addDoc(collection(db, 'comments'), newComment);
                const commentId = commentRef.id;
    
                // 2. Actualizar la feature con el comentario en Firebase
                const updatedFeature = { ...feature, comments: [...feature.comments, commentId] };
                const featureRef = doc(db, process.env.REACT_APP_DATABASE_NAME, feature.id);
                await updateDoc(featureRef, updatedFeature);
    
                // 3. Actualizar la lista local de comentarios
                setCommentsList([...commentsList, newComment]);
                onCommentPosted(feature, commentsList);
            } catch (error) {
                console.error("Error adding comment:", error);
            }
    
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
