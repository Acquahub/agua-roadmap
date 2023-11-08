import styles from './feature.module.css';

import VoteButton from '../../components/voteButton';
import Subtitle from '../../components/subtitle';
import Tag from '../../components/tag';
import FeatureModal from '../../components/featureModal';
import {useState} from "react";

export default function Feature({ title, votes, description, tag, status, notifyParentVotesChanged }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userVoted, setUserVoted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const notifyUserVoted = () => {
    setUserVoted(!userVoted);
  }

  return (
    <div className={styles['container']}>
      <div className={styles['titleContainer']}>
        <VoteButton 
          votes={votes}
          userVotedInit={userVoted}
          notifyParentVotesChanged={notifyParentVotesChanged} 
          notifyUserVoted={notifyUserVoted}
         />
      </div>
        <div className={styles.containerInfo} onClick={openModal} >
          <Subtitle title={title} />

          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <Tag tag={tag} />
          </div>
        </div>

      {isModalOpen && (
          <FeatureModal
              feature={{
                title,
                description,
                tag,
                status,
                votes,
              }}
              userVoted={userVoted}
              onClose={closeModal}
              notifyParentVotesChanged={notifyParentVotesChanged}
              notifyUserVoted={notifyUserVoted}
          />
      )}

    </div>
  )
}
