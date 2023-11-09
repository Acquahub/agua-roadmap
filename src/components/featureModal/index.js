import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './featureModal.module.css';
import VoteButton from "../voteButton";
import Subtitle from "../subtitle";
import Tag from "../tag";
import Comments from "../comments";

export default function FeatureModal({ feature, userVoted, onClose, notifyParentVotesChanged, notifyUserVoted }) {
    return (
        <Modal show={true} onHide={onClose} centered size={"xl"}>
            <Modal.Header className={styles.modal_header} >

                <div className={styles['container']}>
                    <div className={styles['titleContainer']}>
                        <VoteButton 
                            votes={feature.votes}
                            userVotedInit={userVoted}
                            notifyParentVotesChanged={notifyParentVotesChanged}  
                            notifyUserVoted={notifyUserVoted}
                        />
                    </div>
                    <div className={styles.containerInfo} >
                        <h5><Subtitle title={feature.title} />   </h5>

                        <div>
                            <Tag tag={feature.tag} />
                        </div>

                        <div className={styles['description']}>
                            <p>{feature.description}</p>
                        </div>
                    </div>

                </div>
            </Modal.Header>

            <Modal.Body>
                <Comments />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {onClose(feature.votes)}}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
