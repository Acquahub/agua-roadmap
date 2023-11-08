import styles from './feature.module.css';

import VoteButton from '../../components/voteButton';
import Subtitle from '../../components/subtitle';
import Tag from '../../components/tag';
import FeatureModal from '../../components/featureModal';
import {useState} from "react";

export default function Feature({ title, votes, description, tag, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userVoted, setUserVoted] = useState(false);
  const [changingVotes, setVotes] = useState(votes);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const notifyUserVoted = () => {
    setUserVoted(!userVoted);
  }

  const notifyParentVotesChanged = (id, amount) => {
    setVotes(amount);
}

  return (
    <div className={styles['container']}>
      <div className={styles['titleContainer']}>
        <VoteButton 
          votes={changingVotes}
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
                changingVotes,
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
