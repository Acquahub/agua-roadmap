import styles from './feature.module.css';

import VoteButton from '../../components/voteButton';
import Subtitle from '../../components/subtitle';
import Tag from '../../components/tag';

export default function Feature({ title, votes, tag, notifyParentVotesChanged }) {

  return (
    <div className={styles['container']}>
      <div className={styles['titleContainer']}>
        <VoteButton notifyParentVotesChanged={notifyParentVotesChanged} votes={votes} />
      </div>
        <div className={styles.containerInfo}>
          <Subtitle title={title} />

          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <Tag tag={tag} />
          </div>
        </div>

    </div>
  )
}
