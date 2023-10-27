import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './featureModal.module.css';
import VoteButton from "../voteButton";
import Subtitle from "../subtitle";
import Tag from "../tag";
import Comments from "../comments";
export default function FeatureModal({ feature, onClose,notifyParentVotesChanged }) {
    return (
        <Modal show={true} onHide={onClose} centered size={"xl"}>
            <Modal.Header >


            <div className={styles['container']}>
                <div className={styles['titleContainer']}>
                    <VoteButton notifyParentVotesChanged={notifyParentVotesChanged} votes={feature.votes} />
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
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
